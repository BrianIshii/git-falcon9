import PropTypes from "prop-types";
import React from "react";
import FalconRocket from "../Falcon9/Falcon9";

export const FalconHeavy = ({display, animationType, onAnimationEnd}) => {
    return (
        <FalconRocket display={display} animationType={animationType}
                      heavy={true} onAnimationEnd={onAnimationEnd.bind(this)}/>
    );
};

FalconHeavy.propTypes = {
    display: PropTypes.bool.isRequired,
    animationType: PropTypes.string.isRequired,
    onAnimationEnd: PropTypes.func.isRequired
};

export default FalconHeavy;