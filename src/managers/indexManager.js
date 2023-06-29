import UsersManager from "./UserManager.js";
import CartManager from "./cartManager.js";
import ProductManager from "./productManager.js";


export const userService = new UsersManager();
export const cartService = new CartManager();
export const productService = new ProductManager();
