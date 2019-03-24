import styled from 'styled-components'
import { LegLeft, LegMiddle, LegRight } from './Legs'
import { FinLeft, FinRight } from './Fins'
import { Octaweb, MerlinEngineLeft, MerlinEngineLeftMiddle, MerlinEngineRightMiddle, MerlinEngineRight } from './Engines'
import { Thrust, Wastes } from './Thrust'
import React from 'react'
import PropTypes from 'prop-types'

// Animation Duration: 3 seconds

export const FirstStageDiv = styled.div`
`

export const FirstStageSpan = styled.span`
  display: block;
  position: absolute;
  top: 100px;
  width: 22px;
  height: 155px;
  background-color: #d1d2d6;
  border-top: 1px solid #a7a9b1;
`

const FirstStage = ({animationType}) => {
    return (
        <FirstStageDiv id='firstStageDiv'>
            <FirstStageSpan id='firstStageSpan'/>
            <FinLeft animationType={animationType}/>
            <FinRight animationType={animationType}/>
            <Thrust animationType={animationType}/>
            <Octaweb/>
            <MerlinEngineLeft/>
            <MerlinEngineRight/>
            <MerlinEngineLeftMiddle/>
            <MerlinEngineRightMiddle/>
            <LegLeft animationType={animationType}/>
            <LegRight animationType={animationType}/>
            <LegMiddle animationType={animationType}/>
            <Wastes animationType={animationType}>
                <i/>
                <i/>
                <i/>
                <i/>
                <i/>
            </Wastes>
        </FirstStageDiv>
    );
};

FirstStage.propTypes = {
    animationType: PropTypes.string.isRequired,
};

export default FirstStage;