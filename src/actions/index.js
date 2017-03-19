import api from '../api';

export const FETCH_CUSTOMERS_REQUEST = 'FETCH_CUSTOMERS_REQUEST';
export const FETCH_CUSTOMERS_SUCCESS = 'FETCH_CUSTOMERS_SUCCESS';

export const TOGGLE_MODAL = 'TOGGLE_MODAL';

export const CREATE_CUSTOMER = 'CREATE_CUSTOMER';
export const DELETE_CUSTOMER = 'DELETE_CUSTOMER';
export const EDIT_CUSTOMER = 'EDIT_CUSTOMER';

//export const SAVE_NEW_CUSTOMER = 'SAVE_NEW_CUSTOMER';


export const fetchCustomersRequest = () => ({
    type: FETCH_CUSTOMERS_REQUEST
});

export const fetchCustomersSuccess = ({ data }) => ({
    customers: data,
    type: FETCH_CUSTOMERS_SUCCESS
});

export const fetchCreateCustomer = () => ({
    type: CREATE_CUSTOMER
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

export const loadCustomers = () => dispatch => {
    dispatch(fetchCustomersRequest());

    return api.listCustomers()
    .then(data => dispatch(fetchCustomersSuccess(data)));
}

export const createCustomer = (customer) => dispatch => {
    dispatch(fetchCreateCustomer());

    return api.createCustomer(customer)
    .then(() => loadCustomers())
    .catch(err => console.error(err));
}

export const deleteCustomer = (customerId) => dispatch => {
    dispatch(fetchDeleteCustomer());

    return api.deleteCustomer(customerId)
    .then(() => loadCustomers())
    .catch(err => console.error(err));
}
