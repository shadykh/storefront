import {  Card, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import { connect } from 'react-redux';

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
        }
    });

    const classes = useStyles();

    return (
        <Grid className={classes.root} container spacing={10} >
            {props.productReducer.products
                .filter(product => product.category === (props.categoryReducer.activeCategory ? props.categoryReducer.activeCategory.name : null))
                .map(product => {
                    return (
                        <Grid item xs={10} sm={8} md={8} lg={4} key={product.name}>
                            <Card variant="outlined" className={classes.card}>
                                <CardMedia
                                    className={classes.media}
                                    image={product.image}
                                    title={product.name}
                                />
                                <CardContent className={classes.po}>
                                    <Typography className={classes.pa} variant="h6">{product.name}</Typography>
                                    <Typography className={classes.pa} color="textSecondary" variant="body3" component="p">{product.tags}</Typography>
                                    <Typography className={classes.pa} color="textSecondary" variant="body3" component="p">${product.price}</Typography>
                                    <Typography className={classes.pa} color="textSecondary" variant="body3" component="p">{product.inventory} pieces available</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })}
        </Grid>
    )
}

const mapStateToProps = state => ({
    productReducer: state.productReducer,
    categoryReducer: state.categoryReducer
});

export default connect(mapStateToProps)(Products);