import axios from 'axios';

//import { apiPrefix } from 'api';

    export function listCustomers() {
        return axios.get(`api/customers`);
    }

    export function createCustomer(data) {
        return axios.post(`api/customers`, data);
    }
    //
    // export function deleteNote(noteId) {
    //     return axios.delete(`${apiPrefix}/notes/${noteId}`);
    // }

    export default {
        listCustomers,
        createCustomer
    };
