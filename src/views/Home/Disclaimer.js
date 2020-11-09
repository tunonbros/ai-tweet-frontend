import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import styles from "./styles.js"

import Card from "components/Card/Card.js"
import CardHeader from "components/Card/CardHeader.js"
import CardBody from "components/Card/CardBody.js"

const useStyles = makeStyles(styles)

const Disclaimer = () => {
  const classes = useStyles()

  return (
    <>
      <Card>
        <CardHeader color="warning" className={classes.cardHeader}>
          Disclaimer
        </CardHeader>
        <CardBody>
          All the tweets shown in this website are simulations. They are generated inspired by real twitter users and tweets, but they don't represent any real user speech.
        </CardBody>
      </Card>
      <br/>
    </>
  )
}

export default Disclaimer
