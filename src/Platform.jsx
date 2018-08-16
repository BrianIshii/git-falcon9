import styled, { keyframes } from 'styled-components'
import React from 'react'

export const SmokeLand = keyframes`
  0%{
    box-shadow: 0px -10px 60px -5px rgba(255,255,255,0.7);
  }
  90%{
    box-shadow: 0px -10px 70px 30px white;
  }
  100%{
    box-shadow: 0px -10px 120px 30px rgba(255,255,255,0.8);
  }
`

export const SmokeLaunch = keyframes`
  0%{
    filter:blur(4px);
    opacity: 0.5;
    height: 1px;
    width: 200px;
    left: calc(90% - 120px);
    box-shadow: 0px -10px 50px 50px rgba(255,255,255,0.6);
  }
  100%{
    filter:blur(4px);
    opacity: 0.5;
    height: 100px;
    width: 200px;
    left: calc(90% - 120px);
    box-shadow: 0px -10px 100px 100px rgba(255,255,255,0.6);
  }
`

export const LaunchPad = styled.div`
    position: absolute;
    display: ${props => (props.display ? 'block' : 'none')};
    height: 1px;
    width: 100px;
    left: calc(90% - 85px);
    right: 0;
    background: #444;
    ${props => (props.animationType == "None" ? ';' :
    props => ((props.animationType == "LAUNCH") ?
      // on LAUNCH see Rocket
      ';'
      :
      // on LAND
      'animation-name: ' + SmokeLand + ';' +
      'animation-duration: 2s;' +
      'animation-delay: 1s;'
    ))}
    animation-iteration-count: 1;
    will-change: box-shadow;
`


export const PlatformSmoke = styled.i`
  position: absolute;
  display: block;
  background: rgba(255,255,255,0.6);
  left: calc(90% - 85px);
  bottom: calc(100%);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  ${props => (props.animationType == "None" ? ';' :
  props => ((props.animationType == "LAUNCH") ?
    // on LAUNCH see Rocket
    'animation-name: ' + SmokeLaunch + ';' +
    'animation-iteration-count: 1;' +
    'animation-duration: 2.2s;'+
    'animation-delay: 0.8s;'
    :
    // on LAND
    ';'
  ))}
`

const Platform = ({ display, animationType }) => (
  <LaunchPad id="platform" display={display} animationType={animationType}>
    <PlatformSmoke animationType={animationType}/>
  </LaunchPad>
);

export default Platform
