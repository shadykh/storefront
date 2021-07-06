import { Typography } from '@material-ui/core';
import { connect } from 'react-redux';


const ActiveCategory = props => {
    return (
        <section className='active'>
            {console.log(props.categoryReducer) }
            <Typography variant="h4" align="center" >{props.categoryReducer.activeCategory ? props.categoryReducer.activeCategory.name : 'Please Select one of the Categories'}</Typography>
            <Typography variant="h6" align="center" >{props.categoryReducer.activeCategory ? props.categoryReducer.activeCategory.description : null}</Typography>
        </section>
    )
}

const mapStateToProps = state => ({
    categoryReducer: state.categoryReducer
});

export default connect(mapStateToProps)(ActiveCategory);