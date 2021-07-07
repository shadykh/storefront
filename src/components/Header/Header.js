//This file is formatted by Prettier-Code formatter

/**
 *  Martial-ui imports, from => https://material-ui.com
 */
import {
  AppBar,
  Button,
  Grid,
  makeStyles,
  withStyles,
  Toolbar,
  Typography,
  Badge,
  IconButton,
} from "@material-ui/core";

// this import for the ShoppingCart icon
import ShoppingCartTwoToneIcon from "@material-ui/icons/ShoppingCartTwoTone";

/**
 *  React imports.
 */

import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

/**
 *  Menu  component import.
 */
import Menu from "./Menu";

// use styles for the style of Checkout.
const useStyles = makeStyles({
  header: {
    background: "#495cce",
  },
  logo: {
    color: "white",
  },
  cart: {
    textAlign: "right",
    color: "white",
  },
  link: {
    textDecoration: "none",
  },
});

/**
 *  Header component.
 */

function Header(props) {
  const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 2px",
    },
  }))(Badge);

  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar className={classes.header}>
          <Grid container>
            <Grid item xs>
              <Button>
                <Link to={`/`} className={classes.link}>
                  <Typography className={classes.logo} variant="h5">
                    Storefront
                  </Typography>
                </Link>
              </Button>
            </Grid>
            <Grid item xs className={classes.cart}>
              <Link to={`/cart`} className={classes.link}>
                <IconButton aria-label="cart">
                  <StyledBadge
                    className={classes.cart}
                    badgeContent={props.cartReducer.cart.length}
                    showZero
                    color="primary"
                  >
                    <ShoppingCartTwoToneIcon />
                  </StyledBadge>
                </IconButton>
              </Link>
              <Menu />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}

// map the state to the props
const mapStateToProps = (state) => ({
  cartReducer: state.cartReducer,
});

// map the dispatch to the props
const mapDispatchToProps = {};

// export the component
export default connect(mapStateToProps, mapDispatchToProps)(Header);
