import styled, {keyframes} from 'styled-components'
import React from 'react'

export const smokeUp = keyframes`
0%{
  height: 0px;
  box-shadow: 0px -10px 10px 10px rgba(255,255,255,0.3);
}
100%{
  height: 100vh;
  box-shadow: 0px -10px 10px 10px rgba(255,255,255,0.3);
}
`

export const Smoke = styled.div`
position: absolute;
display: ${props => (props.display ? 'block' : 'none')};
background: black;
left: calc(90% - 35px);
width: 0px;
bottom: calc(0%);
i {
  position: absolute;
  display: ${props => (props.display ? 'block' : 'none')};
  background: black;
  width: 0px;
  bottom: calc(0%);
  display: ${props => (props.display ? 'block' : 'none')};
  ${props => (props.animationType == "None" ? ';' :
  props => ((props.animationType == "LAUNCH") ?
    // on LAUNCH see Rocket
    'animation-name: ' + smokeUp + ';' +
    'animation-duration: 2s;' +
    'animation-delay: 1.5s;'
    :
    // on LAND
    ';'
  ))}
}
i:nth-child(1) {
}
i:nth-child(2) {
  display: ${props => (props.heavy ? 'block' : 'none')};
  left: -22px;
}
i:nth-child(3) {
  display: ${props => (props.heavy ? 'block' : 'none')};
  left: 22px;
}
`

const Exhaust = ({display, animationType, heavy}) => (
    <Smoke id="smoke" display={display} animationType={animationType} heavy={heavy}>
      <i/>
      <i/>
      <i/>
    </Smoke>
)

export default Exhaust