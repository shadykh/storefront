import { connect } from 'react-redux';

import { Button, ButtonGroup, Typography } from '@material-ui/core';

import { setActiveCategory, reset, allProducts } from '../../store/categories';


const Categories = props => {
    return (
        <section className='brows-cat'>
            <Typography variant="h5">Browse Categories:</Typography>
            <ButtonGroup variant="contained" color="primary">
                {props.categoryReducer.categories.map((category, idx) => {
                    return <Button key={idx} className='btn' onClick={() => props.setActiveCategory(category)} >{category.displayName}</Button>
                })}
                <Button onClick={() => props.reset()}>reset active category</Button>
                <Button onClick={() => props.allProducts()}>All products</Button>
            </ButtonGroup>
        </section>
    )
}

const mapStateToProps = state => ({
    categoryReducer: state.categoryReducer
});

const mapDispatchToProps = { setActiveCategory, reset, allProducts }

export default connect(mapStateToProps, mapDispatchToProps)(Categories);