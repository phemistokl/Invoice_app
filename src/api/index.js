import axios from 'axios';

// CUSTOMERS API
    export function getCustomers() {
        return axios.get(`api/customers`);
    }

    export function saveNewCustomer(data) {
        return axios.post(`api/customers`, data);
    }

    export function currentCustomer(customerId) {
        return axios.get(`api/customers/${customerId}`);
    }

    export function updateCustomer(customerId, data) {
        return axios.put(`api/customers/${customerId}`, data);
    }

    export function deleteCustomer(customerId) {
        return axios.delete(`api/customers/${customerId}`);
    }

// PRODUCTS API
    export function getProducts() {
        return axios.get(`api/products`);
    }

    export function saveNewProduct(data) {
        return axios.post(`api/products`, data);
    }

    export function currentProduct(productId) {
        return axios.get(`api/products/${productId}`);
    }

    export function updateProduct(productId, data) {
        return axios.put(`api/products/${productId}`, data);
    }

    export function deleteProduct(productId) {
        return axios.delete(`api/products/${productId}`);
    }


export default {
    getCustomers,
    saveNewCustomer,
    currentCustomer,
    updateCustomer,
    deleteCustomer,
    getProducts,
    saveNewProduct,
    currentProduct,
    updateProduct,
    deleteProduct
};
