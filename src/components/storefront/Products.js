import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import { connect } from 'react-redux';

const Products = props => {

    return (
        <section className='prod-sec'>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <div className='grid-tt'>
                {props.productReducer.products.filter(product => product.category === (props.categoryReducer.activeCategory ? props.categoryReducer.activeCategory.name : null)).map(product => {
                    return (
                        
                        <Grid item >
                            <Card className='h5' variant="outlined">

                                <CardContent>
                                    <Typography variant="h5">{product.name}</Typography>
                                    <Typography variant="body2">{product.tags}</Typography>
                                    <Typography variant="body1">${product.price}</Typography>
                                    <Typography variant="body1">{product.inventory} pieces available </Typography>
                                    <Avatar alt={product.name} src={product.image} />
                                </CardContent>

                            </Card>
                        </Grid>
                    )
                })}
                </div>
            </Grid>
        </section>
    )
}

const mapStateToProps = state => ({
    productReducer: state.productReducer,
    categoryReducer: state.categoryReducer
});

export default connect(mapStateToProps)(Products);