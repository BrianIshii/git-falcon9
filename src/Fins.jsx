import styled, {keyframes} from 'styled-components'

export const openLeftFin = keyframes`
  from {
    transform: rotate(0deg); }
  to {
    transform: rotate(90deg); }
`

export const openRightFin = keyframes`
  from {
    transform: rotate(0deg); }
  to {
    transform: rotate(-90deg); }
`

export const GridFin = styled.i`
  display: block;
  position: absolute;
  top: 101px;
  height: 15px;
  width: 3px;
  background-color: #3a3a3b;
  animation-duration: 1s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
  transform: rotate(0deg);
`

export const FinLeft = GridFin.extend`
  left: -2px;
  border-=top-left-radius: 50%;
  transform-origin: right top;
  ${props => (props.animationType == "None" ? ';' :
  props => ((props.animationType == "LAUNCH")  ?
    // on LAUNCH
    ';'
    :
    // on LAND
    'animation-name: ' + openLeftFin + ';'
  ))}
`

export const FinRight = GridFin.extend`
  right: -23px;
  border-top-right-radius: 50%;
  transform-origin: left top;
  ${props => (props.animationType == "None" ? ';' :
  props => ((props.animationType == "LAUNCH")  ?
    // on LAUNCH
    ';'
    :
    // on LAND
    'animation-name: ' + openRightFin + ';'
  ))}
  `
