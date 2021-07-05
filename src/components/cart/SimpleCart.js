import { Grid, makeStyles, Card, CardContent, Typography, IconButton } from '@material-ui/core';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import { connect } from 'react-redux';


function SimpleCart(props) {
    const useStyles = makeStyles({
        cart: {
            zIndex: 100,
            position: "fixed",
            right: "16px",
            top: "64px",
            width: "150px",
            height: '300px',
        },
        scroll:{
            overflow: 'scroll', 
            zIndex: 100,
            position: "fixed",
            right: "16px",
            top: "64px",
            width: "150px",
            height: '200px'
        },
        show: {
            display: 'block',
        },
        hide: {
            display: 'none',
        },
        font:{
            display: 'flex'
        }
    });

    const classes = useStyles();
    return (
        <div className={props.cartReducer.cart.length === 0 ? `${classes.hide}` : `${classes.show}`}>
            <Grid item xs className={classes.cart}>
                <Card raised className={props.cartReducer.cart.length >=5 ? `${classes.scroll}` : `${classes.cart}`}>
                    <CardContent>
                        {props.cartReducer.cart.map(item => {
                            return (
                                <>
                                    {/* <p>You pick {item.quantity} of {item.product.name} until now</p> */}
                                    <Typography className={classes.font} key={item.name} variant="body2">
                                        {item.name}
                                        <IconButton color="secondary" edge="end" aria-label="delete">
                                        <DeleteForeverTwoToneIcon />
                                        </IconButton>
                                    </Typography>
                                </>
                            )
                        })}
                    </CardContent>
                </Card>
            </Grid>
        </div>
    )
}

const mapStateToProps = state => ({
    cartReducer: state.cartReducer,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);