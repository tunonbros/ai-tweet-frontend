import React from "react"
import styled, { keyframes } from 'styled-components'


const dissapear = keyframes`
  0%,
  80%,
  100% {
    box-shadow: 0 2em 0 -1em;
    color: #006875;
  }
  40% {
    box-shadow: 0 2em 0 0;
    color: #26c6da;
  }
`

const DotContainer = styled.div`
  display: inline-flex;
`

const Dot = styled.div`
  border-radius: 50%;
  width: 2em;
  height: 2em;
  animation-fill-mode: both;
  animation: ${dissapear} 1.5s infinite ease-in-out;
  display: flex;
  margin: 0px 2px;
  color: #00acc1;
  font-size: 8px;
  animation-delay: ${props => props.delay || '0s'};
`

const Loader = props => (
  <DotContainer {...props}>
    <Dot/>
    <Dot delay={'0.2s'}/>
    <Dot delay={'0.4s'}/>
  </DotContainer>
)

export default Loader
