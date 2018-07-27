import styled, {keyframes} from 'styled-components'
//import React from 'react'

export const openLeftLeg = keyframes`
  from {
    transform: rotate(90deg) skewX(35deg); }
  to {
    transform: rotate(-35deg) skewX(-35deg); } 
`
export const openMiddleLeg = keyframes`
  from {
    transform: rotateX(0deg); }
  to {
    transform: rotateX(-135deg); } 
`

export const openRightLeg = keyframes`
  from {
    transform: rotate(-90deg) skewX(-35deg); }
  to {
    transform: rotate(35deg) skewX(35deg); }
`

export const openLeftFin = keyframes`
  from {
    transform: rotate(0deg); }
  to {
    transform: rotate(90deg); }
`

export const openRightFin = keyframes`
  from {
    transform: rotate(0deg); }
  to {
    transform: rotate(-90deg); }
`
export const wiggle = keyframes`
  0% {
    left: calc(90% - 50px);
    top: calc(50% - 50px); }
  50% {
    left: calc(90% - 45px);
    top: calc(50% - 48px); }
  100% {
    left: calc(90% - 50px);
    top: calc(50% - 50px); } 
`

export const land = keyframes`
  from {
    top: -260px; 
  }
  to {
    top: calc(100% - 180px);
    display: none; 
  }
`

export const launch = keyframes`
from {
  top: calc(100% - 180px);
  display: none; }
to {
  top: calc(100% - 180px);
  display: none; 
  top: -260px; 
}
`
export const engineTurnedOn = keyframes`
  0% {
    transform-origin: top center;
    transform: scale(1); }
  50% {
    transform-origin: top center;
    transform: scale(0.8); }
  100% {
    transform-origin: top center;
    transform: scale(1); } 
`

export const engineTurnOff = keyframes`
  0% {
    transform-origin: top center;
    transform: scale(1); }
  100% {
    transform-origin: top center;
    transform: scale(0); }
`

export const Rocket = styled.div`
  display: ${props => (props.display ? 'block' : 'none')};
  position: absolute;
  left: calc(90% - 50px);
  top: calc(50% - 50px);
  height: 320px;
  animation-name: ${props => ((props.animationType == "LAUNCH") ? 'none'/*launch*/ : 'none'/*land*/)};
  animation-duration:3000ms;
  animation-delay: 0ms, 3000ms;
  animation-iteration-count: 8, 1,1;
  animation-timing-function: ease-out;
  animation-fill-mode: none,none,forwards;
`

export const RocketSpan = styled.span`
  display: block;
  top: 100px;
  width: 22px;
  height: 155px;
  background-color: #d1d2d6;
  position: absolute;
  // border-left: 3px solid #797d88;
  //border-right: 3px solid #a7a9b1;
  //border-bottom: 5px solid #3a3a3b;
  box-sizing: initial;

  // :after{ 
  //   content: '';
  //   position: absolute;
  //   display: block;
  //   left: 2px;
  //   width: 6px;
  //   height: 100%;
  //   background-color: #d6d8e1;
  // }
`

export const USFlag = styled.img`
  left: 7px;
  top: 115px;
  position: absolute;
  width: 8px;
  height: 5px;
`

export const SpaceXLogo = styled.img`
  top: 130px;
  position: absolute;
  width: 22px;
  height: 85px;
`
export const RocketFairing = styled.i`
  display: ${props => ((props.animationType == "LAUNCH") ? 'block' : 'none')};
  position: absolute;
  top: 0;
  left: -4px;
  height: 60px;
  width: 30px;
  border-top-left-radius: 200%;
  border-top-right-radius: 200%;
  border-bottom-left-radius: 100%;
  border-bottom-Right-radius: 100%;
  background-color: #d1d2d6;
  box-sizing: border-box;
  border-left: 3px solid #797d88;

  :after{
    content: '';
    position: absolute;
    display: ${props => ((props.animationType == "LAUNCH") ? 'block' : 'none')};
    left: 13px;
    width: 10px;
    top: 3px;
    height: 27px;
    border-top-right-radius: 100%;
    background: linear-gradient(180deg, #a7a9b1 20%, #d6d8e1); 
  }
`
export const RocketSecondStage = styled.i`
  display: ${props => ((props.animationType == "LAUNCH") ? 'block' : 'none')};
  left: 1px;
  top: 60px;
  width: 20px;
  height: 40px;
  background-color: #d1d2d6;
  position: absolute;
  // border-left: 3px solid #797d88;
  //border-right: 3px solid #a7a9b1;
  //border-bottom: 5px solid #3a3a3b;
  box-sizing: initial;

  // :after{ 
  //   content: '';
  //   position: absolute;
  //   display: ${props => ((props.animationType == "LAUNCH") ? 'block' : 'none')};
  //   left: 2px;
  //   width: 6px;
  //   height: 100%;
  //   background-color: #d6d8e1;
  // }
`
export const Fin = styled.i`
  position: absolute;
  display: block;
  width: 3px;
  height: 15px;
  top: 101px;
  background-color: #3a3a3b;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  transform: rotate(0deg);
`

