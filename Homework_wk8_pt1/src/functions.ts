import { v4 as uuidv4 } from 'uuid';
import { Item, User } from './types';

export const createUser = (name: string, age: number): User => ({
    id: uuidv4(),
    name,
    age,
    cart: [],
});

export const createItem = (name: string, price: number, description: string): Item => ({
    id: uuidv4(),
    name,
    price,
    description,
});

export const addToCart = (item: Item, user: User): void => {
    user.cart.push(item);
};

export const removeFromCart = (item: Item, user: User): void => {
    user.cart = user.cart.filter((cartItem) => cartItem.id !== item.id);
};

export const removeQuantityFromCart = (item: Item, user: User, quantity: number): void => {
    const itemsToRemove = user.cart.filter((cartItem) => cartItem.id === item.id).slice(0, quantity);
    user.cart = user.cart.filter((cartItem) => !itemsToRemove.includes(cartItem));
};

export const cartTotal = (user: User): number => {
    return user.cart.reduce((total, item) => total + item.price, 0);
};

export const printCart = (user: User): void => {
    console.log(`Cart for ${user.name}:`);
    user.cart.forEach((item) => {
    console.log(`- ${item.name} (${item.price.toFixed(2)})`);
});
};
