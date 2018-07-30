/* eslint no-underscore-dangle: 0 */
/* eslint react/no-multi-comp: 0 */
import React, { Component } from 'react'
import Spaceship from './styledElements'
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
  //console.log("reduceUI");
  //console.log("action");
  //console.log(action);
  //console.log("state");
  //console.log(state);
  switch (action.type) {
    case 'PUSH_MODE_TOGGLE':
      return state.set('rocketState', 'LAUNCH');
    case 'PULL_MODE_TOGGLE':
      return state.set('rocketState', 'LAND');
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
  animationType: parentProps.animationType,
});

exports.mapTermsState = (state, map) => Object.assign(map, {
  rocketState: state.ui.rocketState,
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

      //this._onTerminal = this._onTerminal.bind(this);
      //this._div = null;
      //this._observer = null;

      this.state = {
        animationType: "NONE",
        display: false,
        bytes: 0,
      };
    }

    onTerminal(term) {
      if (this.props.onTerminal) this.props.onTerminal(term);
      this._div = term.div_;
      this._window = term.document_.defaultView;
    }

    componentWillReceiveProps(nextProps) {
      console.log("ComponentWillReceiveProps");
      console.log("nextProps");
      console.log(nextProps.rocketState);
      console.log("this.props");
      console.log(this.props.rocketState);
      if (nextProps.rocketState === 'LAND')
      {
        //console.log("component LAND");
        this.setState({
          animationType: 'LAND',
          display: true,
          bytes: this.props.bytes,
        });
      }
      else if (nextProps.rocketState === 'LAUNCH')
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

    onAnimationEnd(event) {
      console.log(event);
      if (event.elapsedTime == 10) 
      { 
        console.log(this.state); 

        this.setState({ 
          animationType: "NONE", 
          display: false, 
          bytes: 0, 
        }); 
      } 
      setTimeout(1500); 
    }

    render() {
      console.log("renderHOC");
      console.log(this.props);
      console.log(this.props.display);
      return (
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          {React.createElement(Term, Object.assign({}, this.props, {
            onTerminal: this._onTerminal,
          }))}
          <Spaceship display={this.state.display} animationType={this.state.animationType} onAnimationEnd={this.onAnimationEnd.bind(this)}/>
        </div>
      );
    }
  }

  HigherOrderComponentTerminal.propTypes = {
    onTerminal: PropTypes.func.isRequired,
    rocketState: PropTypes.number.isRequired,
    animationType: PropTypes.string.isRequired,
    type: PropTypes.number.isRequired,
    bytes: PropTypes.number.isRequired,
  };

  return HigherOrderComponentTerminal;
};
