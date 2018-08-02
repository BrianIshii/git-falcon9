import styled, {keyframes} from 'styled-components'

export const openLeftLeg = keyframes`
  from {
    transform: rotate(90deg) skewX(35deg); }
  to {
    transform: rotate(-40deg) skewX(-35deg); } 
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
    transform: rotate(40deg) skewX(35deg); }
`

export const LegBaseStyling = styled.i`
  animation-duration: 2s;
  animation-delay: 6s;
  animation-fill-mode: forwards;
`
export const Leg = LegBaseStyling.extend`
  display: block; 
  position: absolute;
  height: 4px;
  width: 45px;
  bottom: 65px;
  background-color: #3a3a3b;
`

export const LegLeft = Leg.extend`
  right: 1px;
  transform-origin: right center;
  transform: rotate(90deg) skewX(35deg);
  ${props => (props.animationType == "None" ? ';' :
  props => ((props.animationType == "LAUNCH")  ?
    // on LAUNCH
    ';'
    :
    // on LAND
    'animation-name: ' + openLeftLeg + ';'
  ))}
`
export const LegMiddle = LegBaseStyling.extend`
  position: absolute;
  height: 45px;
  width: 18px; 
  bottom: 65px;
  left: 2px;
  border-radius: 200% 200% 0 0;
  border-top-left-radius: 50% 90%;
  border-top-right-radius: 50% 90%;
  border: 8px solid #3a3a3b;
  border-bottom: none;
  transform-origin: left bottom;
  ${props => (props.animationType == "None" ? ';' :
  props => ((props.animationType == "LAUNCH")  ?
    // on LAUNCH
    ';'
    :
    // on LAND
    'animation-name: ' + openMiddleLeg + ';'
  ))}

`

export const LegRight = Leg.extend`
  left: 23px;
  transform-origin: left center;
  transform: rotate(-90deg) skewX(-35deg);
  ${props => (props.animationType == "None" ? ';' :
  props => ((props.animationType == "LAUNCH")  ?
    // on LAUNCH
    ';'
    :
    // on LAND
    'animation-name: ' + openRightLeg + ';'
  ))}
`