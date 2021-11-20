# Design
UI and front-end hasn't been developed.
The UI would work the following way: 
 - Load the available products from "/products".
 - Load the current products in the cart from "/cart/remaining".
 - Add a new item to the cart by posting its UI to "/cart/add".
 - Get the current total every time a new product is added by loading "/cart/calculate_total".
 - Close the operation by accesing to "/cart/checkout". 

# Development
The current repository was developed in two days of work by Adrian Lopez Iglesias. 
![Calculating new price mind map](https://raw.githubusercontent.com/AdrianLopezIglesias/a_day_in_the_coffee_shop/main/Add_to_cart%20design.jpg)

# Deploying
set database config "config/config.js" with your own credentials
then run: 
```npm i
sequelize db:migrate  
sequelize db:seed:all
npm run test (all should pass)
npm run dev ``` 

# Routes
get('/products/'): List all available products in stock.
get('/combos/'): List all available product-combos. 
get('/cart/all'): List all items in cart (both open and closed)
get('/cart/remaining'): List remaining items in cart (only open)
get('/cart/calculate_total'): Display a Json of the final value to pay and a detail of raw value, tax value and discount value.
get('/cart/checkout'): Closes all items in the cart. 

post('/cart/add'): Adds a new item to the cart. 
post('/cart/close'): Closes an specific item of the cart. 

PostMan collection: https://app.getpostman.com/run-collection/16526102-a0677dac-bd45-4926-9789-b5bc02c2762d?action=collection%2Ffork&collection-url=entityId%3D16526102-a0677dac-bd45-4926-9789-b5bc02c2762d%26entityType%3Dcollection%26workspaceId%3D2b2dd24c-82d3-4574-b95e-6667264a6835



# Testing
All basics case scenarios are tested (1 coffee, 2 coffees and 3 coffees)
But an extensive testing for multiple combinations is still pending. 

