import React from 'react'
import styled, {keyframes} from "styled-components";

export const Platform = styled.div`
    position: absolute;
    display: 'block';
    height: 2px;
    width: 100px;
    
    left: calc(90% - 85px);
    bottom: calc(0%);
    background: #444;
`;
export const moveHolderBack = keyframes`
  from {
    transform: rotate(0deg); }
  to {
    transform: rotate(15deg); }
`;

export const Holder = styled.div`
    position: absolute;
    display: 'block';
    height: 200px;
    width: 20px;
    
    left: calc(90%);
    bottom: calc(0%);
    background: #444;
    transform-origin: left bottom;
    animation-duration: 4s;
    animation-delay: 0s;
    animation-name: ${moveHolderBack};
    animation-iteration-count: 1;


`;

class LaunchPad extends React.Component {
    render() {
        return (
            <div>
            <Platform/>
            <Holder/>
            </div>
        )
    }
}

LaunchPad.propTypes = {
};

export default LaunchPad
