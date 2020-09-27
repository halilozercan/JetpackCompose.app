import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import JetpackComposeAppFooter from "../core/JetpackComposeAppFooter";
import React from "react";
import TweetEmbed from "react-tweet-embed";
import Typography from "@material-ui/core/Typography";

export default function QuickBitesComponent() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Grid container justify="center" spacing={2}>
            <Grid key={"header"} item xs={12} md={4}>
              <Typography className={classes.pageHeader} align="center">
                Compose Quick Bites
              </Typography>
              <Typography className={classes.pageSubheader} align="center">
                Learn more about the core concepts of Jetpack Compose right from
                your Twitter feed!
              </Typography>
            </Grid>
          </Grid>
          <Grid container justify="center" spacing={2} md>
            <Grid key={"issue1"} item xs={12} md={4}>
              <Typography className={classes.issueTitle} align="center">
                Issue #1: What is declarative UI?
              </Typography>
              <TweetEmbed id="1304904120868823040" />
            </Grid>
            <Grid key={"issue2"} item xs={12} md={4}>
              <Typography className={classes.issueTitle} align="center">
                Issue #2: What is this @Composable thing?
              </Typography>
              <TweetEmbed id="1307528586174160896" />
            </Grid>
          </Grid>
          <Grid container justify="center" spacing={2} md>
            <Grid key={"issue3"} item xs={12} md={4}>
              <Typography className={classes.issueTitle} align="center">
                Issue #3: Why should you care about recomposition?
              </Typography>
              <TweetEmbed id="1310042895546609664" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div className={classes.footer}>
        <JetpackComposeAppFooter />
      </div>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    marginTop: "5%",
  },
  pageHeader: {
    fontSize: 30,
    fontFamily: "Playfair Display",
    marginBottom: "1%",
    color: "#78C257",
  },
  pageSubheader: {
    fontSize: 20,
    fontWeight: "lighter",
    fontFamily: "Roboto",
  },
  issueTitle: {
    fontSize: 20,
    fontFamily: "Playfair Display",
    marginBottom: "2%",
    marginTop: "5%",
  },
  footer: {
    marginTop: "2%",
    height: "20vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#000000",
    marginBottom: "0px",
    bottom: "0px",
  },
});
