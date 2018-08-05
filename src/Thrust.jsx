import styled, {keyframes} from 'styled-components'

export const flameWiggleLaunch = keyframes`
  0% {
    height: 70px; }
  50% {
    height: 75px; }
  100% {
    height: 70px; }
`
export const flameWiggleLand = keyframes`
  0% {
    height: 30px; }
  50% {
    height: 35px; }
  100% {
    height: 30px; }
`
export const engineTurnedOn = keyframes`
  from {
    opacity: 1;
    display: block;    
    left: 8px;
    width: 8px;
  }
  to {
    opacity: 1;
    display: block; 
    left: 8px;
    width: 8px;
  }
}
`

export const engineTurnedOff = keyframes`
  0% {
    opacity: 1;
    position: absolute;
    left: 11px;
    width: 2px;
  }
  50% {
    opacity: 1;
    position: absolute;
    left: 11px;
    width: 2px;
  }
  90% {
    opacity: 1;
    position: absolute;
    left: 11px;
    width: 2px;
  }
  99% {
    opacity: 1;
    position: absolute;
    left: 11px;
    width: 2px;
  }
  100% {
    opacity: 0;
    position: absolute;
    left: 11px;
    width: 0px;
    //height: 0px;
  }
}
`
export const wasting = keyframes`
  0% {
    transform: translate3d(0px, 0, 0); }
  100% {
    transform: translate3d(-10px, 35px, 0); }
`;

export const wasting2 = keyframes`
  0% {
    transform: translate3d(0px, 0, 0); }
  100% {
    transform: translate3d(10px, 35px, 0); }
`;

export const Thrust = styled.i`
  display: block;
  position: absolute;
  top: 265px;
  height: 10px;
  width: 1px;
  left: 12px;
  opacity: 0;
  margin: 0px auto;
  background: white; 
  border-top-left-radius: 100px;
  border-bottom-left-radius: 9000%;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 9000%;
  box-shadow: 
      0 0px 0px 3px white,
      0 20px 1px 4px white, 
      0 25px 2px 3px #ffd9b3, 
      0 30px 5px 4px #ffd9b3,  //top
      0 0px 150px 15px #ffd9b3, //global
      0 10px 2px 4px white,
      0 5px 3px 3px white;
  ${props => (props.animationType == "None" ? ';' :
  props => ((props.animationType == "LAUNCH")  ?
    // on LAUNCH
    'animation-name: ' + flameWiggleLaunch + ', ' + engineTurnedOn + ';' +
    'animation-duration: 100ms, 2.5s;' +
    'animation-delay: 0.5s, 0.5s;' +
    'animation-iteration-count: 13, 1;'
    :
    // on LAND
    'animation-name: ' + flameWiggleLand + ', ' + engineTurnedOff + ';' +
    'animation-duration: 100ms, 2.5s;' +
    'animation-delay: 1s, 0.0s;' +
    'animation-iteration-count: 5, 1;'
  ))}
  animation-iteration-count: infinite, 1;
  animation-fill-mode: forwards;
  }
    .shadows{
    position: absolute;
    left: 4px;
    //top: -5%;
    width: 0px;
    height: ${props => ((props.animationType == "LAUNCH") ? '120px' : '50px')};
    border-radius: 50%;
    box-shadow: 
      0 5px 20px 15px white, 
      0 0px 150px 30px #ffd9b3
  }
`

export const Wastes = styled.i`
  position: absolute;
  top: ${props => ((props.animationType == "LAUNCH") ? '320px': '265px')};
  height: 8px;
  width: 8px;
  left: 11px;
  animation-delay: 0s;
  i {
    position: absolute;
    width: 1px;
    height: 3px;
    background-color: rgba(255, 255, 255, 0.5);
  }
  i:nth-child(1) {
    top: 2px;
    animation: ${wasting} 400ms ${props => ((props.animationType == "LAUNCH") ? '30': '18')} 100ms;
  }
  i:nth-child(2) {
    top: 4px;
    animation: ${wasting2} 400ms ${props => ((props.animationType == "LAUNCH") ? '30': '18')} 200ms;
  }
  i:nth-child(3) {
    top: 6px;
    animation: ${wasting} 400ms ${props => ((props.animationType == "LAUNCH") ? '30': '18')} 300ms;
  }
  i:nth-child(4) {
    top: 8px;
    animation: ${wasting2} 400ms ${props => ((props.animationType == "LAUNCH") ? '30': '18')} 400ms;
  }
  i:nth-child(5) {
    top: 10px;
    animation: ${wasting} 400ms ${props => ((props.animationType == "LAUNCH") ? '30': '18')} 100ms;
  }
`;