export const FinLeft = Fin.extend`
  border-top-left-radius: 50%;
  left: -2px;
  transform-origin: right top;
  animation-name: ${props => ((props.animationType == "LAUNCH") ? 'none' : openLeftFin)};
`

export const FinRight = Fin.extend`
  border-top-right-radius: 50%;
  right: -23px;
  transform-origin: left top;
  animation-name: ${props => ((props.animationType == "LAUNCH") ? 'none' : openRightFin)};
`

export const RocketEngineBase = styled.i`
  width: 23px;
  height: 5px;
  bottom: 60px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  position: absolute;
  background-color: #3a3a3b; 
`

export const RocketEngine = styled.i`
  width: 8px;
  height: 8px;
  bottom: 52px;
  border-top-left-radius: 100%;
  border-top-right-radius: 100%;
  position: absolute;
  background-color: #787879;
  border-color: #0c0c0c;
  border-width: 1px;
  border-top-width: 0px;
  border-style: solid;
  
`

export const RocketEngineLeft = RocketEngine.extend`
  border-top-left-radius: 100%;
  left: 14px;
`

export const RocketEngineMiddle = RocketEngine.extend`
  border-top-right-radius: 100%;
  left: 8px;
`

export const RocketEngineRight= RocketEngine.extend`
  border-top-right-radius: 100%;
  left: 2px;
`

export const Leg = styled.i`
  position: absolute;
  display: block; 
  bottom: 65px;
  width: 45px;
  height: 4px;
  background-color: #3a3a3b;
`

export const LegLeft = Leg.extend`
  right: 1px;
  transform-origin: right center;
  animation-name: ${props => ((props.animationType == "LAUNCH") ? 'none' : openLeftLeg)};
  animation-duration: 2s;
  animation-delay: 500ms;
  animation-fill-mode: forwards;
  transform: rotate(90deg) skewX(35deg);
`
export const LegMiddle = styled.i`
  animation-name: ${props => ((props.animationType == "LAUNCH") ? 'none' : openMiddleLeg)};
  animation-duration: 2s;
  animation-delay: 500ms;
  animation-fill-mode: forwards;
  width: 18px; 
  height: 45px;
  bottom: 65px;
  border-radius: 200% 200% 0 0;
  border-top-left-radius: 50% 90%;
  border-top-right-radius: 50% 90%;
  border: 8px solid #3a3a3b;
  border-bottom: none;
  position: absolute;
  left: 2px;
  transform-origin: left bottom;

`

export const LegRight = Leg.extend`
  left: 23px;
  transform-origin: left center;
  animation-name: ${props => ((props.animationType == "LAUNCH") ? 'none' : openRightLeg)};
  animation-duration: 2s;
  animation-delay: 500ms;
  animation-fill-mode: forwards;
  transform: rotate(-90deg) skewX(-35deg);
`

export const Blaze = styled.i`
  position: absolute;
  top: 270px;
  left: -6px;
  display: block;
  background-color: #FF3D00;
  border-radius: 50% 50% 70% 70%;
  width: 40px;
  height: 60px;
  animation-name: ${engineTurnedOn}, ${engineTurnedOn};
  animation-duration:  200ms, 1000ms;
  animation-delay: 10ms, 2000ms;
  animation-iteration-count: infinite, 1;
  animation-fill-mode: none, forwards; 
`

export const BlazeInner = styled.i`
  position: absolute;
  display: block;
  left: 5px;
  border-radius: 50% 50% 90% 90%;
`

export const BlazeInnerMedium = BlazeInner.extend`
  width: 30px;
  height: 45px;
  background-color: #FFD600; 
`

export const BlazeInnerExtra = BlazeInner.extend`
  left: 12px;
  width: 15px;
  height: 30px;
  background-color: #FFFF00;
`

//export default Spaceship


