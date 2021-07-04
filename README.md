# To Do List Manager

## Index

- [Lab 36 , v1.1](./public/assets/labVersions/lab36.md)
- [Lab 37 , v1.2](./public/assets/labVersions/lab37.md)
- [Lab 38 , v1.3](./public/assets/labVersions/lab38.md)
- [Lab 39 , v1.4](./public/assets/labVersions/lab39.md)
- [Virtual Store](#Virtual-Store)

---

# Virtual Store

An online shopping portal for a fictional store

## Business Requirements

Our application will power an online storefront that will allow our users to browse our product offerings by category, place items in their shopping cart, and check-out when they are ready to make their purchase

The core requirements and functionality are as follows:

- Display a list of our product categories
- Display a listing of products for each category, when the category is selected
- From the product listings:
  - Click to view a full detail page about the product
  - Add the product to your shopping cart
- Shopping cart (simple version) always visible on screen
- Full shopping cart and check out screen available from main navigation

### Technical Requirements

The application will be created with the following overall architecture and methodologies

1. React
1. ES6 Classes
1. Redux Store for Application State
1. Deployed API with Mongo storage for storing categories and products
1. Superagent or Axios for performing API Requests
1. Material UI for layout and styling
1. Deployment to a cloud provider (Netlify, Amplify, or GitHub Pages)

### Application Structure (proposed)

```
├── .gitignore
├── .eslintrc.json
├── __tests__
│   ├── app.test.js
│   ├── cart.test.js
├── src
│   ├── index.js
│   ├── app.js
│   ├── store
│   │   ├── index.js
│   │   ├── categories.js
│   │   ├── products.js
│   │   ├── cart.js
│   ├── components
│   │   ├── storefront
│   │   │   └── categories.js
│   │   │   └── current-category.js
│   │   │   └── products.js
│   │   │   └── storefront.js
│   │   ├── products
│   │   │   └── details.js
│   │   ├── cart
│   │   │   └── simplecart.js
│   │   │   └── checkout.js
│   │   ├── header
│   │   │   └── header.js
│   │   ├── footer
│   │   │   └── footer.js
└── package.json
```

### Development Process, Milestones

>At every stage of development, the application should be publicly deployed

1. Phase 1: Application Setup
    - Basic React Application
    - Redux State Management
    - State managed in memory
    - Material UI Components & Styling

1. Phase 2: Shopping Cart
    - Add items to a shopping cart
    - Update quantities
    - Remove items from the cart
    - Show the cart in real-time on the UI

1. Phase 3: Live Data
    - Connect the application a live API
    - Persist changes to products based on cart activity.

1. Phase 4: Checkout & Detail Pages
    - Refactor the store to use the latest Redux design pattern (Redux Toolkit)
    - Add a cart checkout page
    - Add a product details page

<br>

---
<br>

## Author Links

- ### Shady Khaled github ✅

  - [Shady Khaled](https://github.com/shadykh)

- ### Shady Khaled reading notes 📚

  - [Shady Khaled reading notes](https://shadykh.github.io/reading-notes/)

- ### Shady Khaled portfolio 💬

  - [Shady Khaled portfolio](https://portfolio-shady.herokuapp.com/)
