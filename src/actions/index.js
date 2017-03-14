import api from '../api';

export const FETCH_CUSTOMERS_REQUEST = 'FETCH_CUSTOMERS_REQUEST';
export const FETCH_CUSTOMERS_SUCCESS = 'FETCH_CUSTOMERS_SUCCESS';

export const fetchCustomersRequest = () => ({
    type: FETCH_CUSTOMERS_REQUEST
});

export const fetchCustomersSuccess = ({ data }) => ({
    customers: data,
    type: FETCH_CUSTOMERS_SUCCESS
});

export const loadCustomers = () => dispatch => {
    dispatch(fetchCustomersRequest());

    return api.listCustomers()
    .then(data => dispatch(fetchCustomersSuccess(data)));
}
//
// export const createNote = (note) => dispatch => {
//     return api.createNote(note)
//     .then(() => loadNotes())
//     .catch(err => console.error(err));
// }
//
// export const deleteNote = (noteId) => dispatch => {
//     return api.deleteNote(noteId)
//     .then(() => loadNotes())
//     .catch(err => console.error(err));
// }
