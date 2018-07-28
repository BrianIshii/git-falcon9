import styled, {keyframes} from 'styled-components'
//import React from 'react'

export const openLeftLeg = keyframes`
  from {
    transform: rotate(90deg) skewX(35deg); }
  to {
    transform: rotate(-35deg) skewX(-35deg); } 
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
    transform: rotate(35deg) skewX(35deg); }
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
    left: calc(90% - 47px);
  }
  50% {
    left: calc(90% - 45px);
  }
  100% {
    left: calc(90% - 47px);
  }
`

export const land = keyframes`
  0% {
    top: -260px; 
  }
  80% {
    top: calc(100% - 285px);
  }
  100% {
    top: calc(100% - 285px);
  }
`

export const launch = keyframes`
  0% {
  top: calc(100% - 280px);
}
  25% {
  top: calc(100% - 280px);
}
  100% {
  top: calc(0% - 300px);
}
`
export const engineTurnedOn = keyframes`
  0% {
      display: 'none';    
      left: 8px;
      width: 8px;
      height: 80px;
    //left: calc(90% - 47px);
  }
  50% {
      display: block; 
      left: 8px;
      width: 8px;
      height: 80px;
      //left: calc(90% - 45px);

      // box-shadow:
      // 0 0px 0px 3px white,
      // 0 38px 1px 2px white, 
      // 0 41px 2px 3px #ffd9b3, 
      // 0 50px 5px 4px #ffd9b3,  //orange top
      // 0 0px 150px 10px $orange, //orange global
      // 0 10px 2px 4px white,
      // 0 5px 3px 3px white;
  }
  100% {
    display: 'none';
    left: 8px;
    width: 8px;
    height: 80px;
   // left: calc(90% - 47px);
  }
}
`

export const engineTurnedOff = keyframes`
  0% {
    display: 'none';
    position: absolute;
    left: 10px;
    width: 1px;
    height: 20px;
  }
  50% {
    display: block;
    position: absolute;
    left: 10px;
      width: 2px;
      height: 40px;
  }
  80% {
    display: 'none';
    position: absolute;
    left: 10px;
    width: 0px;
    height: 0px;
  }
  100% {
    display: 'none';
    width: 0px;
    height: 0px;
  }
}
`

export const engineOff = keyframes`
  0% {
    display: 'none';
  }
  100% {
    display: 'none';
  }
`

export const Rocket = styled.div`
  display: ${props => (props.display ? 'block' : 'none')};
  position: absolute;
  height: 320px;
  left: calc(90% - 50px);
  ${props => ((props.animationType == "LAUNCH") ? 'top: calc(100% - 280px);' : 'top: calc(0%-300px);')}
  animation-name: ${wiggle}, ${props => ((props.animationType == "LAUNCH") ? launch : land)};
  animation-duration: 200ms, 10s;
  animation-delay: 1s, 0s;
  animation-iteration-count: 38, 1;
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
  // border-left: 3px solid #797d88;
  //border-right: 3px solid #a7a9b1;
  //border-bottom: 5px solid #3a3a3b;
  box-sizing: initial;

  // :after{ 
  //   content: '';
  //   position: absolute;
  //   display: block;
  //   left: 2px;
  //   width: 6px;
  //   height: 100%;
  //   background-color: #d6d8e1;
  // }
`

export const USFlag = styled.img`
  left: 7px;
  top: 115px;
  position: absolute;
  width: 8px;
  height: 5px;
`

export const SpaceXLogo = styled.img`
  top: 130px;
  position: absolute;
  width: 22px;
  height: 85px;
`
export const RocketFairing = styled.i`
  display: ${props => ((props.animationType == "LAUNCH") ? 'block' : 'none')};
  position: absolute;
  top: 0;
  left: -4px;
  height: 60px;
  width: 30px;
  border-top-left-radius: 200%;
  border-top-right-radius: 200%;
  border-bottom-left-radius: 100%;
  border-bottom-Right-radius: 100%;
  background-color: #d1d2d6;
  box-sizing: border-box;
  border-left: 3px solid #797d88;

  :after{
    content: '';
    position: absolute;
    display: ${props => ((props.animationType == "LAUNCH") ? 'block' : 'none')};
    left: 13px;
    width: 10px;
    top: 3px;
    height: 27px;
    border-top-right-radius: 100%;
    background: linear-gradient(180deg, #a7a9b1 20%, #d6d8e1); 
  }
`
export const RocketSecondStage = styled.i`
  display: ${props => ((props.animationType == "LAUNCH") ? 'block' : 'none')};
  left: 1px;
  top: 60px;
  width: 20px;
  height: 40px;
  background-color: #d1d2d6;
  position: absolute;
  // border-left: 3px solid #797d88;
  //border-right: 3px solid #a7a9b1;
  //border-bottom: 5px solid #3a3a3b;
  box-sizing: initial;

  // :after{ 
  //   content: '';
  //   position: absolute;
  //   display: ${props => ((props.animationType == "LAUNCH") ? 'block' : 'none')};
  //   left: 2px;
  //   width: 6px;
  //   height: 100%;
  //   background-color: #d6d8e1;
  // }
`
export const Fin = styled.i`
  position: absolute;
  display: block;
  width: 3px;
  height: 15px;
  top: 101px;
  background-color: #3a3a3b;
  animation-duration: 1s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
  transform: rotate(0deg);
`

