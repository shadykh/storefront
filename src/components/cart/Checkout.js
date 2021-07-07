//This file is formatted by Prettier-Code formatter

/**
 *  Martial-ui imports, from => https://material-ui.com
 */
import {
  Button,
  List,
  ListItem,
  makeStyles,
  Paper,
  Typography,
  TextField,
  GridList,
} from "@material-ui/core";

// this import for the Delete icon
import DeleteForeverTwoToneIcon from "@material-ui/icons/DeleteForeverTwoTone";

/**
 *  React imports.
 */
import { connect } from "react-redux";
import { Link } from "react-router-dom";

/**
 *  import a functionality to the Checkout, to add or delete inventory.
 */
import { putRemoteData } from "../../store/products";

// use styles for the style of Checkout.
const useStyles = makeStyles({
  root: {
    maxWidth: "90vw",
    padding: "15px",
    margin: "20px auto",
  },
  media: {
    paddingTop: "56.25%",
    height: 140,
  },
  link: {
    textDecoration: "none",
  },
  remove: {
    justifySelf: "right",
  },
  li: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    border: "1px solid beige",
    boxShadow: "3px 3px #c1c1c1",
    padding: "5px 0",
    margin: "10px 0",
    padding: "20px 10px",
  },
  checkout: {
    width: "30%",
    justifyContent: "center",
    marginLeft: "35%",
  },
  total: {
    textAlign: "right",
    marginTop: "16px",
  },
  pa: {
    display: "block",
    width: "25%",
    textAlign: "center",
  },
  pa5: {
    width: "127px",
  },
  gridList: {
    width: 150,
    height: 400,
  },
  gridList2: {
    width: 150,
    height: 400,
  },
});

/**
 *  Checkout component.
 */

function Checkout(props) {
  const classes = useStyles();

  const total = props.cartReducer.cart.reduce((acc, val) => {
    return acc + val.price;
  }, 0);

  const thanks = () => {
    alert("Thank you for your purchase!");
  };

  return (
    <Paper className={classes.root}>
      <Typography variant="h5">Order Summary</Typography>
      <List>
        {props.cartReducer.cart.map((item) => {
          return (
            <ListItem
              className={classes.li}
              key={`${item._id}:${item.inventory}`}
            >
              <Link className={classes.link} to={`/products/${item._id}`}>
                <Button /*variant="outlined"*/ color="primary">
                  <Typography className={classes.pa5} variant="body1">
                    {item.name}
                  </Typography>
                </Button>
              </Link>
              <Typography className={classes.pa} variant="body2">
                {item.tags}
              </Typography>
              <Typography className={classes.pa} variant="body1">
                ${item.price}
              </Typography>
              <Button
                className="remove"
                size="small"
                variant="outlined"
                color="secondary"
                onClick={() => props.removeFromCart(item)}
              >
                Remove <DeleteForeverTwoToneIcon />
              </Button>
            </ListItem>
          );
        })}
      </List>
      <Typography className={classes.total} variant="h6">
        Total: ${total.toFixed(2)}
      </Typography>
      <div
        style={{ display: "grid", gridTemplateColumns: "auto auto auto auto" }}
      >
        <GridList className={classes.gridList} cols={1}>
          <form noValidate autoComplete="off" className={classes.form}>
            <Typography style={{ margin: "45px 0 5px 15px" }} variant="body1">
              Billing Address
            </Typography>
            <TextField
              style={{ marginLeft: "15px" }}
              id="full-name"
              label="Full Name"
            />
            <TextField
              style={{ marginLeft: "15px" }}
              id="address"
              label="Address"
            />
            <TextField style={{ marginLeft: "15px" }} id="city" label="City" />
            <TextField
              style={{ marginLeft: "15px" }}
              id="state"
              label="State"
            />
            <TextField style={{ marginLeft: "15px" }} id="zip" label="Zip" />
          </form>
        </GridList>

        <GridList className={classes.gridList2} cols={1}>
          <form noValidate autoComplete="off" className={classes.form}>
            <Typography style={{ margin: "45px 0 5px 0" }} variant="body1">
              Payment Details
            </Typography>
            <TextField id="credit-card" label="Credit Card #" />
            <TextField
              id="expiration"
              label="Expiration"
              type="date"
              defaultValue="mm/dd/yyyy"
              InputLabelProps={{
                shrink: true,
              }}
              style={{ width: 140 }}
            />
            <TextField id="cvv" label="CVV" />
          </form>
        </GridList>
      </div>
      <Button
        className={classes.checkout}
        variant="contained"
        color="primary"
        onClick={thanks}
      >
        Checkout
      </Button>
    </Paper>
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
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
