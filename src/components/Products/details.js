//This file is formatted by Prettier-Code formatter

/**
 *  Martial-ui imports, from => https://material-ui.com
 */
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  Avatar,
} from "@material-ui/core";

// this import for the expand icon
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

/**
 *  React imports.
 */
import { useEffect } from "react";
import { connect } from "react-redux";

/**
 *  import a functionality to the ProductDetails, to add or delete inventory.
 */
import { getRemoteData, putRemoteData } from "../../store/products";

// use styles for the style of ProductDetails.
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100vw",
    padding: "6px",
    margin: "auto",
    justifyContent: "center",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "8px",
  },
  media: {
    margin: "auto",
    height: 450,
    width: 450,
  },
  link: {
    textDecoration: "none",
    textDecorationLine: "none",
  },
  add: {
    width: "100%",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    margin: "15px 0 15px",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  div: {
    margin: "auto",
    display: "flex",
    padding: "20px 0",
    margin: "10px 0",
    flexDirection: "column",
    alignItems: "center",
    width: "80%",
  },
  de: {
    padding: "10px 0",
    margin: "10px 0",
  },
  rev: {
    display: "flex",
    alignItems: "center",
  },
  do: {
    padding: "10px 0",
    margin: "10px 0",
    width: "100%",
  },
}));


/**
 *  ProductDetails component.
 */

function ProductDetails(props) {

  const fetchProducts = (e) => {
    e && e.preventDefault();
    props.get();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const classes = useStyles();

  return (
    <>
      <Grid className={classes.root} container spacing={4}>
        {props.productReducer.products
          .filter((product) => props.match.params.id === product._id)
          .map((product) => {
            return (
              <div className={classes.div}>
                <Grid item xs={8}>
                  <Card className={classes.card}>
                    <Typography variant="h4">{product.name}</Typography>
                    <Typography variant="body1">{product.tags}</Typography>
                    <CardMedia
                      className={classes.media}
                      image={product.image}
                      title={product.name}
                    />
                    <CardContent>
                      <Typography>
                        {product.inventory} pieces available
                      </Typography>
                      <Typography>${product.price}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        className={classes.add}
                        color="primary"
                        variant="contained"
                        onClick={() => props.addToCart(product)}
                      >
                        Add to the cart
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid className={classes.div}>
                  <div className={classes.div}>
                    <Typography variant="h5">Related Items</Typography>
                    <Grid container spacing={4} sm={20}>
                      <Grid item xs={4}>
                        <Paper className={classes.paper}>
                          {
                            props.productReducer.products[
                              Math.floor(
                                Math.random() *
                                  (props.productReducer.products.length - 0) +
                                  0
                              )
                            ].name
                          }
                        </Paper>
                      </Grid>
                      <Grid item xs={4}>
                        <Paper className={classes.paper}>
                          {
                            props.productReducer.products[
                              Math.floor(
                                Math.random() *
                                  (props.productReducer.products.length - 0) +
                                  0
                              )
                            ].name
                          }
                        </Paper>
                      </Grid>
                      <Grid item xs={4}>
                        <Paper className={classes.paper}>
                          {
                            props.productReducer.products[
                              Math.floor(
                                Math.random() *
                                  (props.productReducer.products.length - 0) +
                                  0
                              )
                            ].name
                          }
                        </Paper>
                      </Grid>
                    </Grid>

                    <Typography variant="h5">Product Details</Typography>
                    <Accordion className={classes.de}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography className={classes.heading}>
                          Specifications
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>{product.description}</Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion className={classes.do}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                      >
                        <Typography className={classes.heading}>
                          User Reviews
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography className={classes.rev}>
                          <Avatar
                            alt="RANDOM"
                            src="https://pbs.twimg.com/profile_images/966600235672719360/tTbBJLfS.jpg"
                          />
                          Great product..will purchase again!
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </Grid>
              </div>
            );
          })}
      </Grid>
    </>
  );
}

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
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
