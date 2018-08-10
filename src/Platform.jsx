import styled, {keyframes} from 'styled-components'
import React from 'react'

export const smokeLand = keyframes`
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

export const smokeLaunch = keyframes`
  0%{
    box-shadow: 0px -10px 60px -5px rgba(255,255,255,0.7);
  }
  100%{
    box-shadow: 0px -40px 100px 50px white;
  }
`

export const LaunchPad = styled.div `
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
      'animation-name: ' + smokeLaunch + ';' +
      'animation-duration: 2s;' +
      'animation-delay: 1s;'
      :
      // on LAND
      'animation-name: ' + smokeLand + ';' +
      'animation-duration: 2s;' +
      'animation-delay: 1s;'
    ))}
    animation-iteration-count: 1;
    will-change: box-shadow;
`

export const smokeLeft = keyframes`
  0%{
    filter:blur(4px);
    opacity: 0.8;
    height: 1px;
    left: calc(90% - 100px);
    width: 200px;
    box-shadow: 0px -10px 20px 20px rgba(255,255,255,0.6);
  }
  100%{
    filter:blur(4px);
    opacity: 0.5;
    left: calc(90% - 100px);
    height: 100px;
    width: 200px;
    box-shadow: 0px -10px 100px 100px rgba(255,255,255,0.6);
  }
`
export const smokeRight = keyframes`
  0%{
    filter:blur(4px);
    opacity: 0.8;
    height: 1px;
    width: 100px;
  }
  100%{
    filter:blur(4px);
    opacity: 0.5;
    height: 100px;
    width: 100px;
    box-shadow: 0px -10px 10px 10px rgba(255,255,255,0.3);
  }
`

export const Smoke2 = styled.i`
  position: absolute;
  display: block;
  background: rgba(255,255,255,0.6);
  bottom: calc(100%);
  left: calc(90% - 40px);

  i {
    position: absolute;
    display: block;
    background:  rgba(255,255,255,0.6);
    left: calc(90% - 40px);
    bottom: calc(100%);
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
  }
  i:nth-child(1) {
    animation-name: ${smokeLeft};
    animation-iteration-count: 1;
    animation-duration: 2.2s;
    animation-delay: 0.8s;
  }
  // i:nth-child(2) {
  //   animation-name: ${smokeRight};
  //   animation-iteration-count: 1;
  //   animation-duration: 3s;
  //   animation-delay: 0.2s;
  //  }
  // i:nth-child(3) {
  //   animation-name: ${smokeLeft};
  //   animation-iteration-count: infinite;
  //   animation-duration: 4s;
  //   animation-delay: 0.6s;
  // }
  // i:nth-child(4) {
  //   animation-name: ${smokeLeft};
  //   animation-iteration-count: infinite;
  //   animation-duration: 4s;
  //   animation-delay: 0.8s;
  // }
  // i:nth-child(5) {
  //   animation-name: ${smokeLeft};
  //   animation-iteration-count: infinite;
  //   animation-duration: 4s;
  //   animation-delay: 1s;
  // }
  // i:nth-child(6) {
  //   animation-name: ${smokeRight};
  //   animation-iteration-count: infinite;
  //   animation-duration: 4s;
  //   animation-delay: 0.2s;
  // }
  // i:nth-child(7) {
  //   animation-name: ${smokeRight};
  //   animation-iteration-count: infinite;
  //   animation-duration: 4s;
  //   animation-delay: 0.4s;
  // }
  // i:nth-child(8) {
  //   animation-name: ${smokeRight};
  //   animation-iteration-count: infinite;
  //   animation-duration: 4s;
  //   animation-delay: 0.6s;
  // }
  // i:nth-child(9) {
  //   animation-name: ${smokeRight};
  //   animation-iteration-count: infinite;
  //   animation-duration: 4s;
  //   animation-delay: 0.8s;
  // }
  // i:nth-child(10) {
  //   animation-name: ${smokeRight};
  //   animation-iteration-count: infinite;
  //   animation-duration: 4s;
  //   animation-delay: 1s;
  // }
`

const Platform = ({display, animationType}) => (
  <LaunchPad id="platform" display={display} animationType={animationType}>
    <Smoke2>
      <i/>
      <i/>
    </Smoke2>
  </LaunchPad>
);

export default Platform
