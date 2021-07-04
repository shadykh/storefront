import { Button, ButtonGroup, Typography } from '@material-ui/core';
import { connect } from 'react-redux';

import { setActiveCategory, reset } from '../../store/categories';


const Categories = props => {
    return (
        <section className='brows-cat'>
            <Typography variant="h5">Browse Categories:</Typography>
            <ButtonGroup variant="contained" color="primary">
                {props.categoryReducer.categories.map((category, idx) => {
                    return <Button key={idx} className='btn' onClick={() => props.setActiveCategory(category)} >{category.displayName}</Button>
                })}
                <Button onClick={() => props.reset()}>reset active category</Button>
            </ButtonGroup>
        </section>
    )
}

const mapStateToProps = state => ({
    categoryReducer: state.categoryReducer
});

const mapDispatchToProps = { setActiveCategory, reset }

export default connect(mapStateToProps, mapDispatchToProps)(Categories);