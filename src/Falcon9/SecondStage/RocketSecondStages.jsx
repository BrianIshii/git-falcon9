import styled from 'styled-components'

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