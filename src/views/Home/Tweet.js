import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import styles from "./styles.js"
import styled from 'styled-components'

import Card from "components/Card/Card.js"
import CardHeader from "components/Card/CardHeader.js"
import Loader from "./../MyComponents/Loader"

const RibbonContainer = styled.div`
  position: relative;
  margin-top: -10px;
  bottom: 0px;
  overflow: hidden;
  min-height: 80px;
  border-radius: 6px;
`

const RibbonContainerInner = styled.div`
  padding: 2em;
`

const Ribbon = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 0 2em;
  text-align: center;
  transform:
    translateX(72%) rotate(-45deg) translateY(-180%);
  transform-origin: bottom right;
  background: linear-gradient(60deg, #ffa726, #fb8c00);
  color: #ffffff;
`

const useStyles = makeStyles(styles)

const Tweet = props => {
  const classes = useStyles()

  return (
    <>
      <Card>
        <CardHeader color="info" className={classes.cardHeader}>
          @{props.username}
        </CardHeader>
        <RibbonContainer>
          <RibbonContainerInner>
            {props.text ? props.text : <Loader/>}
          </RibbonContainerInner>
          <Ribbon>
            AI generated&nbsp;<br/>tweet&nbsp;
          </Ribbon>
        </RibbonContainer>
      </Card>
      <br/>
    </>
  )
}

export default Tweet
