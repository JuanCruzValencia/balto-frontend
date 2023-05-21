# Balto's Shop - E-commerce React App.

Link to live version - [Balto's Shop](https://balto-frontend.vercel.app/)

Balto's Shop is the frontend for my final project in Coderhouse Backend couse. An REST-API e-commerce application that allows users to register/login, search for products stored in MongoDB databse, add them to shopping cart and then make payment with Stripe API. 

## UX
Layout is simple and clear. Project is accesible through both desktop and mobile devices. For build the frontend functionality ReactJs with NextJs framework is used and a Custom Backend in NodeJs, Express and MongoDb is used.

## User

- User can register and login.
- User can restore password.

## Products
- Users can find varius products in the home page - after click on selected product user is redirected to page with all details about chosen item.
- Users are able to add products to cart and select quantity if required (1 is default value).
- Users can update quantity on cart page (need to implement).
- Users can delete items on cart page.
- User is able to access checkout page with Stripe API.
- Users can add product to Wish list - then can add them directly to cart or delete them (need to implement)
- Userlog, Cart and WishList persist at localstorage (need to implement)

## Layout
The layout is simple and responsive, to achieve this TailwindCSS and DaisyUI components library was used. 

### **Login**
Page allows user to login.
### **Registration**
Page allows user to create an account (user get access to login functionality).
## Project consist following pages:
### **Products(homepage)**
Page where are displayed all products in form of card with image, short info about specs and price of each product. The user can see more details.
### **Product Details**
Page include all details about selected product - image, description, price and add to cart button with counter field allowing select product quantity.
### **Cart page / empty cart**
Page allows to review what is in cart - Image thumbnail is displayed along with product name and description user can delete item completely. Page include total price for all product placed in cart. There are two buttons, allowing user to clean shopping cart or go to checkout. When we remove all items cart icon is displayed with short info that cart is empty and user can go back shopping by clicking Go to Shop button.
### **Cart page / Details on righ side**
This is summary before payment. Page displays product thumbnail, name, quantity, price and total price. Below that user has payment form to fill in with user details and card details. After payment user is redirected to homepage.

## Features
The app can be accessible with or without user registration, but in that case some features will be available after registration only (UserOrders). Anyone is able to view all details about selected product, add product to cart, add products to wish list.

**Features Left to Implement**

- Search bar - allows user to search product by keyword. 
- Add some gallery image on product details page.
- Create pagination.
- Create contact page.
- Customers reviews.

## Installation

`pnpm install`

### Development

**If you want BUILD the API**

`pnpm run build`

**If you want RUN the API**

`pnpm run start`

## Running Test Cases

Unit and integrations test left to implement.

## Technologies used

**JavaScript** - programming language.

**TypeScript** - a syntactic superset of JavaScript which adds static typing.

**ReactJS** - a robust JavaScript library used in dynamic web application development.

**NextJs** - a React framework that gives you building blocks to create web applications.

**NextAuth.js** - is a complete open-source authentication solution for Next.js applications.

**TailwindCSS** - free and open-source CSS framework directed at responsive development.

**Axios** - a promise-based HTTP library that lets developers make requests to either their own or a third-party server to fetch data.

**React Hook Form** - is one such library that helps to manage complex forms.

**GitHub** - provides hosting for software development version control using Git.

**Git** - version-control system for tracking changes in source code during software development.
