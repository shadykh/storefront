import { AppBar, Button, Grid, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

function Header() {

  const useStyles = makeStyles({
    header: {
      background: "#495cce",
    },
    logo: {
      color:'white',
    }
  })
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar className={classes.header} >
          <Grid container>
            <Grid item xs>
              <Button >
                <Typography className={classes.logo} variant="h5">Storefront</Typography>
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  )
}

export default Header; 