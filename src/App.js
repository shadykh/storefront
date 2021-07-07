//This file is formatted by Prettier-Code formatter

/**
 *  Martial-ui imports, from => https://material-ui.com
 */
import { CssBaseline } from "@material-ui/core";

/**
 *  React imports.
 */
import React from "react";
import { Route, Switch } from "react-router-dom";

/**
 *  Components imports.
 */
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Storefront from "./components/storefront/storefront";
import Checkout from "./components/cart/Checkout";
import ProductDetails from "./components/Products/details";

/**
 *  App component.
 */

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Switch>
        <Route exact path="/" component={Storefront} />
        <Route path="/cart" component={Checkout} />
        <Route path="/products/:id" component={ProductDetails} />
      </Switch>
      <Footer />
    </div>
  );
}

// export the App component
export default App;
