import axios from 'axios';

//import { apiPrefix } from 'api';

    export function listCustomers() {
        return axios.get(`api/customers`);
    }

    // export function createNote(data) {
    //     return axios.post(`${apiPrefix}/notes`, data);
    // }
    //
    // export function deleteNote(noteId) {
    //     return axios.delete(`${apiPrefix}/notes/${noteId}`);
    // }

    export default {
        listCustomers
    };
