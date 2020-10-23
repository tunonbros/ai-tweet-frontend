import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "./styles.js";


const dashboardRoutes = [];

const useStyles = makeStyles(styles);

const Home = props => {
  const classes = useStyles();
  const { ...rest } = props;

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
                Find out thanks to the GPT-3 powered AI
              </h4>
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
                <form>
                  <GridContainer>
                    <CustomInput
                      labelText="@Username"
                      id="message"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    <GridItem xs={12} sm={12} md={4}>
                      <Button color="primary">Generate tweet</Button>
                    </GridItem>
                  </GridContainer>
                </form>
              </GridItem>
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
