/* eslint no-underscore-dangle: 0 */
/* eslint react/no-multi-comp: 0 */

//import PropTypes from '../../../../Library/Caches/typescript/2.9/node_modules/@types/prop-types';
import PropTypes from 'prop-types';
import { Rocket, RocketSpan, RocketFairing, RocketSecondStage, SpaceXLogo, USFlag, FinLeft, FinRight, RocketEngineBase,
          RocketEngineLeft, RocketEngineMiddle, RocketEngineRight,
          LegLeft, LegMiddle, LegRight, Blaze, BlazeInnerExtra, BlazeInnerMedium, Flame, Wastes } from './styledElements';

// This function performs regex matching on expected shell output for git push result being input
// at the command line. Currently it supports output from bash, zsh, fish, cmd and powershell.
function detectPushCommand(data) {
  //console.log("check push");
  const patterns = ['To(.+)\.git'];
  const antiPatterns = ['error:'];
  return new RegExp(`(${patterns.join(')|(')})`).test(data) && !new RegExp(`(${antiPatterns.join(')|(')})`).test(data);
}

function detectPullCommand(data) {
  //console.log("check pull");
  const patterns = ['Updating'] // for development
  //const patterns = ['^Updating {0,}([a-z0-9A-Z]+\.{2,3}[a-z0-9A-Z]+)|(\[[a-z0-9A-Z]+\.{2,3}[a-z0-9A-Z]+\])$', '^Unpacking objects']
  const antiPattern = /CONFLICT/
  
  return new RegExp(`(${patterns.join(')|(')})`).test(data) && !antiPattern.test(data)
}

function detectByteCommand(data) {
  const patterns = ['Writing(.+),(.+)bytes'];
  if (new RegExp(`(${patterns.join(')|(')})`).test(data))
  {
    var array = data.split(" ");
    return array[array.length - 2];
  }
  return 0;
}

exports.middleware = store => next => (action) => {
  //console.log("middleware");
  //console.log(action);
  if (action.type === 'SESSION_ADD_DATA') {
    const { data } = action;

    const bytes = detectByteCommand(data);
    if (bytes)
    {
      store.dispatch({
        type: bytes,
      });
    }
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
  console.log("reduceUI");
  //console.log("action");
  //console.log(action);
  console.log("state");
  console.log(state);
  switch (action.type) {
    case 'PUSH_MODE_TOGGLE':
      return state.set('rocketState', 'launch');
    case 'PULL_MODE_TOGGLE':
      return state.set('rocketState', 'land');
    default:
    //console.log('action.type');
    //console.log(action.type);
      if (Number.parseInt(action.type, 10))
      {
        console.log("is Int");
        return state.set('bytes', action.type);
      }
      return state.set('rocketState', 'None');
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
  class GitRocket extends React.Component {
    constructor() {
      super();

      this.state = {
        animationType: "NONE",
        display: false,
        bytes: 0,
      };
    }

    componentDidMount() {
      //console.log("componentDidMount");
      const rocket = document.getElementById('rocket');
      rocket.addEventListener('animationend', (animationType) => {

        if (animationType.elapsedTime == 10)
        {
          console.log(this.state);

          this.setState({
            animationType: "NONE",
            display: false,
            bytes: 0,
          });
        }
        setTimeout(1500);
        // console.log("Animation end");
        // console.log(this.state);
        // console.log(animationType); 
        // console.log(animation); 
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
        //console.log("component LAND");
        this.setState({
          animationType: 'LAND',
          display: true,
          bytes: this.props.bytes,
        });
      }
      else if (nextProps.rocketState === 'launch')
      {
        //console.log("component LAUNCH")
        this.setState({
          animationType: 'LAUNCH',
          display: true,
          bytes: this.props.bytes,
        });
      }
      return nextProps;
    }

    falcon9(animationType) {
      return (
        <Rocket id="rocket" display={this.state.display} animationType={animationType}>
          <RocketSpan/>
          <RocketFairing animationType={animationType}/>
          <RocketSecondStage animationType={animationType}/>
          <USFlag src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/280px-Flag_of_the_United_States_%28Pantone%29.svg.png"/>
          <SpaceXLogo src="http://i67.tinypic.com/24q6a0k.png"/>
          <FinLeft animationType={animationType} />
          <FinRight animationType={animationType} />
          <Flame animationType={animationType} />
          <RocketEngineBase/>
          <RocketEngineLeft/>
          <RocketEngineRight/>
          <RocketEngineMiddle/>
          <LegLeft animationType={animationType} />
          <LegRight animationType={animationType} />
          <LegMiddle animationType={animationType} />
          <Wastes animationType={animationType} >
              <i />
              <i />
              <i />
              <i />
              <i />
            </Wastes>
        </Rocket> 
      );
    }

    falconHeavy(animationType) {
      return (        
      <Rocket id="rocket" display={this.state.display} animationType={animationType}>
      <RocketSpan/>
      <RocketFairing animationType={animationType}/>
      <RocketSecondStage animationType={animationType}/>
      <USFlag src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/280px-Flag_of_the_United_States_%28Pantone%29.svg.png"/>
      <SpaceXLogo src="http://i67.tinypic.com/24q6a0k.png"/>
      <FinLeft animationType={animationType} />
      <FinRight animationType={animationType} />
      <Flame animationType={animationType} />
      <RocketEngineBase/>
      <RocketEngineLeft/>
      <RocketEngineRight/>
      <RocketEngineMiddle/>
      <Wastes animationType={animationType} >
          <i />
          <i />
          <i />
          <i />
          <i />
        </Wastes>
    </Rocket> );
    }

    render() {
      console.log("rocket render");
      console.log(this.state);
      if (this.state.bytes > 200){
        return this.falconHeavy(this.state.animationType);
      }
      return this.falcon9(this.state.animationType);
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
      if (this.props.onTerminal) this.props.onTerminal(term);
      this._div = term.div_;
      this._window = term.document_.defaultView;
    }

    render() {
      console.log("renderHOC");
      console.log(this.props);
      return (
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          {React.createElement(Term, Object.assign({}, this.props, {
            onTerminal: this._onTerminal,
          }))}
          <GitRocket rocketState={this.props.rocketState} bytes={this.props.bytes}/>
        </div>
      );
    }
  }

  GitRocket.propTypes = {
    rocketState: PropTypes.string.isRequired,
    animationType: PropTypes.string.isRequired,
    bytes: PropTypes.number.isRequired,
  };

  HOCTerm.propTypes = {
    onTerminal: PropTypes.func.isRequired,
    rocketState: PropTypes.number.isRequired,
    type: PropTypes.number.isRequired,
    bytes: PropTypes.number.isRequired,
  };

  return HOCTerm;
};
