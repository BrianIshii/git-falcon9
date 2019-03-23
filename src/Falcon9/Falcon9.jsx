import styled, { keyframes } from 'styled-components'
import FirstStage from './FirstStage/FirstStage'
import React from 'react'
import PropTypes from 'prop-types'
import { RocketSecondStage, RocketCap, RocketFairing } from './SecondStage/SecondStage'

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

export const USFlag = styled.img`
  position: absolute;
  top: 115px;
  height: 5px;
  width: 8px;
  left: 7px;
`

export const SpaceXLogo = styled.img`
  position: absolute;
  top: 130px;
  height: 85px;
  width: 22px;
`

const Falcon9SideRocket = ({position, heavy, animationType}) => {
    return (
        <Falcon9 position={position} heavy={heavy} animationType={animationType}>
            <RocketCap/>
            <FirstStage animationType={animationType}/>
        </Falcon9>
    );
};

Falcon9SideRocket.propTypes = {
    display: PropTypes.bool.isRequired,
    heavy: PropTypes.bool.isRequired,
    animationType: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired
};

const Falcon9Rocket = ({heavy, animationType, position}) => {
    return (
        <Falcon9 position={position} heavy={heavy} animationType={animationType}>
            <RocketSecondStage animationType={animationType}/>
            <RocketFairing animationType={animationType} heavy={heavy}/>
            <FirstStage animationType={animationType}/>
            <USFlag
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/280px-Flag_of_the_United_States_%28Pantone%29.svg.png"/>
            <SpaceXLogo src="http://i67.tinypic.com/24q6a0k.png"/>
        </Falcon9>
    );
};

Falcon9Rocket.propTypes = {
    heavy: PropTypes.bool.isRequired,
    animationType: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired
};

const FalconRocket = ({display, animationType, heavy, onAnimationEnd}) => {
    return (
        <Rocket id="rocket" display={display} animationType={animationType}
                onAnimationEnd={onAnimationEnd.bind(this)}>
            <Falcon9SideRocket position='24px' heavy={heavy} animationType={animationType}/>
            <Falcon9SideRocket position='-24px' heavy={heavy} animationType={animationType}/>
            <Falcon9Rocket position='0px' heavy={heavy} animationType={animationType}/>
        </Rocket>
    );
};

FalconRocket.propTypes = {
    display: PropTypes.bool.isRequired,
    heavy: PropTypes.bool.isRequired,
    animationType: PropTypes.string.isRequired,
    onAnimationEnd: PropTypes.func.isRequired
};

export default FalconRocket;