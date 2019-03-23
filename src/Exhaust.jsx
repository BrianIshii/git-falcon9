import styled, {keyframes} from 'styled-components'
import React from 'react'
import PropTypes from 'prop-types'

export const smokeUp = keyframes`
0%{
  height: 0px;
  box-shadow: 0px -10px 10px 10px rgba(255,255,255,0.3);
}
100%{
  height: 100vh;
  box-shadow: 0px -10px 10px 10px rgba(255,255,255,0.3);
}
`

export const Smoke = styled.div`
position: absolute;
display: ${props => (props.display ? 'block' : 'none')};
background: black;
left: calc(90% - 35px);
width: 0px;
bottom: calc(0%);
i {
  position: absolute;
  display: ${props => (props.display ? 'block' : 'none')};
  background: black;
  width: 0px;
  bottom: calc(0%);
  display: ${props => (props.display ? 'block' : 'none')};
  ${props => (props.animationType == "None" ? ';' :
  props => ((props.animationType == "LAUNCH") ?
    // on LAUNCH see Rocket
    'animation-name: ' + smokeUp + ';' +
    'animation-duration: 2s;' +
    'animation-delay: 1.5s;'
    :
    // on LAND
    ';'
  ))}
}
i:nth-child(1) {
}
i:nth-child(2) {
  display: ${props => (props.heavy ? 'block' : 'none')};
  left: -22px;
}
i:nth-child(3) {
  display: ${props => (props.heavy ? 'block' : 'none')};
  left: 22px;
}
`

class Exhaust extends React.Component {
    render() {
        //display, animationType, heavy
        return (<Smoke id="smoke" display={this.display} animationType={this.animationType} heavy={this.heavy}>
            <i/>
            <i/>
            <i/>
        </Smoke>)
    }
}

Exhaust.propTypes = {
    display: PropTypes.bool.isRequired,
    heavy: PropTypes.bool.isRequired,
    animationType: PropTypes.string.isRequired
};
export default Exhaust