import React from "react"
import { Link } from "react-router-dom"
import styled from 'styled-components'
import Button from "@material-ui/core/Button";


const TitleButton = styled(Button)`
  line-height: 30px;
  font-size: 18px;
  border-radius: 3px;
  text-transform: none;
  color: #ffffff;
  padding: 8px 16px;
  letter-spacing: unset;
  &:hover {
    color: #ffffff;
    background: transparent;
  }
`

const Title = () =>
  <Link to="/" exact>
    <TitleButton>AI Tweet</TitleButton>
  </Link>

export default Title
