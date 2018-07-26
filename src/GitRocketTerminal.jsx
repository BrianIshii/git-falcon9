/* eslint no-underscore-dangle: 0 */
/* eslint react/no-multi-comp: 0 */

//import PropTypes from '../../../../Library/Caches/typescript/2.9/node_modules/@types/prop-types';
import PropTypes from 'prop-types';
import { Rocket, RocketSpan, RocketBow, FinLeft, FinRight, RocketEngine,
         LegLeft, LegRight, Blaze, BlazeInnerExtra, BlazeInnerMedium } from './styledElements';

// This function performs regex matching on expected shell output for git push result being input
// at the command line. Currently it supports output from bash, zsh, fish, cmd and powershell.
function detectPushCommand(data) {
  console.log("check push");
  const patterns = ['To(.+)\.git'];
  const antiPatterns = ['error:'];
  return new RegExp(`(${patterns.join(')|(')})`).test(data) && !new RegExp(`(${antiPatterns.join(')|(')})`).test(data);
}

function detectPullCommand(data) {
  console.log("check pull");
  //const patterns = ['Updating'] //for development
  const patterns = ['^Updating {0,}([a-z0-9A-Z]+\.{2,3}[a-z0-9A-Z]+)|(\[[a-z0-9A-Z]+\.{2,3}[a-z0-9A-Z]+\])$', '^Unpacking objects']
  const antiPattern = /CONFLICT/
  
  return new RegExp(`(${patterns.join(')|(')})`).test(data) && !antiPattern.test(data)
}

exports.middleware = store => next => (action) => {
  //console.log("middleware");
  //console.log(action);
  if (action.type === 'SESSION_ADD_DATA') {
    const { data } = action;

    if (detectPushCommand(data)) {
      store.dispatch({
        type: 'PUSH_MODE_TOGGLE',
      });
    } else if (detectPullCommand(data)){
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
  //console.log("reduceUI");
  //console.log("action");
  //console.log(action);
  //console.log("state");
  //console.log(state);
  switch (action.type) {
    case 'PUSH_MODE_TOGGLE':
      return state.set('rocketState', 'launch');
    case 'PULL_MODE_TOGGLE':
      return state.set('rocketState', 'land');
    default:
      return state.set('rocketState', 'NOPE');
  }
};

const passProps = (uid, parentProps, props) => Object.assign(props, {
  rocketState: parentProps.rocketState,
});

exports.mapTermsState = (state, map) => Object.assign(map, {
  rocketState: state.ui.rocketState,
});

exports.getTermGroupProps = passProps;
exports.getTermProps = passProps;

exports.decorateTerm = (Term, { React }) => {
  class GitRocket extends React.Component {
    constructor() {
      super();

      this.state = {
        animationType: "NONE",
        display: false,
      };
    }

    componentDidMount() {
      console.log("componentDidMount");
      const rocket = document.getElementById('rocket');
      rocket.addEventListener('animationend', () => {
        console.log("Animation end");
        console.log(this.state);
        this.setState({
          animationType: "NONE",
          display: false,
        });
        setTimeout(1500); 
      });
    }


    componentWillReceiveProps(nextProps) {
      console.log("ComponentWillReceiveProps");
      console.log("nextProps");
      console.log(nextProps);
      console.log("this.props");
      console.log(this.props);
      if (nextProps.rocketState === 'land')
      {
        console.log("component LAND");
        this.setState({
          animationType: 'LAND',
          display: true,
        });
      }
      else if (nextProps.rocketState === 'launch')
      {
        console.log("component LAUNCH")
        this.setState({
          animationType: 'LAUNCH',
          display: true,
        });
      }
      return nextProps;
    }

    render() {
      console.log("rocket render");
      console.log(this.state);
      return (
        <Rocket id="rocket" display={this.state.display} animationType={this.state.animationType}>
          <RocketSpan/>
           <RocketBow/>
          <FinLeft/>
          <FinRight/>
          <RocketEngine/>
          <LegLeft animationType={this.state.animationType} />
          <LegRight animationType={this.state.animationType} />
          <Blaze>
            <BlazeInnerMedium/>
            <BlazeInnerExtra/>
          </Blaze>
        </Rocket> 
      );
    }
  }

  // Define and return our higher order component.
  class HOCTerm extends React.Component {
    constructor(props, context) {
      super(props, context);

      this._onTerminal = this._onTerminal.bind(this);
      this._div = null;
      this._observer = null;
    }

    _onTerminal(term) {
      console.log("onTerminal");
      if (this.props.onTerminal) this.props.onTerminal(term);
      this._div = term.div_;
      this._window = term.document_.defaultView;
    }

    render() {
      console.log("renderHOC");
      return (
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          {React.createElement(Term, Object.assign({}, this.props, {
            onTerminal: this._onTerminal,
          }))}
          <GitRocket rocketState={this.props.rocketState} />
        </div>
      );
    }
  }

  GitRocket.propTypes = {
    rocketState: PropTypes.number.isRequired,
    animationType: PropTypes.number.isRequired,
  };

  HOCTerm.propTypes = {
    onTerminal: PropTypes.func.isRequired,
    rocketState: PropTypes.number.isRequired,
    type: PropTypes.number.isRequired,
  };

  return HOCTerm;
};
