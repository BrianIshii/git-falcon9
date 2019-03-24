import styled from 'styled-components'
import FirstStage from './FirstStage/FirstStage'
import React from 'react'
import PropTypes from 'prop-types'
import { RocketSecondStage, RocketCap, RocketFairing } from './SecondStage/RocketSecondStages'
import { Rocket } from './Rocket'
// Animation Duration: 3 seconds

export const Falcon9 = styled.div`
  display: block;
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

export const Falcon9SideRocket = ({position, animationType}) => {
    return (
        <Falcon9 position={position} animationType={animationType}>
            <RocketCap/>
            <FirstStage animationType={animationType}/>
        </Falcon9>
    );
};

Falcon9SideRocket.propTypes = {
    heavy: PropTypes.bool.isRequired,
    animationType: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired
};

export const Falcon9Rocket = ({animationType, position}) => {
    return (
        <Falcon9 position={position} animationType={animationType}>
            <RocketSecondStage animationType={animationType}/>
            <RocketFairing id="fairing" animationType={animationType}/>
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

export const FalconRocket = ({display, animationType, heavy, onAnimationEnd}) => {
    return (
        <Rocket id="rocket" display={display} animationType={animationType}
                onAnimationEnd={onAnimationEnd.bind(this)}>
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