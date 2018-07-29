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
export const wiggle = keyframes`
  0% {
    left: calc(90% - 47px); }
  50% {
    left: calc(90% - 45px); }
  100% {
    left: calc(90% - 47px); }
`

export const flameWiggle = keyframes`
  0% {
    height: 70px; }
  50% {
    height: 75px; }
  100% {
    height: 70px; }
`

export const land = keyframes`
  0% {
    top: -260px; }
  80% {
    top: calc(100% - 285px); }
  100% {
    top: calc(100% - 285px); }
`

export const launch = keyframes`
  0% {
  top: calc(100% - 280px); }
  25% {
  top: calc(100% - 280px); }
  100% {
  top: calc(0% - 300px); }
`

export const engineTurnedOn = keyframes`
  0% {
    opacity: 1;
    display: 'none';    
    left: 8px;
    width: 8px;
  }
  50% {
    opacity: 1;
    display: block; 
    left: 8px;
    width: 8px;
  }
  100% {
    opacity: 1;
    display: 'none';
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
    height: 5px;
  }
  50% {
    opacity: 1;
    position: absolute;
    left: 11px;
    width: 2px;
    height: 30px;
  }
  90% {
    opacity: 1;
    position: absolute;
    left: 11px;
    width: 2px;
    height: 20px;
  }
  99% {
    opacity: 1;
    position: absolute;
    left: 11px;
    width: 2px;
    height: 10px;
  }
  100% {
    opacity: 0;
    position: absolute;
    left: 11px;
    width: 0px;
    height: 0px;
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

export const Rocket = styled.div`
  display: ${props => (props.display ? 'block' : 'none')};
  position: absolute;
  height: 320px;
  left: calc(90% - 50px);
  ${props => ((props.animationType == "LAUNCH") ? 'top: calc(100% - 280px);' : 'top: calc(0%-300px);')}
  animation-name: ${wiggle}, ${props => ((props.animationType == "LAUNCH") ? launch : land)};
  animation-duration: 200ms, 10s;
  animation-delay: 2s, 0s;
  animation-iteration-count: 30, 1;
  animation-timing-function: ${props => ((props.animationType == "LAUNCH") ? "ease-in" : "ease-out")};
  animation-fill-mode: forwards;
`

export const RocketSpan = styled.span`
  display: block;
  position: absolute;
  top: 100px;
  width: 22px;
  height: 155px;
  background-color: #d1d2d6;
  box-sizing: initial;
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
export const RocketFairing = styled.i`
  display: ${props => ((props.animationType == "LAUNCH") ? 'block' : 'none')};
  position: absolute;
  top: 0;
  height: 60px;
  width: 30px;
  left: -4px;
  border-top-left-radius: 200%;
  border-top-right-radius: 200%;
  border-bottom-left-radius: 70%;
  border-bottom-right-radius: 70%;
  background-color: #d1d2d6;
  box-sizing: border-box;

  :after{
    content: '';
    position: absolute;
    display: ${props => ((props.animationType == "LAUNCH") ? 'block' : 'none')};
    left: 16px;
    width: 10px;
    top: 3px;
    height: 27px;
    border-top-right-radius: 100%;
    background: linear-gradient(180deg, #a7a9b1 20%, #d6d8e1); 
  }
`
export const RocketSecondStage = styled.i`
  display: ${props => ((props.animationType == "LAUNCH") ? 'block' : 'none')};
  position: absolute;
  top: 60px;
  height: 40px;
  width: 20px;
  left: 1px;
  background-color: #d1d2d6;
  border-bottom: 1px solid #a7a9b1;
  border-top: 1px solid #a7a9b1;
  box-sizing: initial;
`
export const Fin = styled.i`
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

export const FinLeft = Fin.extend`
  left: -2px;
  border-top-left-radius: 50%;
  transform-origin: right top;
  animation-name: ${props => ((props.animationType == "LAUNCH") ? 'none' : openLeftFin)};
`

export const FinRight = Fin.extend`
  right: -23px;
  border-top-right-radius: 50%;
  transform-origin: left top;
  animation-name: ${props => ((props.animationType == "LAUNCH") ? 'none' : openRightFin)};
`

export const RocketEngineBase = styled.i`
  position: absolute;
  height: 5px;
  width: 23px;
  bottom: 60px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: #3a3a3b; 
`

export const RocketEngine = styled.i`
  position: absolute;
  height: 8px;
  width: 8px;
  bottom: 52px;
  border-top-left-radius: 100%;
  border-top-right-radius: 100%;
  background-color: #787879;
  border-color: #3a3a3b;
  border-width: 1px;
  border-top-width: 0px;
  border-style: solid;
  
`

export const RocketEngineLeft = RocketEngine.extend`
  left: 14px;
  border-top-left-radius: 100%;
`

export const RocketEngineMiddle = RocketEngine.extend`
  left: 8px;
  border-top-right-radius: 100%;
`

export const RocketEngineRight= RocketEngine.extend`
  left: 2px;
  border-top-right-radius: 100%;
`

export const LegAnimation = styled.i`
  animation-duration: 2s;
  animation-delay: 6s;
  animation-fill-mode: forwards;
`
export const Leg = LegAnimation.extend`
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
  animation-name: ${props => ((props.animationType == "LAUNCH") ? 'none' : openLeftLeg)};
  transform: rotate(90deg) skewX(35deg);
`
export const LegMiddle = LegAnimation.extend`
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
  animation-name: ${props => ((props.animationType == "LAUNCH") ? 'none' : openMiddleLeg)};
  transform-origin: left bottom;

`

export const LegRight = Leg.extend`
  left: 23px;
  transform-origin: left center;
  animation-name: ${props => ((props.animationType == "LAUNCH") ? 'none' : openRightLeg)};
  transform: rotate(-90deg) skewX(-35deg);
`

export const Flame = styled.i`
  display: block;
  position: absolute;
  top: 265px;
  height: 4px;
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
  animation-name: ${flameWiggle}, ${props => ((props.animationType == "LAUNCH") ? engineTurnedOn : engineTurnedOff)};
  animation-duration: 100ms, 9s;
  animation-delay: 2s, ${props => ((props.animationType == "LAUNCH") ? '2s' : '0s')};
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
  animation-delay: 2s;
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