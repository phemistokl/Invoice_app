import axios from 'axios';

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

    export default {
        getCustomers,
        saveNewCustomer,
        currentCustomer,
        updateCustomer,
        deleteCustomer
    };
