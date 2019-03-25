import React from 'react'
import PropTypes from 'prop-types'
import styled, {keyframes} from "styled-components";

export const Platform = styled.div`
    position: absolute;
    display: ${props => (props.display ? 'block' : 'none')};
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
    display: ${props => (props.display && props.animationType==="LAUNCH" ? 'block' : 'none')};
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

const LaunchPad = ({state}) =>  {
    const { display, animationType } = state;
    return (
        <div>
            <Platform display={display}/>
            <Holder display={display} animationType={animationType} />
        </div>
    );
}

LaunchPad.propTypes = {
    state: PropTypes.object.isRequired,
};

export default LaunchPad
