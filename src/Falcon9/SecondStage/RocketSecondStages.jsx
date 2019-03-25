import styled from 'styled-components'

export const RocketSecondStage = styled.i`
  display: ${props => ((props.animationType == "LAUNCH") ? 'block' : 'none')};
  position: absolute;
  top: 40px;
  height: 60px;
  width: 20px;
  left: 1px;
  background: linear-gradient(to right, #bbb, white, #f1f1f1);
  border-bottom: 1px solid #a7a9b1;
  border-top: 2px solid #a7a9b1;
  box-sizing: initial;
`;

export const RocketCap = styled.i`
  display: block;
  position: absolute;
  top: 80px;
  height: 65px;
  width: 22px;
  border-top-left-radius: 2000%;
  border-top-right-radius: 2000%;
  background-color: #d1d2d6;
`;

export const RocketFairing = styled.i`
  display: ${props => ((props.animationType == "LAUNCH") ? 'block' : 'none')};
  position: absolute;
  top: -20px;
  height: 60px;
  width: 30px;
  left: -4px;
  border-top-left-radius: 200%;
  border-top-right-radius: 200%;
  border-bottom-left-radius: 70%;
  border-bottom-right-radius: 70%;
  background: linear-gradient(to right, #bbb, white, #f1f1f1);
  box-sizing: border-box;
`;

export const DragonCapsule = styled.i`
  display: ${props => ((props.animationType == "LAUNCH") ? 'block' : 'none')};
  position: absolute;
  top: 20px;
  width: 22px;
  border-top: 20px solid #d1d2d6;
  border-bottom: 40px solid transparent;
  border-left: 0px solid transparent;
  border-right: 0px solid transparent;
  border-radius: 400% 400% 0% 0%;

    :after{
        left: 1px;
        content: '';
        display: 'block';
        position: absolute;
        background: #d1d2d6;
        width: 10px;
        height: 22px;
        border-right: 10px solid #3a3a3b;
  }
`;