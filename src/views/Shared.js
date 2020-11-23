import React, { useState, useEffect } from "react"
import { useParams } from "react-router";
import { makeStyles } from "@material-ui/core/styles"

// core components
import Header from "components/Header/Header.js"
import Footer from "components/Footer/Footer.js"
import GridContainer from "components/Grid/GridContainer.js"
import GridItem from "components/Grid/GridItem.js"
import HeaderLinks from "components/Header/HeaderLinks.js"
import Parallax from "components/Parallax/Parallax.js"

import styles from "myComponents/styles.js"
import Tweet from "myComponents/Tweet"
import Title from "myComponents/Title"
import Disclaimer from "myComponents/Disclaimer"
import { handleErrors } from "myComponents/functions"

const dashboardRoutes = []
const useStyles = makeStyles(styles)

const Home = props => {
  const { tweetId } = useParams()
  const [tweet, setTweet] = useState({})
  const [error, setError] = useState("")
  const classes = useStyles()
  const { ...rest } = props

  useEffect(() => {
    const sharedUrl = process.env.REACT_APP_API_ENDPOINT + process.env.REACT_APP_SHARED_URL + "/" + tweetId
    fetch(sharedUrl)
      .then(handleErrors)
      .then(response => response.json())
      .then(result => setTweet(result),
            error => setError(error.toString()))
  }, [tweetId])

  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        leftLinks={<Title/>}
        rightLinks={<HeaderLinks/>}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <Tweet
                username={tweet.username}
                tweet={tweet.tweet}
                tweetId={tweetId}
                error={error}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <Disclaimer/>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <Footer />
    </div>
  )
}

export default Home
