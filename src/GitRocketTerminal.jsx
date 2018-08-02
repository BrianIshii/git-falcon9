import Falcon9Rocket from './Falcon9'
import PropTypes from 'prop-types';

// This function performs regex matching on expected shell output for git push result being input
// at the command line. Currently it supports output from bash, zsh, fish, cmd and powershell.
function detectPushCommand(data) {
  const patterns = ['To(.+)\.git'];
  const antiPatterns = ['error:'];
  return new RegExp(`(${patterns.join(')|(')})`).test(data) && !new RegExp(`(${antiPatterns.join(')|(')})`).test(data);
}

function detectPullCommand(data) {
  const patterns = ['Updating'] // for development
  //const patterns = ['^Updating {0,}([a-z0-9A-Z]+\.{2,3}[a-z0-9A-Z]+)|(\[[a-z0-9A-Z]+\.{2,3}[a-z0-9A-Z]+\])$', '^Unpacking objects']
  const antiPattern = /CONFLICT/
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
  if (action.type === 'SESSION_ADD_DATA') {

    const { data } = action;
    const bytes = detectByteCommand(data);
    if (bytes) {
      store.dispatch({
        type: bytes,
      });
    }
    if (detectPushCommand(data)) {
      store.dispatch({
        type: 'PUSH_MODE_TOGGLE',
      });
    } else if (detectPullCommand(data)) {
      store.dispatch({
        type: 'PULL_MODE_TOGGLE',
      });
    }
    next(action);
  } else {
    next(action);
  }
};

exports.reduceUI = (state, action) => {
  switch (action.type) {
    case 'PUSH_MODE_TOGGLE':
      return state.set("display", true).set('rocketState', 'LAUNCH');
    case 'PULL_MODE_TOGGLE':
      return state.set("display", true).set('rocketState', 'LAND');
    default:
      var numBytes = Number.parseFloat(action.type, 10);
      if (numBytes && numBytes > 63.8) {
        return state.set('bytes', true);
      }
      return state.set('bytes', false).set('rocketState', 'None');
  }
};

const passProps = (uid, parentProps, props) => Object.assign(props, {
  rocketState: parentProps.rocketState,
  bytes: parentProps.bytes,
});

exports.mapTermsState = (state, map) => Object.assign(map, {
  rocketState: state.ui.rocketState,
  bytes: state.ui.bytes,
});

exports.getTermGroupProps = passProps;
exports.getTermProps = passProps;

exports.decorateTerm = (Term, { React }) => {
  // Define and return our higher order component.
  class HigherOrderComponentTerminal extends React.Component {
    constructor(props, context) {
      super(props, context);

      this.state = {
        animationType: "NONE",
        heavy: false,
        display: false,
      };
    }

    onTerminal(term) {
      if (this.props.onTerminal) this.props.onTerminal(term);
      this._div = term.div_;
      this._window = term.document_.defaultView;
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.rocketState === 'LAND') {
        this.setState({
          animationType: 'LAND',
          display: true,
        });
      }
      else if (nextProps.rocketState === 'LAUNCH') {
        this.setState({
          animationType: 'LAUNCH',
          display: true,
        });
      }

      if (nextProps.bytes === true) {
        this.setState({
          heavy: true
        });
      }

      return nextProps;
    }

    onAnimationEnd(event) {
      if (event.elapsedTime == 10) {
        this.setState({
          animationType: "NONE",
          heavy: false,
          display: false,
        });
      }
      setTimeout(1500);
    }

    render() {
      return (
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          {React.createElement(Term, Object.assign({}, this.props, {
            onTerminal: this._onTerminal,
          }))}
          <Falcon9Rocket display={this.state.display} animationType={this.state.animationType} heavy={this.state.heavy} onAnimationEnd={this.onAnimationEnd.bind(this)} />
        </div>
      );
    }
  }

  HigherOrderComponentTerminal.propTypes = {
    onTerminal: PropTypes.func.isRequired,
    rocketState: PropTypes.number.isRequired,
    bytes: PropTypes.bool.isRequired,
    type: PropTypes.number.isRequired,
  };

  return HigherOrderComponentTerminal;
};
