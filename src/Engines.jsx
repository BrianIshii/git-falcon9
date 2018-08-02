import styled, {keyframes} from 'styled-components'

export const Octaweb = styled.i`
  position: absolute;
  height: 5px;
  width: 23px;
  bottom: 60px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: #3a3a3b; 
`

export const MerlinEngine = styled.i`
  position: absolute;
  height: 8px;
  width: 8px;
  bottom: 52px;
  border-top-left-radius: 100%;
  border-top-right-radius: 100%;
  background-color: #787879;
  border-color: #3a3a3b;
  border-width: 1px;
  border-top-width: 0px;
  border-style: solid;
`

export const MerlinEngineLeft = MerlinEngine.extend`
  left: 14px;
`

export const MerlinEngineMiddle = MerlinEngine.extend`
  left: 8px;
`

export const MerlinEngineRight= MerlinEngine.extend`
  left: 2px;
`