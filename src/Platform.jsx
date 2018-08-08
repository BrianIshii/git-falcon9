import styled, {keyframes} from 'styled-components'
import React from 'react'


export const exhaust = keyframes`
  0%{
    box-shadow: 0px -20px 60px -5px rgba(255,255,255,0.7);
  }
  60%{
    box-shadow: 0px -30px 70px 5px white;
  }
  100%{
    box-shadow: 0px -10px 80px -10px rgba(255,255,255,0.5);
  }
`
export const LaunchPad = styled.div `
    position: absolute;
    display: ${props => (props.display ? 'block' : 'none')};
    height: 1px;
    width: 100px;
    left: calc(90% - 50px);
    right: 0;
    background: #444;
    animation-name: ${exhaust};
    animation-duration: 2s;
    animation-delay: 0s;
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
    left: -200px;
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
    animation-duration: 4s;
    animation-delay: 0.2s;
  }
  i:nth-child(2) {
    animation-name: ${smokeLeft};
    animation-iteration-count: infinite;
    animation-duration: 4s;
    animation-delay: 0.4s;
  }
  i:nth-child(3) {
    animation-name: ${smokeLeft};
    animation-iteration-count: infinite;
    animation-duration: 4s;
    animation-delay: 0.6s;
  }
  i:nth-child(4) {
    animation-name: ${smokeLeft};
    animation-iteration-count: infinite;
    animation-duration: 4s;
    animation-delay: 0.8s;
  }
  i:nth-child(5) {
    animation-name: ${smokeLeft};
    animation-iteration-count: infinite;
    animation-duration: 4s;
    animation-delay: 1s;
  }
  i:nth-child(6) {
    animation-name: ${smokeLeft};
    animation-iteration-count: infinite;
    animation-duration: 4s;
    animation-delay: 1.2s;
  }
  i:nth-child(7) {
    animation-name: ${smokeLeft};
    animation-iteration-count: infinite;
    animation-duration: 4s;
    animation-delay: 1.4s;
  }
  i:nth-child(8) {
    animation-name: ${smokeLeft};
    animation-iteration-count: infinite;
    animation-duration: 4s;
    animation-delay: 1.6s;
  }
  i:nth-child(9) {
    animation-name: ${smokeLeft};
    animation-iteration-count: infinite;
    animation-duration: 4s;
    animation-delay: 1.8s;
  }
  i:nth-child(10) {
    animation-name: ${smokeLeft};
    animation-iteration-count: infinite;
    animation-duration: 4s;
    animation-delay: 2s;
  }
`

const Platform = ({display, animationType}) => (
  <LaunchPad id="platform" display={display} animationType={animationType}>
    <Smoke>
      <i />
      <i />
      <i />
      <i />
      <i />
      <i />
      <i />
      <i />
      <i />
      <i />
    </Smoke>
  </LaunchPad>
);

export default Platform