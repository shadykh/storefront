//This file is formatted by Prettier-Code formatter

/**
 *  Martial-ui imports, from => https://material-ui.com
 */

import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

// this import for the [AddCircle, OpenInNew] icons
import AddCircleTwoToneIcon from "@material-ui/icons/AddCircleTwoTone";
import OpenInNewTwoToneIcon from "@material-ui/icons/OpenInNewTwoTone";

/**
 *  React imports.
 */
import { connect } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

/**
 *  import the functionality to the Products component
 */
import { getRemoteData, putRemoteData } from "../../store/products";

// use styles for the style of Checkout.
const useStyles = makeStyles({
  root: {
    maxWidth: "100vw",
    padding: "8px",
    margin: "auto",
  },
  card: {
    height: "500px",
    display: "flex",
    flexDirection: "column",
    padding: "5px",
  },
  media: {
    margin: "auto",
    height: 200,
    width: 200,
  },
  pa: {
    padding: "5px 0",
    margin: "5px 0",
  },
  po: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-around",
    height: "220px",
  },
  link: {
    textDecoration: "none",
  },
});

/**
 *  Products component.
 */

const Products = (props) => {
  const classes = useStyles();

  const fetchProducts = (e) => {
    e && e.preventDefault();
    props.get();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("props.productReducer", props.productReducer);
  console.log(
    "props.categoryReducer.activeCategory",
    props.categoryReducer.activeCategory
  );
  if (props.categoryReducer.activeCategory === "all") {
    return (
      <Grid className={classes.root} container spacing={4}>
        {props.productReducer.products
          .filter((product) => product.inventory > 0)
          .map((product) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={5} key={product.name}>
                <Card variant="outlined" className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={product.image}
                      title={product.name}
                    />
                    <CardContent className={classes.po}>
                      <Typography className={classes.pa} variant="h6">
                        {product.name}
                      </Typography>
                      <Typography
                        className={classes.pa}
                        color="textSecondary"
                        variant="inherit"
                        component="p"
                      >
                        {product.tags}
                      </Typography>
                      <Typography
                        className={classes.pa}
                        color="textSecondary"
                        variant="inherit"
                        component="p"
                      >
                        ${product.price}
                      </Typography>
                      <Typography
                        className={classes.pa}
                        color="textSecondary"
                        variant="inherit"
                        component="p"
                      >
                        {product.inventory} pieces available
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      color="primary"
                      onClick={() => props.addToCart(product)}
                    >
                      Add to cart <AddCircleTwoToneIcon />{" "}
                    </Button>
                    <Link
                      to={`/products/${product._id}`}
                      className={classes.link}
                    >
                      <Button color="primary">
                        Details <OpenInNewTwoToneIcon />{" "}
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    );
  } else {
    return (
      <Grid className={classes.root} container spacing={4}>
        {props.productReducer.products
          .filter(
            (product) =>
              product.category ===
              (props.categoryReducer.activeCategory
                ? props.categoryReducer.activeCategory.name
                : null)
          )
          .filter((product) => product.inventory > 0)
          .map((product) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={5} key={product.name}>
                <Card variant="outlined" className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={product.image}
                      title={product.name}
                    />
                    <CardContent className={classes.po}>
                      <Typography className={classes.pa} variant="h6">
                        {product.name}
                      </Typography>
                      <Typography
                        className={classes.pa}
                        color="textSecondary"
                        variant="inherit"
                        component="p"
                      >
                        {product.tags}
                      </Typography>
                      <Typography
                        className={classes.pa}
                        color="textSecondary"
                        variant="inherit"
                        component="p"
                      >
                        ${product.price}
                      </Typography>
                      <Typography
                        className={classes.pa}
                        color="textSecondary"
                        variant="inherit"
                        component="p"
                      >
                        {product.inventory} pieces available
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      color="primary"
                      onClick={() => props.addToCart(product)}
                    >
                      Add to cart <AddCircleTwoToneIcon />
                    </Button>
                    <Link
                      to={`/products/${product._id}`}
                      className={classes.link}
                    >
                      <Button color="primary">
                        Details <OpenInNewTwoToneIcon />{" "}
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    );
  }
};

// map the state to the props
const mapStateToProps = (state) => ({
  productReducer: state.productReducer,
  categoryReducer: state.categoryReducer,
});

// map the dispatch to the props
const mapDispatchToProps = (dispatch) => ({
  addToCart: (product) => dispatch(putRemoteData(product, true)),
  get: () => dispatch(getRemoteData()),
});

// export the component
export default connect(mapStateToProps, mapDispatchToProps)(Products);
