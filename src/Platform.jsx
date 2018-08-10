import styled, {keyframes} from 'styled-components'
import React from 'react'


export const exhaust = keyframes`
  0%{
    box-shadow: 0px -10px 60px -5px rgba(255,255,255,0.7);
  }
  60%{
    box-shadow: 0px -10px 70px 30px white;
  }
  100%{
    box-shadow: 0px -10px 80px 20px rgba(255,255,255,0.3);
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
    animation-name: ${exhaust};
    animation-duration: 2s;
    animation-delay: 1s;
    animation-iteration-count: 1;
    will-change: box-shadow;
`

export const smokeLeft = keyframes`
  0%{
    filter:blur(4px);
    opacity: 0.8;
    height: 1px;
    left: 0px;
    width: 1px;
  }
  100%{
    filter:blur(4px);
    opacity: 0.5;
    left: -100px;
    height: 100px;
    width: 100px;
  }
`
export const smokeRight = keyframes`
  0%{
    filter:blur(4px);
    opacity: 0.8;
    height: 1px;
    left: 20px;
    width: 1px;
  }
  100%{
    filter:blur(4px);
    opacity: 0.5;
    left: 100px;
    height: 100px;
    width: 100px;
  }
`

export const Smoke = styled.i`
  position: absolute;
  display: block;
  background: white;
  bottom: calc(100%);
  i {
    position: absolute;
    display: block;
    background: white;
    bottom: calc(100%);
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
  }
  i:nth-child(1) {
    animation-name: ${smokeLeft};
    animation-iteration-count: infinite;
    animation-duration: 8s;
    animation-delay: 0.2s;
  }
  i:nth-child(2) {
    animation-name: ${smokeRight};
    animation-iteration-count: infinite;
    animation-duration: 8s;
    animation-delay: 0.2s;
   }
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

  </LaunchPad>
);

export default Platform