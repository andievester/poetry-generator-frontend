import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import Form from "./components/Form/Form";
import Poems from "./components/Poems/Poems";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Your Poem of the Day
        </Typography>
      </AppBar>
        <Container >
          <Grid
            container
            justifyContent="space-around"
            alignContent="center"
            spacing={1}
          >
            <Grid item sm={4}>
              <Form />
            </Grid>
            <Grid item sm={7} className={classes.poem}>
              <Poems />
            </Grid>
          </Grid>
        </Container>
    </Container>
  );
};

export default App;
