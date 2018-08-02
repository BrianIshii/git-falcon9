/* eslint no-underscore-dangle: 0 */
/* eslint react/no-multi-comp: 0 */
import React, { Component } from 'react'
import Spaceship from './styledElements'
//import PropTypes from '../../../../Library/Caches/typescript/2.9/node_modules/@types/prop-types';
import PropTypes from 'prop-types';
import { Falcon9, RocketFirstStage, RocketFairing, RocketSecondStage, SpaceXLogo, USFlag, FinLeft, FinRight, RocketEngineBase,
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
  const patterns = ['Writing(.+),(.+)KiB'];
  console.log("Check Bytes");
  console.log(data);
  if (new RegExp(`(${patterns.join(')|(')})`).test(data))
  {
    var array = data.split(/\n| /);
    return array[array.indexOf("KiB") - 1];
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
  //console.log("reduceUI");
  //console.log("action");
  //console.log(action);
  //console.log("state");
  //console.log(state);
  switch (action.type) {
    case 'PUSH_MODE_TOGGLE':
      console.log("REDUCEUI push");
      return state.set("display", true).set('rocketState', 'LAUNCH');
    case 'PULL_MODE_TOGGLE':
      console.log("REDUCEUI pull");
      return state.set("display", true).set('rocketState', 'LAND');
    default:
    console.log('REDUCEUI default');
    //console.log(action.type);
      var numBytes = Number.parseFloat(action.type, 10);
      if (numBytes && numBytes > 63.8)
      {
        console.log("is Float");
        return state.set('bytes', true);
      }
      return state.set('bytes', false).set('rocketState', 'None');
  }
};

const passProps = (uid, parentProps, props) => Object.assign(props, {
  rocketState: parentProps.rocketState,
  display: parentProps.display,
  bytes: parentProps.bytes,
  animationType: parentProps.animationType,
});

exports.mapTermsState = (state, map) => Object.assign(map, {
  rocketState: state.ui.rocketState,
  display: state.ui.display,
  bytes: state.ui.bytes,
  animationType: state.ui.animationType,
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
      console.log("nextProps");
      console.log(nextProps);
      console.log("this.props");
      console.log(this.props);
      if (nextProps.rocketState === 'LAND')
      {
        console.log("component LAND");
        this.setState({
          animationType: 'LAND',
          display: true,
        });
      }
      else if (nextProps.rocketState === 'LAUNCH')
      {
        //this.props.bytes = nextProps.bytes;
        this.setState({
          animationType: 'LAUNCH',
          display: true,
        });
      }

      if (nextProps.bytes === true)
      {
        console.log("heavy recorded")
        this.setState({
          heavy: true
        });
      }
      return nextProps;
    }

    onAnimationEnd(event) {
      //console.log(event);
      if (event.elapsedTime == 10) 
      { 
        console.log("animationend");
        console.log(this.state); 
        this.props.display = false;
        this.props.bytes = false;
        console.log(this.props); 
        this.setState({ 
          animationType: "NONE",
          heavy: false,
          display: false, 
        }); 
      } 
      setTimeout(1500); 
    }

    render() {
      console.log("renderHOC");
      console.log("display: " + this.state.display);
      console.log("animationType: " + this.state.animationType);
      console.log("heavy: " + this.state.heavy);
      return (
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          {React.createElement(Term, Object.assign({}, this.props, {
            onTerminal: this._onTerminal,
          }))}
          <Spaceship display={this.state.display} animationType={this.state.animationType} heavy={this.state.heavy} onAnimationEnd={this.onAnimationEnd.bind(this)}/>
        </div>
      );
    }
  }

  HigherOrderComponentTerminal.propTypes = {
    onTerminal: PropTypes.func.isRequired,
    rocketState: PropTypes.number.isRequired,
    display: PropTypes.bool.isRequired,
    animationType: PropTypes.string.isRequired,
    type: PropTypes.number.isRequired,
    bytes: PropTypes.bool.isRequired,
  };

  return HigherOrderComponentTerminal;
};
