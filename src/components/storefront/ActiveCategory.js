//This file is formatted by Prettier-Code formatter

/**
 *  Martial-ui imports, from => https://material-ui.com
 */
import { Typography } from "@material-ui/core";

/**
 *  React imports.
 */
import { connect } from "react-redux";

/**
 *  ActiveCategory component.
 */
const ActiveCategory = (props) => {
  return (
    <section className="active">
      <Typography variant="h4" align="center">
        {props.categoryReducer.activeCategory ? (
          props.categoryReducer.activeCategory.name
        ) : (
          <div>
            Shopping Time 💃 🕺
            <br></br>
            <br></br>
            <img
              alt="img"
              src="https://media0.giphy.com/media/xT1Ra0dSCM6CFfVK7e/giphy.gif"
            />
            <br></br>
            <br></br>
            Please Select one of the Categories
          </div>
        )}
      </Typography>
      <Typography variant="h6" align="center">
        {props.categoryReducer.activeCategory
          ? props.categoryReducer.activeCategory.description
          : null}
      </Typography>
    </section>
  );
};

// map the state to the props
const mapStateToProps = (state) => ({
  categoryReducer: state.categoryReducer,
});

// export the component
export default connect(mapStateToProps)(ActiveCategory);
