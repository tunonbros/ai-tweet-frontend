import React, { useState } from "react"
import classNames from "classnames"
import { makeStyles } from "@material-ui/core/styles"

// core components
import Header from "components/Header/Header.js"
import Footer from "components/Footer/Footer.js"
import GridContainer from "components/Grid/GridContainer.js"
import GridItem from "components/Grid/GridItem.js"
import CustomInput from "components/CustomInput/CustomInput.js"
import Button from "components/CustomButtons/Button.js"
import HeaderLinks from "components/Header/HeaderLinks.js"
import Parallax from "components/Parallax/Parallax.js"

import styles from "myComponents/styles.js"
import Tweet from "myComponents/Tweet"
import Disclaimer from "myComponents/Disclaimer"

const dashboardRoutes = []
const useStyles = makeStyles(styles)

const Home = props => {
  const [tweets, setTweets] = useState([])
  const [username, setUsername] = useState("")
  const classes = useStyles()
  const { ...rest } = props

  // Tweets functions
  const addTweet = (username) => {
    const newTweet = {
      tweetId: tweets.length,
      text: '',
      error: '',
      username
    }
    setTweets(oldTweets => [newTweet, ...oldTweets])
    return newTweet.tweetId
  }

  const removeTweet = (tweetId) =>
    setTweets(oldTweets => oldTweets.filter(t => t.tweetId !== tweetId))

  const setTweetProperty = (tweetId, key, value) =>
    setTweets(oldTweets => oldTweets.map(t => t.tweetId === tweetId ? { ...t, [key]: value } : t))

  // Generate tweet handler
  const submitUsername = (event) => {
    const tweetId = addTweet(username)
    const generateUrl = process.env.REACT_APP_API_ENDPOINT + process.env.REACT_APP_GENERATE_URL
    const data = JSON.stringify({
      username: username
    })
    fetch(generateUrl, {
      method: 'POST',
      body: data
    }).then(res => res.json())
      .then((result) => setTweetProperty(tweetId, 'text', result.text),
            (error) => setTweetProperty(tweetId, 'error', error.toString()))

    // Avoid that form submission reloads the page
    event.preventDefault()
    return false
  }

  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="AI Tweet"
        rightLinks={<HeaderLinks />}
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
              <h1 className={classes.title}>What will be their next tweet?</h1>
              <h4>
                Find out thanks to the AI
              </h4>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <Disclaimer/>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <div className={classes.section}>
            <GridContainer justify="center">
              <GridItem cs={12} sm={12} md={8}>
                <h2 className={classes.innerTitle}>Enter a twitter username</h2>
                <h4 className={classes.description}>
                  Let's see what our AI predicts as his/her next tweet
                </h4>
                <form onSubmit={submitUsername}>
                  <GridContainer>
                    <CustomInput
                      labelText="@Username"
                      id="message"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        value: username,
                        onChange: e => setUsername(e.target.value)
                      }}
                    />
                    <GridItem xs={12} sm={12} md={4}>
                      <Button color="primary" onClick={submitUsername}>Generate tweet</Button>
                    </GridItem>
                  </GridContainer>
                </form>
              </GridItem>
            </GridContainer>
          </div>
          <div className={classes.description}>
            <GridContainer justify="flex-start">
              {tweets.map((t, idx) => (
                <GridItem key={idx} cs={12} sm={12} md={6}>
                  <Tweet
                    username={t.username}
                    text={t.text}
                    error={t.error}
                    dismiss={() => removeTweet(t.tweetId)}
                  />
                </GridItem>
              ))}
            </GridContainer>
          </div>
          <br/>
          <br/>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
