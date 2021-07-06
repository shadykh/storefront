import { connect } from 'react-redux';
import { useEffect } from 'react';

import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';
import OpenInNewTwoToneIcon from '@material-ui/icons/OpenInNewTwoTone';

import { getRemoteData, putRemoteData } from '../../store/products';



const Products = props => {

    const useStyles = makeStyles({
        root: {
            maxWidth: "100vw",
            padding: "8px",
            margin: "auto"
        },
        card: {
            height: '500px',
            display: 'flex',
            flexDirection: 'column',
            padding: '5px',
        },
        media: {
            margin: 'auto',
            height: 200,
            width: 200,

        },
        pa: {
            padding: "5px 0",
            margin: "5px 0",
        },
        po: {
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            height: '220px'
        }
    });

    const classes = useStyles();

    const fetchProducts = (e) => {
        e && e.preventDefault();
        props.get();
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    console.log('props.productReducer', props.productReducer);
    console.log('props.categoryReducer.activeCategory', props.categoryReducer.activeCategory);
    if (props.categoryReducer.activeCategory === 'all') {
        return (
            <Grid className={classes.root} container spacing={4} >
                {props.productReducer.products
                    .filter(product => product.inventory > 0)
                    .map(product => {
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
                                            <Typography className={classes.pa} variant="h6">{product.name}</Typography>
                                            <Typography className={classes.pa} color="textSecondary" variant="inherit" component="p">{product.tags}</Typography>
                                            <Typography className={classes.pa} color="textSecondary" variant="inherit" component="p">${product.price}</Typography>
                                            <Typography className={classes.pa} color="textSecondary" variant="inherit" component="p">{product.inventory} pieces available</Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button color="primary" onClick={() => props.addToCart(product)}>Add to cart <AddCircleTwoToneIcon /> </Button>
                                        <Button color="primary">Details <OpenInNewTwoToneIcon /> </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    })}
            </Grid>
        )
    } else {
        return (
            <Grid className={classes.root} container spacing={4} >
                {props.productReducer.products
                    .filter(product => product.category === (props.categoryReducer.activeCategory ? props.categoryReducer.activeCategory.name : null))
                    .filter(product => product.inventory > 0)
                    .map(product => {
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
                                            <Typography className={classes.pa} variant="h6">{product.name}</Typography>
                                            <Typography className={classes.pa} color="textSecondary" variant="inherit" component="p">{product.tags}</Typography>
                                            <Typography className={classes.pa} color="textSecondary" variant="inherit" component="p">${product.price}</Typography>
                                            <Typography className={classes.pa} color="textSecondary" variant="inherit" component="p">{product.inventory} pieces available</Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button color="primary" onClick={() => props.addToCart(product)}>Add to cart <AddCircleTwoToneIcon /></Button>
                                        <Button color="primary">Details<OpenInNewTwoToneIcon /> </Button>
                                    </CardActions>

                                </Card>
                            </Grid>
                        )
                    })}
            </Grid>
        )
    }

}

const mapStateToProps = state => ({
    productReducer: state.productReducer,
    categoryReducer: state.categoryReducer,
});

const mapDispatchToProps = (dispatch) => ({
    addToCart: (product) => dispatch(putRemoteData(product, true)),
    get: () => dispatch(getRemoteData())
});


export default connect(mapStateToProps, mapDispatchToProps)(Products);