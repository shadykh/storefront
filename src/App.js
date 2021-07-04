import React from 'react';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Categories from './components/storefront/Categories';
import Products from './components/storefront/Products';
import ActiveCategory from './components/storefront/ActiveCategory';


function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Categories />
      <ActiveCategory />
      <Products />
      <Footer />
    </div>
  );
}

export default App;