export const FinLeft = Fin.extend`
  border-top-left-radius: 50%;
  left: -2px;
  transform-origin: right top;
  animation-name: ${props => ((props.animationType == "LAUNCH") ? 'none' : openLeftFin)};
`

export const FinRight = Fin.extend`
  border-top-right-radius: 50%;
  right: -23px;
  transform-origin: left top;
  animation-name: ${props => ((props.animationType == "LAUNCH") ? 'none' : openRightFin)};
`

export const RocketEngineBase = styled.i`
  width: 23px;
  height: 5px;
  bottom: 60px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  position: absolute;
  background-color: #3a3a3b; 
`

export const RocketEngine = styled.i`
  width: 8px;
  height: 8px;
  bottom: 52px;
  border-top-left-radius: 100%;
  border-top-right-radius: 100%;
  position: absolute;
  background-color: #787879;
  border-color: #0c0c0c;
  border-width: 1px;
  border-top-width: 0px;
  border-style: solid;
  
`

export const RocketEngineLeft = RocketEngine.extend`
  border-top-left-radius: 100%;
  left: 14px;
`

export const RocketEngineMiddle = RocketEngine.extend`
  border-top-right-radius: 100%;
  left: 8px;
`

export const RocketEngineRight= RocketEngine.extend`
  border-top-right-radius: 100%;
  left: 2px;
`

export const LegAnimation = styled.i`
  animation-duration: 2s;
  animation-delay: 6s;
  animation-fill-mode: forwards;
`
export const Leg = LegAnimation.extend`
  position: absolute;
  display: block; 
  bottom: 65px;
  width: 45px;
  height: 4px;
  background-color: #3a3a3b;
`

export const LegLeft = Leg.extend`
  right: 1px;
  transform-origin: right center;
  animation-name: ${props => ((props.animationType == "LAUNCH") ? 'none' : openLeftLeg)};
  transform: rotate(90deg) skewX(35deg);
`
export const LegMiddle = LegAnimation.extend`
  animation-name: ${props => ((props.animationType == "LAUNCH") ? 'none' : openMiddleLeg)};
  width: 18px; 
  height: 45px;
  bottom: 65px;
  border-radius: 200% 200% 0 0;
  border-top-left-radius: 50% 90%;
  border-top-right-radius: 50% 90%;
  border: 8px solid #3a3a3b;
  border-bottom: none;
  position: absolute;
  left: 2px;
  transform-origin: left bottom;

`

export const LegRight = Leg.extend`
  left: 23px;
  transform-origin: left center;
  animation-name: ${props => ((props.animationType == "LAUNCH") ? 'none' : openRightLeg)};
  transform: rotate(-90deg) skewX(-35deg);
`

export const Blaze = styled.i`
  display: block;
  position: absolute;
  top: 270px;
  left: -6px;
  background-color: #FF3D00;
  border-radius: 50% 50% 70% 70%;
  width: 40px;
  height: 60px;
  animation-name: ${engineOff}, ${engineTurnedOn};
  animation-duration:  2s, 8s;
  animation-iteration-count: infinite, 1;
  animation-fill-mode: none, forwards; 
`

export const Flame = styled.i`
  display: block;
  position: absolute;
  width: 0px;
  height: 0px;
  margin: 0px auto;
  top: 265px;
  left: 10px;
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
  animation-name: ${props => ((props.animationType == "LAUNCH") ? engineTurnedOn : engineTurnedOff)};
  animation-duration: 8s;
  animation-delay: 2s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  }
    .shadows{
    position: absolute;
    left: 4px;
    top: -5%;
    width: 0px;
    height: 50px;
    border-radius: 50%;
    box-shadow: 
      0 5px 20px 15px white, 
      0 0px 150px 30px #ffd9b3
  }
`
//export default Spaceship


