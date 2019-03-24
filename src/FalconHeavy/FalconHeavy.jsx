import PropTypes from "prop-types";
import React from "react";
import { Rocket } from "../Falcon9/Rocket"
import { Falcon9Rocket, Falcon9SideRocket } from "../Falcon9/Falcon9"

export const FalconHeavy = ({display, animationType, onAnimationEnd}) => {
    return (
        <Rocket id="rocket" display={display} animationType={animationType}
                onAnimationEnd={onAnimationEnd.bind(this)}>
            <Falcon9SideRocket position='24px' heavy={true} animationType={animationType}/>
            <Falcon9SideRocket position='-24px' heavy={true} animationType={animationType}/>
            <Falcon9Rocket position='0px' heavy={true} animationType={animationType}/>
        </Rocket>
    );
};

FalconHeavy.propTypes = {
    display: PropTypes.bool.isRequired,
    animationType: PropTypes.string.isRequired,
    onAnimationEnd: PropTypes.func.isRequired
};

export default FalconHeavy;