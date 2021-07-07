//This file is formatted by Prettier-Code formatter

/**
 *  Martial-ui imports, from => https://material-ui.com
 */
import {
  Typography,
  makeStyles,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";

// this import for the [MoreVert, Delete, Exit, Close] icons
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DeleteForeverTwoToneIcon from "@material-ui/icons/DeleteForeverTwoTone";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import CloseTwoToneIcon from "@material-ui/icons/CloseTwoTone";

/**
 *  React imports.
 */
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

/**
 *  import a functionality to the SimpleCart, to add or delete inventory.
 */
import { putRemoteData } from "../../store/products";

// use styles for the style of SimpleCart.
const ITEM_HEIGHT = 20;
const useStyles = makeStyles({
  li: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

/**
 *  LongMenu component.
 */

function LongMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();

  const total = props.cartReducer.cart.reduce((acc, val) => {
    return acc + val.price;
  }, 0);

  return (
    <>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 8,
            width: "40ch",
          },
        }}
      >
        <Typography className={classes.li} color="primary" variant="subtitle1">
          Checkout
          <IconButton
            color="primary"
            edge="end"
            aria-label="delete"
            onClick={handleClose}
          >
            <Link to={`/cart`} className={classes.link}>
              <ExitToAppIcon />{" "}
            </Link>
          </IconButton>
        </Typography>
        {console.log(
          "props.cartReducer.cart.length",
          props.cartReducer.cart.length
        )}
        {props.cartReducer.cart.map((option) => (
          <MenuItem key={option._id}>
            {option.name}
            <IconButton
              color="secondary"
              edge="end"
              aria-label="delete"
              onClick={() => props.removeFromCart(option)}
            >
              <DeleteForeverTwoToneIcon />
            </IconButton>
          </MenuItem>
        ))}
        <Typography className={classes.li} color="primary" variant="subtitle1">
          {" "}
          Total: ${total.toFixed(2)}
          <IconButton
            color="secondary"
            edge="end"
            aria-label="delete"
            onClick={handleClose}
          >
            <CloseTwoToneIcon />
          </IconButton>
        </Typography>
      </Menu>
    </>
  );
}

// map the state to the props
const mapStateToProps = (state) => ({
  cartReducer: state.cartReducer,
});

// map the dispatch to the props
const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (product) => dispatch(putRemoteData(product, false)),
});

// export the component
export default connect(mapStateToProps, mapDispatchToProps)(LongMenu);
