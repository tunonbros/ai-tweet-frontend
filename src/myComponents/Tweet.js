import React, { useState } from "react"
import styled from 'styled-components'
import ShareIcon from '@material-ui/icons/Share'
import CloseIcon from '@material-ui/icons/Close'
import FileCopyIcon from '@material-ui/icons/FileCopy'

import Button from "components/CustomButtons/Button.js"
import Card from "components/Card/Card.js"
import CardHeader from "components/Card/CardHeader.js"
import CardBody from "components/Card/CardBody.js"
import Loader from "myComponents/Loader"
import { handleErrors } from "myComponents/functions"

const RibbonContainer = styled.div`
  position: relative;
  margin-top: -11px;
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

const CopyInput = styled.input`
  height: 25px;
  width: 170px;
  float: right;
  border-radius: 6px;
  border-color: white;
`

const Tweet = props => {
  const [sharing, setSharing] = useState(false)
  const [tweetId, setTweetId] = useState(props.tweetId)

  // Generate tweet handler
  const shareTweet = () => {
    setSharing(true)
    const sharedUrl = process.env.REACT_APP_API_ENDPOINT + process.env.REACT_APP_SHARED_URL
    const data = JSON.stringify({
      tweet: props.tweet,
      username: props.username
    })
    fetch(sharedUrl, {
      method: 'POST',
      body: data
    }).then(handleErrors)
      .then(response => response.json())
      .then(result => setTweetId(result.tweetId),
            () => setTweetId('Error: could not share'))
  }

  const copyTweet = () => {
    // TODO: Copied! message
    navigator.clipboard.writeText(process.env.REACT_APP_FRONT_DOMAIN + '/' + tweetId)
  }

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
                style={{float: 'right', height: '25px', margin: '0px'}}
                onClick={props.dismiss}
                simple>
                  <CloseIcon/>
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
            <span style={{verticalAlign: 'middle', float: 'left'}}>
              @{props.username}
            </span>
            {tweetId ?
              <>
                <CopyInput value={process.env.REACT_APP_FRONT_DOMAIN + '/' + tweetId}/>
                <Button
                  style={{float: 'right', height: '25px', width: '25px', margin: '0px'}}
                  onClick={copyTweet}
                  simple
                >
                  <FileCopyIcon/>
                </Button>
              </>
            :
              <Button
                style={{float: 'right', height: '25px', margin: '0px'}}
                onClick={shareTweet}
                simple
                disabled={sharing || !props.tweet}
              >
                <ShareIcon/>
              </Button>
            }
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
