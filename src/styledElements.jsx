import styled, {keyframes} from 'styled-components'
import React from 'react'

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

export const Rocket = styled.div`
  display: ${props => (props.display ? 'block' : 'none')};
  position: absolute;
  height: 320px;
  left: calc(90% - 50px);
  ${props => ((props.animationType == "LAUNCH")
    ?
    // on LAUNCH
      'top: calc(100% - 280px);' +
      'animation-name: ' + wiggle + "," + launch + ";" +
      'animation-duration: 200ms, 10s;' +
      'animation-delay: 2s, 0s;' +
      'animation-iteration-count: 30, 1;' +
      'animation-fill-mode: forwards;' +
      'animation-timing-function: ease-in;'
    :
    // on LAND
    'top: calc(0%-300x);' +
    'bottom: calc(100%);' +
    'animation-name: ' + wiggle + ',' + land + ";" +
    'animation-duration: 200ms, 10s;' +
    'animation-delay: 2s, 0s;' +
    'animation-iteration-count: 30, 1;' +
    'animation-fill-mode: forwards;' +
    'animation-timing-function: ease-out;'
  )}
`

export const Falcon9 = styled.div`
  display: block;
  position: absolute;
  height: 320px;
  left: 0px;
  'top: calc(0%-300px);'
  ${props => ((props.animationType == "LAUNCH")
  ?
  // on LAUNCH see Rocket
    ';'
  :
  // on LAND
  ';'
)}
`

export const Falcon9Right = Falcon9.extend`
  display: ${props => (props.heavy ? 'block' : 'none')};
  ${props => ((props.animationType == "LAUNCH")
  ?
  // on LAUNCH
    'left: 24px;'
  :
  // on LAND
    'left: -100px;'
  )}
`

export const Falcon9Left = Falcon9.extend`
  display: ${props => (props.heavy ? 'block' : 'none')};
  ${props => ((props.animationType == "LAUNCH")
  ?
  // on LAUNCH
    'left: -24px;'
  :
  // on LAND
    'left: -200px;'
  )}
`

export const RocketFirstStage = styled.span`
  display: block;
  position: absolute;
  top: 100px;
  width: 22px;
  height: 155px;
  background-color: #d1d2d6;
  border-top: 1px solid #a7a9b1;
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
  //display: ${props => (props.heavy ? 'block' : 'none')};
  position: absolute;
  top: -20px;
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
  top: 40px;
  height: 60px;
  width: 20px;
  left: 1px;
  background-color: #d1d2d6;
  border-bottom: 1px solid #a7a9b1;
  border-top: 1px solid #a7a9b1;
  box-sizing: initial;
`
export const RocketCap = styled.i`
  display: block;
  position: absolute;
  top: 80px;
  height: 65px;
  width: 22px;
  border-top-left-radius: 2000%;
  border-top-right-radius: 2000%;
  background-color: #d1d2d6;
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
  border-top-left-radius: 50%;
  transform-origin: right top;
  animation-name: ${props => ((props.animationType == "LAUNCH") ? 'none' : openLeftFin)};
`

export const FinRight = GridFin.extend`
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
  animation-name: ${props => ((props.animationType == "LAUNCH") ? flameWiggleLaunch : flameWiggleLand)}, ${props => ((props.animationType == "LAUNCH") ? engineTurnedOn : engineTurnedOff)};
  animation-duration: 100ms, 9s;
  animation-delay: ${props => ((props.animationType == "LAUNCH") ? '2s' : '2s')}, ${props => ((props.animationType == "LAUNCH") ? '2s' : '0s')};
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

const Spaceship = ({display, animationType, heavy, onAnimationEnd}) => (
  <Rocket id="rocket" display={display} animationType={animationType} onAnimationEnd={onAnimationEnd.bind(this)}>
    <Falcon9Left heavy={heavy} animationType={animationType}>
      <RocketCap />
      <RocketFirstStage />
      <FinLeft animationType={animationType} />
      <FinRight animationType={animationType} />
      <Flame animationType={animationType} />
      <RocketEngineBase />
      <RocketEngineLeft />
      <RocketEngineRight />
      <RocketEngineMiddle />
      <LegLeft animationType={animationType} />
      <LegRight animationType={animationType} />
      <LegMiddle animationType={animationType} />
      <Wastes animationType={animationType} >
        <i />
        <i />
        <i />
        <i />
        <i />
      </Wastes>
    </Falcon9Left>
    <Falcon9Right heavy={heavy} animationType={animationType}>
      <RocketCap />
      <RocketFirstStage />
      <FinLeft animationType={animationType} />
      <FinRight animationType={animationType} />
      <Flame animationType={animationType} />
      <RocketEngineBase />
      <RocketEngineLeft />
      <RocketEngineRight />
      <RocketEngineMiddle />
      <LegLeft animationType={animationType} />
      <LegRight animationType={animationType} />
      <LegMiddle animationType={animationType} />
      <Wastes animationType={animationType} >
        <i />
        <i />
        <i />
        <i />
        <i />
      </Wastes>
    </Falcon9Right>
    <Falcon9 animationType={animationType} >
      <RocketSecondStage animationType={animationType} />
      <RocketFairing animationType={animationType} heavy={heavy} />
      <RocketFirstStage />
      <USFlag src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/280px-Flag_of_the_United_States_%28Pantone%29.svg.png" />
      <SpaceXLogo src="http://i67.tinypic.com/24q6a0k.png" />
      <FinLeft animationType={animationType} />
      <FinRight animationType={animationType} />
      <Flame animationType={animationType} />
      <RocketEngineBase />
      <RocketEngineLeft />
      <RocketEngineRight />
      <RocketEngineMiddle />
      <LegLeft animationType={animationType} />
      <LegRight animationType={animationType} />
      <LegMiddle animationType={animationType} />
      <Wastes animationType={animationType} >
        <i />
        <i />
        <i />
        <i />
        <i />
      </Wastes>
    </Falcon9>
  </Rocket>
);

export default Spaceship