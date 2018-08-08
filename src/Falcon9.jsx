import styled, { keyframes } from 'styled-components'
import { LegLeft, LegMiddle, LegRight } from './Legs'
import { FinLeft, FinRight } from './Fins'
import { Octaweb, MerlinEngineLeft, MerlinEngineLeftMiddle, MerlinEngineRightMiddle, MerlinEngineRight } from './Engines'
import { Thrust, Wastes, Platform } from './Thrust'
import React from 'react'

// Animation Duration: 3 seconds

export const wiggle = keyframes`
  0% {
    left: calc(90% - 47px); }
  50% {
    left: calc(90% - 45px); }
  100% {
    left: calc(90% - 47px); }
`

export const land = keyframes`
  0% {
    top: -260px; }
  50% {
      top: calc(100% - 300px); }
  67% {
    top: calc(100% - 285px); }
  100% {
    top: calc(100% - 285px); }
`

export const launch = keyframes`
  0% {
    top: calc(100% - 280px); }
  33% {
    top: calc(100% - 280px); }
  100% {
    top: calc(0% - 300px); }
`

export const Rocket = styled.div`
  display: ${props => (props.display ? 'block' : 'none')};
  position: absolute;
  height: 320px;
  left: calc(90% - 50px);
  ${props => (props.animationType == "None" ? ';' :
    props => ((props.animationType == "LAUNCH")
      ?
      // on LAUNCH
      'top: calc(100% - 280px);' +
      'animation-name: ' + wiggle + "," + launch + ";" +
      'animation-duration: 200ms, 3s;' +
      'animation-delay: 0.5s, 0s;' +
      'animation-iteration-count: 13, 1;' +
      'animation-fill-mode: forwards;' +
      'animation-timing-function: ease-in;'
      :
      // on LAND
      'top: calc(0%-300x);' +
      'bottom: calc(100%);' +
      'animation-name: ' + wiggle + ',' + land + ";" +
      'animation-duration: 200ms, 3s;' +
      'animation-delay: 1s, 0s;' +
      'animation-iteration-count: 5, 1;' +
      'animation-fill-mode: forwards;' +
      'animation-timing-function: ease-out;'
    ))}
`

export const Falcon9 = styled.div`
  ${props => (props.position == '0px' ? 'display: block;' :
    props => ((props.heavy) ?
      'display: block;'
      :
      // on LAND
      'display: none;'
    ))}
  position: absolute;
  height: 320px;
  top: calc(0%-300px);
  ${props => (props.animationType == "None" ? ';' :
    props => ((props.animationType == "LAUNCH") ?
      // on LAUNCH see Rocket
      'left: ' + props.position + ';'
      :
      // on LAND
      'left: ' + props.position + ';'
    ))}
`

export const FirstStageDiv = styled.div`

`
export const FirstStageSpan = styled.span`
  display: block;
  position: absolute;
  top: 100px;
  width: 22px;
  height: 155px;
  background-color: #d1d2d6;
  border-top: 1px solid #a7a9b1;
`

export const USFlag = styled.img`
  position: absolute;
  top: 115px;
  height: 5px;ß
  width: 8px;
  left: 7px;
`

export const SpaceXLogo = styled.img`
  position: absolute;
  top: 130px;
  height: 85px;
  width: 22px;
`
export const RocketFairing = styled.i`
  display: ${props => ((props.animationType == "LAUNCH") ? 'block' : 'none')};
  //display: ${props => (props.heavy ? 'block' : 'none')};
  position: absolute;
  top: -20px;
  height: 60px;
  width: 30px;
  left: -4px;
  border-top-left-radius: 200%;
  border-top-right-radius: 200%;
  border-bottom-left-radius: 70%;
  border-bottom-right-radius: 70%;
  background-color: #d1d2d6;
  box-sizing: border-box;

  :after{
    content: '';
    position: absolute;
    display: ${props => ((props.animationType == "LAUNCH") ? 'block' : 'none')};
    left: 16px;
    width: 10px;
    top: 3px;
    height: 27px;
    border-top-right-radius: 100%;
    background: linear-gradient(180deg, #a7a9b1 20%, #d6d8e1); 
  }
`

export const RocketSecondStage = styled.i`
  display: ${props => ((props.animationType == "LAUNCH") ? 'block' : 'none')};
  position: absolute;
  top: 40px;
  height: 60px;
  width: 20px;
  left: 1px;
  background-color: #d1d2d6;
  border-bottom: 1px solid #a7a9b1;
  border-top: 1px solid #a7a9b1;
  box-sizing: initial;
`
export const RocketCap = styled.i`
  display: block;
  position: absolute;
  top: 80px;
  height: 65px;
  width: 22px;
  border-top-left-radius: 2000%;
  border-top-right-radius: 2000%;
  background-color: #d1d2d6;
`

const FirstStage = ({ animationType }) => (
  <FirstStageDiv>
    <FirstStageSpan />
    <FinLeft animationType={animationType} />
    <FinRight animationType={animationType} />
    <Thrust animationType={animationType} />
    <Octaweb />
    <MerlinEngineLeft />
    <MerlinEngineRight />
    <MerlinEngineLeftMiddle />
    <MerlinEngineRightMiddle />
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
  </FirstStageDiv>
);

const Falcon9SideRocket = ({ position, heavy, animationType }) => (
  <Falcon9 position={position} heavy={heavy} animationType={animationType}>
    <RocketCap />
    <FirstStage animationType={animationType} />
  </Falcon9>
);

const Falcon9Rocket = ({ position, heavy, animationType }) => (
  <Falcon9 position={position} heavy={heavy} animationType={animationType} >
    <RocketSecondStage animationType={animationType} />
    <RocketFairing animationType={animationType} heavy={heavy} />
    <FirstStage animationType={animationType} />
    <USFlag src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/280px-Flag_of_the_United_States_%28Pantone%29.svg.png" />
    <SpaceXLogo src="http://i67.tinypic.com/24q6a0k.png" />
  </Falcon9>
);

const FalconRocket = ({ display, animationType, heavy, onAnimationEnd }) => (
  <Rocket id="rocket" display={display} animationType={animationType} onAnimationEnd={onAnimationEnd.bind(this)}>
    <Falcon9SideRocket position='24px' heavy={heavy} animationType={animationType} />
    <Falcon9SideRocket position='-24px' heavy={heavy} animationType={animationType} />
    <Falcon9Rocket position='0px' heavy={heavy} animationType={animationType} />
  </Rocket>
);

export default FalconRocket