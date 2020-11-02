import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import styles from "./styles.js"

import Card from "components/Card/Card.js"
import CardHeader from "components/Card/CardHeader.js"
import CardBody from "components/Card/CardBody.js"

const useStyles = makeStyles(styles)

const Tweet = props => {
  const classes = useStyles()

  return (
    <>
      <Card>
        <CardHeader color="info" className={classes.cardHeader}>
          @{props.username}
        </CardHeader>
        <CardBody>
          {props.text}
        </CardBody>
      </Card>
      <br/>
    </>
  )
}

export default Tweet
