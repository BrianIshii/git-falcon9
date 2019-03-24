import styled, {keyframes} from "styled-components";

export const wiggle = keyframes`
  0% {
    left: calc(90% - 47px); }
  50% {
    left: calc(90% - 45px); }
  100% {
    left: calc(90% - 47px); }
`

export const land = keyframes`
  0% {
    top: -260px; }
  50% {
      top: calc(100% - 300px); }
  67% {
    top: calc(100% - 285px); }
  100% {
    top: calc(100% - 285px); }
`

export const launch = keyframes`
  0% {
    top: calc(100% - 280px); }
  33% {
    top: calc(100% - 280px); }
  100% {
    top: calc(0% - 300px); }
`;

export const Rocket1 = styled.div`
  display: ${props => (props.display ? 'block' : 'none')};
  position: absolute;
  height: 320px;
  left: calc(90% - 50px);
  ${props => (props.animationType == "None" ? ';' :
    props => ((props.animationType == "LAUNCH")
            ?
            // on LAUNCH
            'top: calc(100% - 280px);' +
            'animation-name: ' + wiggle + "," + launch + ";" +
            'animation-duration: 200ms, 3s;' +
            'animation-delay: 0.5s, 0s;' +
            'animation-iteration-count: 13, 1;' +
            'animation-fill-mode: forwards;' +
            'animation-timing-function: ease-in;'
            :
            // on LAND
            'top: calc(0%-300x);' +
            'bottom: calc(100%);' +
            'animation-name: ' + wiggle + ',' + land + ";" +
            'animation-duration: 200ms, 3s;' +
            'animation-delay: 1s, 0s;' +
            'animation-iteration-count: 5, 1;' +
            'animation-fill-mode: forwards;' +
            'animation-timing-function: ease-out;'
    ))}
`;

export const Rocket = styled.div`
  display: 'block';
  position: absolute;
  height: 320px;
  left: calc(90% - 50px);
`;