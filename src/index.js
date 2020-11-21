import React from "react"
import ReactDOM from "react-dom"
import ReactGA from 'react-ga'
import { createBrowserHistory } from "history"
import { Router, Route, Switch } from "react-router-dom"
import CookieConsent from "react-cookie-consent"

import "assets/scss/material-kit-react.scss?v=1.9.0"

// pages for this product
import Home from "views/Home.js"
import Shared from "views/Shared.js"
import MetaTags from "myComponents/MetaTags"

var hist = createBrowserHistory()


const initializeAnalytics = () => {
  // ReactGA.initialize('G-BGXBJNNS52') // It's too new and it's not yet supported
  ReactGA.initialize('UA-181282216-1')
  ReactGA.pageview(window.location.pathname + window.location.search)
}

ReactDOM.render(
  <>
    <MetaTags
      title="AI Tweet"
      description="Find out what any Twitter user is going to tweet, thanks to our AI predictions."
      // image=""
    />
    <Router history={hist}>
      <Switch>
        <Route path="/:tweetId" component={Shared} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
    <CookieConsent
      enableDeclineButton
      onAccept={initializeAnalytics}
      style={{ background: "#555555" }}
      buttonStyle={{ background: "#9c27b0", color: "#ffffff", fontSize: "13px" }}
      declineButtonStyle={{ background: "#555555", color: "#888888", fontSize: "10px" }}
    >
      This website uses cookies to enhance the user experience.
    </CookieConsent>
  </>, document.getElementById("root")
)
