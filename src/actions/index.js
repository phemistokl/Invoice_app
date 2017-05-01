import api from '../api';

export const GET_ALL_CUSTOMERS = 'GET_ALL_CUSTOMERS';
export const SET_CURRENT_CUSTOMER = 'SET_CURRENT_CUSTOMER';
export const UPDATE_CUSTOMER = 'UPDATE_CUSTOMER';
export const CREATE_CUSTOMER = 'CREATE_CUSTOMER';
export const DELETE_CUSTOMER = 'DELETE_CUSTOMER';
export const SAVE_NEW_CUSTOMER = 'SAVE_NEW_CUSTOMER';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';

export const fetchGetAllCustomers = ({ data }) => ({
    type: GET_ALL_CUSTOMERS,
    customers: data
});

export const fetchSetCurrentCustomer = ({ data }) => ({
    type: SET_CURRENT_CUSTOMER,
    customer: data

});

export const fetchUpdateCustomer = () => ({
    type: UPDATE_CUSTOMER
});

export const  fetchCreateCustomer = () => ({
    type: CREATE_CUSTOMER
});

export const fetchSaveNewCustomer = () => ({
    type: SAVE_NEW_CUSTOMER
});

export const fetchDeleteCustomer = () => ({
    type: DELETE_CUSTOMER
});

export const fetchToggleModal = () => ({
    type: TOGGLE_MODAL
});

export const toggleModal = () => dispatch => {
    dispatch(fetchToggleModal());
}

export const createCustomer = () => dispatch => {
    dispatch(fetchCreateCustomer());
}

export const currentCustomer = (customerId) => dispatch => {
    return api.currentCustomer(customerId)
    .then(data => dispatch(fetchSetCurrentCustomer(data)))
    .then(() => dispatch(fetchToggleModal()));
}

export const loadCustomers = () => dispatch => {
    return api.getCustomers()
    .then(data => dispatch(fetchGetAllCustomers(data)));
}

export const saveCustomer = (customer) => dispatch => {
    dispatch(fetchSaveNewCustomer());
    return api.saveNewCustomer(customer);
}

export const updateCustomer = (customerId, customer) => dispatch => {
    dispatch(fetchUpdateCustomer());
    return api.updateCustomer(customerId, customer)
    .then(() => dispatch(loadCustomers()));

}

export const deleteCustomer = (customerId) => dispatch => {
    dispatch(fetchDeleteCustomer());
    return api.deleteCustomer(customerId)
    .then(() => dispatch(loadCustomers()));
}
