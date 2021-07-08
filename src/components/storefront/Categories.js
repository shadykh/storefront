//This file is formatted by Prettier-Code formatter

/**
 *  Martial-ui imports, from => https://material-ui.com
 */
import { Button, ButtonGroup, Typography } from "@material-ui/core";

/**
 *  React imports.
 */
import { connect } from "react-redux";
import { useEffect } from "react";

/**
 *  import the functionality to the Categories component
 */
import {
  setActiveCategory,
  getRemoteData,
  reset,
  allProducts,
} from "../../store/categories";

/**
 *  Categories component.
 */
const Categories = (props) => {
  const fetchProducts = (e) => {
    e && e.preventDefault();
    props.get();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section className="brows-cat">
      <Typography variant="h5">Browse Categories:</Typography>
      <ButtonGroup variant="contained" color="primary">
        <Button onClick={() => props.allProducts()}>All products</Button>
        {props.categoryReducer.categories.map((category, idx) => {
          return (
            <Button
              key={idx}
              className="btn"
              onClick={() => props.setActiveCategory(category)}
            >
              {category.displayName}
            </Button>
          );
        })}
        <Button onClick={() => props.reset()}>reset active category</Button>
      </ButtonGroup>
    </section>
  );
};

// map the state to the props
const mapStateToProps = (state) => ({
  categoryReducer: state.categoryReducer,
});

// map the dispatch to the props
const mapDispatchToProps = (dispatch) => ({
  setActiveCategory: (cat) => dispatch(setActiveCategory(cat)),
  reset: () => dispatch(reset()),
  get: () => dispatch(getRemoteData()),
  allProducts: () => dispatch(allProducts()),
});

// export the component
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
