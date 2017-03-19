import axios from 'axios';

//import { apiPrefix } from 'api';

    export function listCustomers() {
        return axios.get(`api/customers`);
    }

    export function createCustomer(data) {
        return axios.post(`api/customers`, data);
    }

    export function deleteCustomer(customerId) {
        return axios.delete(`api/customers/customerId`);
    }

    export default {
        listCustomers,
        createCustomer,
        deleteCustomer
    };
