import FalconRocket from './Falcon9/Falcon9';
import FalconHeavy from './FalconHeavy/FalconHeavy';
import Platform from './Platform';
import Exhaust from './Falcon9/Exhaust';
import PropTypes from 'prop-types';
import styled from 'styled-components';


// This function performs regex matching on expected shell output for git push result being input
// at the command line. Currently it supports output from bash, zsh, fish, cmd and powershell.
function detectPushCommand(data) {
  const patterns = ['To(.+).git'];
  const antiPatterns = ['error:'];
  return new RegExp(`(${patterns.join(')|(')})`).test(data) && !new RegExp(`(${antiPatterns.join(')|(')})`).test(data);
}

function detectPullCommand(data) {
  //const patterns = ['Updating'] // for development
  const patterns = ['Unpacking objects:(.+)done.'];
  const antiPattern = /CONFLICT/;
  return new RegExp(`(${patterns.join(')|(')})`).test(data) && !antiPattern.test(data)
}


function detectByteCommand(data) {
  const patterns = ['Writing(.+),(.+)KiB'];
  if (new RegExp(`(${patterns.join(')|(')})`).test(data)) {
    var array = data.split(/\n| /);
    return array[array.indexOf("KiB") - 1];
  }
  return 0;
}

exports.middleware = store => next => (action) => {
  // console.log("in middleware");
  // console.log(action);
  // console.log(store.getState());

  if (action.type === 'SESSION_ADD_DATA') {

    const { data } = action;
    const uid = store.getState().ui.activeUid;

    const bytes = detectByteCommand(data);
    if (bytes) {
      store.dispatch({
        type: 'UPDATE_BYTE_COUNT',
        uid: uid,
        bytes: bytes,
      });
    }
    if (detectPushCommand(data)) {
      store.dispatch({
        type: 'PUSH_MODE_TOGGLE',
        uid: uid,
      });
    } else if (detectPullCommand(data)) {
      store.dispatch({
        type: 'PULL_MODE_TOGGLE',
        uid: uid,
      });
    }
    next(action);
  } else {
    next(action);
  }
};

exports.reduceUI = (state, action) => {
  // console.log("action");
  // console.log(state);
  // console.log(action.uid);

  let gitFalcon9 = ({
    'uid': action.uid,
    'rocketState': 'None',
    'heavy': false,
  });

  if (action.type === 'PUSH_MODE_TOGGLE') {
    gitFalcon9.rocketState = 'LAUNCH';
    return state.set('gitFalcon9', gitFalcon9);
  } else if (action.type === 'PULL_MODE_TOGGLE') {
    gitFalcon9.rocketState = 'LAND';
    return state.set('gitFalcon9', gitFalcon9);
  } else if (action.type === 'UPDATE_BYTE_COUNT') {
    var numBytes = Number.parseFloat(action.bytes, 10);
    // if more than 22.8 kBs we need the falcon heavy
    if (numBytes && numBytes > 22.8) {
      gitFalcon9.heavy = true;
      return state.set('gitFalcon9', gitFalcon9);
    }
    return state.set('gitFalcon9', gitFalcon9);
  }

  return state;
};

const passProps = (uid, parentProps, props) => Object.assign(props, {
  gitFalcon9: parentProps.gitFalcon9,
});

exports.mapTermsState = (state, map) => Object.assign(map, {
  gitFalcon9: state.ui.gitFalcon9,
});

exports.getTermGroupProps = passProps;
exports.getTermProps = passProps;

export const div_style= styled.div`
    width: '100%';
    height: '100%';
    position: 'relative'
`;

exports.decorateTerm = (Term, { React }) => {
  // Define and return our higher order component.
  class HigherOrderComponentTerminal extends React.Component {
    constructor(props, context) {
      super(props, context);

      this.state = {
        animationType: "NONE",
        heavy: false,
        display: false,
        uid: props.uid
      };
    }

    onTerminal(term) {
      if (this.props.onTerminal) this.props.onTerminal(term);
      this._div = term.div_;
      this._window = term.document_.defaultView;
    }

    componentWillReceiveProps(nextProps) {

      const { uid } = this.state;
      const { gitFalcon9 } = nextProps;

      if (gitFalcon9) {

        // console.log(rocketUID);
        // console.log(nextProps.rocketUID);
        // console.log(uid);

        if (gitFalcon9.uid === uid) {
          this.setState({
            animationType: gitFalcon9.rocketState,
            display: true,
          });

          if (gitFalcon9.heavy) {
            this.setState({
              heavy: true
            });
          }
        }
      }
      return nextProps;
    }

    onAnimationEnd(event) {
      if (event.elapsedTime == 3) {
        this.setState({
          animationType: "LAUNCH",
          heavy: false,
          display: false,
        });
      }
      setTimeout(1500);
    }

    render() {
        if (this.state.heavy) {
          return (<div style={{div_style}}>
            {React.createElement(Term, Object.assign({}, this.props, {
              onTerminal: this._onTerminal,
            }))}
            <Exhaust display={this.state.display} animationType={this.state.animationType}
                     heavy={this.state.heavy}/>
            <FalconHeavy display={this.state.display} animationType={this.state.animationType}
                         onAnimationEnd={this.onAnimationEnd.bind(this)}/>
            <Platform display={this.state.display} animationType={this.state.animationType}/>
          </div>
          );
        } else {
          return (
              <div style={{div_style}}>
                {React.createElement(Term, Object.assign({}, this.props, {
                  onTerminal: this._onTerminal,
                }))}
                <Exhaust display={this.state.display} animationType={this.state.animationType}
                         heavy={this.state.heavy}/>
                <FalconRocket display={this.state.display} animationType={this.state.animationType}
                              heavy={this.state.heavy} onAnimationEnd={this.onAnimationEnd.bind(this)}/>
                <Platform display={this.state.display} animationType={this.state.animationType}/>
              </div>
          );
        }
    }
  }

  HigherOrderComponentTerminal.propTypes = {
    onTerminal: PropTypes.func.isRequired,
    uid: PropTypes.string.isRequired,
    gitFalcon9: PropTypes.object.isRequired,
  };

  return HigherOrderComponentTerminal;
};
