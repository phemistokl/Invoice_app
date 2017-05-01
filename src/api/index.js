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

// INVOICES API
    export function getInvoices() {
        return axios.get(`api/invoices`);
    }

    export function saveNewInvoice(data) {
        return axios.post(`api/invoices`, data);
    }

    export function currentInvoice(invoiceId) {
        return axios.get(`api/invoices/${invoiceId}`);
    }

    export function updateInvoice(invoiceId, data) {
        return axios.put(`api/invoices/${invoiceId}`, data);
    }

    export function deleteInvoice(invoiceId) {
        return axios.delete(`api/invoices/${invoiceId}`);
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
    deleteProduct,
    getInvoices,
    saveNewInvoice,
    currentInvoice,
    updateInvoice,
    deleteInvoice
};
