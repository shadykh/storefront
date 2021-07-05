import React from 'react';
import { connect } from 'react-redux';

import { AppBar, Button, Grid, makeStyles, withStyles, Toolbar, Typography, Badge, IconButton } from '@material-ui/core';
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';


function Header(props) {

  const useStyles = makeStyles({
    header: {
      background: "#495cce",
    },
    logo: {
      color: 'white',
    },
    cart: {
      textAlign: "right",
      color: 'white'
    }
  })
  const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 2px',
    },
  }))(Badge);
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
            <Grid item xs className={classes.cart}>
              <IconButton aria-label="cart">
                <StyledBadge className={classes.cart} badgeContent={props.cartReducer.cart.length} showZero color="primary">
                  <ShoppingCartTwoToneIcon />
                </StyledBadge>
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  )
}

const mapStateToProps = state => ({
  cartReducer: state.cartReducer
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
