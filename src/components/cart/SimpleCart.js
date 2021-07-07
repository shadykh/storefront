//This file is formatted by Prettier-Code formatter

/**
 *  Martial-ui imports, from => https://material-ui.com
 */
import {
  Grid,
  makeStyles,
  Card,
  CardContent,
  Typography,
  IconButton,
} from "@material-ui/core";

// this import for the Delete icon
import DeleteForeverTwoToneIcon from "@material-ui/icons/DeleteForeverTwoTone";

/**
 *  react-redux to make the connection , from => https://www.npmjs.com/package/react-redux
 */
import { connect } from "react-redux";

/**
 *  import a functionality to the SimpleCart, to add or delete inventory.
 */
import { putRemoteData } from "../../store/products";

/**
 *  import ability to visit other endpoint, here to enter the product details
 */
import { Link } from "react-router-dom";

// use styles for the style of SimpleCart.
const useStyles = makeStyles({
  cart: {
    zIndex: 100,
    position: "fixed",
    right: "16px",
    top: "64px",
    width: "150px",
    height: "300px",
  },
  scroll: {
    overflow: "scroll",
    zIndex: 100,
    position: "fixed",
    right: "16px",
    top: "64px",
    width: "150px",
    height: "200px",
  },
  show: {
    display: "block",
  },
  hide: {
    display: "none",
  },
  font: {
    display: "flex",
    textDecoration: "none",
  },
});

/**
 *  SimpleCart component.
 */

function SimpleCart(props) {
  const total = props.cartReducer.cart.reduce((acc, val) => {
    return acc + val.price;
  }, 0);

  const classes = useStyles();
  return (
    <div
      className={
        props.cartReducer.cart.length === 0
          ? `${classes.hide}`
          : `${classes.show}`
      }
    >
      <Grid item xs className={classes.cart}>
        <Card
          raised
          className={
            props.cartReducer.cart.length >= 5
              ? `${classes.scroll}`
              : `${classes.cart}`
          }
        >
          <CardContent>
            {props.cartReducer.cart.map((item, idx) => {
              {
                console.log("item", item);
              }
              return (
                <>
                  <Typography
                    key={idx}
                    className={classes.font}
                    variant="body2"
                  >
                    <Link className={classes.font} to={`/products/${item._id}`}>
                      {item.name}
                    </Link>
                    <IconButton
                      color="secondary"
                      edge="end"
                      aria-label="delete"
                      onClick={() => props.removeFromCart(item)}
                    >
                      <DeleteForeverTwoToneIcon />
                    </IconButton>
                  </Typography>
                </>
              );
            })}
            <Typography
              className={classes.total}
              color="primary"
              variant="subtitle1"
            >
              {" "}
              Total: ${total.toFixed(2)}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);
