# Lab: Class 39

## Index

- [LAB - Hooks API](#LAB---Hooks-API)
- [Business Requirements](#Business-Requirements)
- [Phase 4 Requirements](#Phase-4-Requirements)
- [Technical Requirements / Notes](#Technical-Requirements-/-Notes)
- [The lab tree](#The-lab-tree)
- [More about the Lab](#More-about-the-Lab)
  - [Author](#Author)
  - [Github](#Github)
  - [UML](#UML)
  - [App](#App)
  - [Deployment link](https://storefront-401.netlify.app/)
- [Author Links](#Author-Links)
- [Back to main README](../../../README.md)
- [Back to head or the repo](https://github.com/shadykh/storefront)

---

# Lab: Redux - Additional Topics

**Virtual Store Phase 4:**  Complete work on the Virtual Store by adding detail pages for individual products as well as the the cart checkout page

**[⬆ Back to Index](#index)**

---

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

> Continue working in your 'storefront' repository, in a branch called 'rtk'

**[⬆ Back to Index](#index)**

---

## Business Requirements

Refer to the [Virtual Store System Overview](../../../README) for a complete review of the application, including Business and Technical requirements along with the development roadmap.

**[⬆ Back to Index](#index)**

---

## Phase 4 Requirements

In phase 4, we will be completing work on our Virtual Store by adding a two full page views to the application: Product Details and Checkout

The user stories from Phases 1, 2 and 3 remain unchanged. For this phase, we are now adding the following new user stories to meet the new requirements.

- As a user, I want to see a full detail view of a product so that I can make a more informed choice about purchasing it.
- As a user, I want to view my full cart and initiate the checkout process so that I can purchase my items and have them delivered

**Product Details Page**

![Product Page](https://github.com/LTUC/amman-javascript-401d9/raw/main/class-39/lab/preview-p.png)

**Cart Page**

![Cart Page](https://github.com/LTUC/amman-javascript-401d9/raw/main/class-39/lab/preview-c.png)

**[⬆ Back to Index](#index)**

---


## Technical Requirements / Notes

And as developers, here are the high level development tasks that address the above end user requirements and workflow

- Add routing to the application
- Link every product to a page that displays the full product details
- Link the "Cart" summary in the header to a full shopping cart page with shipping/payment forms
- Additionally, we will be swapping out our Redux store and replacing it with a store built using Redux Toolkit

### Application Architecture

- Add `<BrowserRouter />` to your application
- Create a new page component: `<ProductDetails />`
  - Alter each product on the listing screen to have a new "Product Details" button
  - When clicked, `<Link to...>` /products/## where ## is the product ID
  - On this page, show an expanded view of the product, including placeholders for additional information such as reviews, suggestions, etc
- Create a new page component: `<ShoppingCart />`
  - Link to this page from the `Cart (x)` in the header, on the `/cart` route
  - On this page, show:
    - A summary of items in tabular format
    - A final order total
    - A form allowing the user to enter their billing/shipping address and credit card information
    - On submit, simply draw an alert that says "Thank you for your purchase"
      - We will **not** be processing transactions or storing orders just yet

### Notes on State Management

- While we will still be using Redux, the technical requirement for this phase is to refactor existing actions and reducers into the new **Redux Toolkit** framework/pattern
  - Note that there is no new state functionality (the two pages are read-only), but the underlying architecture will be new

> **RECOMMENDATION:** complete the core features first. Once the new pages are added and properly working, then begin the work of swapping the current Redux Store for the Redux Toolkit version of the store. Do this tactically, so that you can easily switch between implementations if you need to.

**[⬆ Back to Index](#index)**


---

#### **The lab tree**

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

**[⬆ Back to Index](#index)**


---


### **More about the Lab**

- #### Author

  - Shady Khaled

  **[⬆ Back to Index](#index)**

---


- #### Github

  - For the repo ***storefront*** clicks => [here](https://github.com/shadykh/storefront).
  - Pull Requests:
    - [https://github.com/shadykh/storefront/pull/3](https://github.com/shadykh/storefront/pull/3)

**[⬆ Back to Index](#index)**

---


- #### UML

  - ![UML](../uml_lab39.png)

**[⬆ Back to Index](#index)**

---



- #### App

  - run `npm start`
  - Deployment link 🌍: [storefront](https://storefront-401.netlify.app/)

- I did this lab with help of
  - dependencies
    - node-sass
    - react
    - react-dom
    - react-scripts
    - web-vitals
  - framework
    - Node.js
    - React
  - tools
    - Github.
    - VsCode.
    - Ubuntu.

**[⬆ Back to Index](#index)**

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
