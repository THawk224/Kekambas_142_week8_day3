import { createUser, createItem, addToCart, removeFromCart, removeQuantityFromCart, cartTotal, printCart } from './functions';

// Create a User
const user = createUser('John Doe', 30);

// Create 3 Items to Sell
const itemA = createItem('Item A', 10.99, 'This is Item A');
const itemB = createItem('Item B', 5.99, 'This is Item B');
const itemC = createItem('Item C', 8.99, 'This is Item C');

// Add Item A to the user's Cart
addToCart(itemA, user);
console.log('After adding Item A:');
printCart(user);
console.log(`Cart Total: $${cartTotal(user).toFixed(2)}`);
console.log();

// Add 3 Item B to the user's Cart
addToCart(itemB, user);
addToCart(itemB, user);
addToCart(itemB, user);
console.log('After adding 3 Item B:');
printCart(user);
console.log(`Cart Total: $${cartTotal(user).toFixed(2)}`);
console.log();
