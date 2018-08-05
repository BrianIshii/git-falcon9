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
    top: calc(100%);
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

const Platform = ({display, animationType}) => (
    <LaunchPad id="platform" display={display} animationType={animationType}>
    </LaunchPad>
  );

export default Platform