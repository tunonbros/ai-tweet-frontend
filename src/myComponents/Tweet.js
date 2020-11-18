import React from "react"
import styled from 'styled-components'

import Button from "components/CustomButtons/Button.js"
import Card from "components/Card/Card.js"
import CardHeader from "components/Card/CardHeader.js"
import CardBody from "components/Card/CardBody.js"
import Loader from "myComponents/Loader"

const RibbonContainer = styled.div`
  position: relative;
  margin-top: -10px;
  bottom: 0px;
  overflow: hidden;
  min-height: 80px;
  border-radius: 6px;
`

const RibbonContainerInner = styled.div`
  padding: 2em 3.5em 2em 2em;
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

const Tweet = props => {
  return (
    props.error ?
      <>
        <Card>
          <CardHeader color="danger">
            <span style={{verticalAlign: 'middle'}}>
              Oops, something unexpected happened
            </span>
            {props.dismiss &&
              <Button
                style={{float: 'right', height: '28px', margin: '0px'}}
                onClick={props.dismiss}
                simple>
                  &#x2716;
              </Button>
            }
          </CardHeader>
          <CardBody>
            {props.error}
          </CardBody>
        </Card>
        <br/>
      </>
    :
      <>
        <Card>
          <CardHeader color="info">
            @{props.username}
          </CardHeader>
          <RibbonContainer>
            <RibbonContainerInner>
              {props.tweet ? props.tweet : <Loader/>}
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
