import axios from 'axios';

export default {
    async getProducts() {
        return axios.get("http://localhost:5000/products");
    },

    async getCart() {
        return axios.get("http://localhost:5000/cart");
    },

    async addToCart(productName) {
        return axios.post("http://localhost:5000/cart/add", {
            productName: productName
        });
    },

    async updateCart(productName, quantity) {
        return axios.put("http://localhost:5000/cart/update/" + productName, {
            quantity: quantity
        });
    },

    async deleteCart() {
        return axios.delete("http://localhost:5000/cart/delete");
    }
}