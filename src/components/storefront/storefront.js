//This file is formatted by Prettier-Code formatter

/**
 *  Components imports.
 */

import Categories from "./Categories";
import Products from "./Products";
import ActiveCategory from "./ActiveCategory";
import SimpleCart from "../cart/SimpleCart";

/**
 *  Storefront component.
 */

function Storefront() {
  return (
    <main>
      <Categories />
      <SimpleCart />
      <ActiveCategory />
      <Products />
    </main>
  );
}

// export the Storefront component
export default Storefront;
