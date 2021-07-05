import React from 'react';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Categories from './components/storefront/Categories';
import Products from './components/storefront/Products';
import ActiveCategory from './components/storefront/ActiveCategory';
import SimpleCart from './components/cart/SimpleCart';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Categories />
      <SimpleCart />
      <ActiveCategory />
      <Products />
      <Footer />
    </div>
  );
}

export default App;