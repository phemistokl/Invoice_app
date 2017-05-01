import api from '../api';

export const GET_ALL_CUSTOMERS = 'GET_ALL_CUSTOMERS';
export const SET_CURRENT_CUSTOMER = 'SET_CURRENT_CUSTOMER';
export const UPDATE_CUSTOMER = 'UPDATE_CUSTOMER';
export const CREATE_CUSTOMER = 'CREATE_CUSTOMER';
export const DELETE_CUSTOMER = 'DELETE_CUSTOMER';
export const SAVE_NEW_CUSTOMER = 'SAVE_NEW_CUSTOMER';

export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const SET_CURRENT_PRODUCT = 'SET_CURRENT_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const SAVE_NEW_PRODUCT = 'SAVE_NEW_PRODUCT';

export const GET_ALL_INVOICES = 'GET_ALL_INVOICES';
export const SET_CURRENT_INVOICE = 'SET_CURRENT_INVOICE';
export const UPDATE_INVOICE = 'UPDATE_INVOICE';
export const CREATE_INVOICE = 'CREATE_INVOICE';
export const DELETE_INVOICE = 'DELETE_INVOICE';
export const SAVE_NEW_INVOICE = 'SAVE_NEW_INVOICE';

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



export const fetchGetAllProducts = ({ data }) => ({
    type: GET_ALL_PRODUCTS,
    products: data
});

export const fetchSetCurrentProduct = ({ data }) => ({
    type: SET_CURRENT_PRODUCT,
    product: data
});

export const fetchUpdateProduct = () => ({
    type: UPDATE_PRODUCT
});

export const  fetchCreateProduct = () => ({
    type: CREATE_PRODUCT
});

export const fetchSaveNewProduct = () => ({
    type: SAVE_NEW_PRODUCT
});

export const fetchDeleteProduct = () => ({
    type: DELETE_PRODUCT
});



export const fetchGetAllInvoices = ({ data }) => ({
    type: GET_ALL_INVOICES,
    invoices: data
});

export const fetchSetCurrentInvoice = ({ data }) => ({
    type: SET_CURRENT_INVOICE,
    invoice: data
});

export const fetchUpdateInvoice = () => ({
    type: UPDATE_INVOICE
});

export const  fetchCreateInvoice = () => ({
    type: CREATE_INVOICE
});

export const fetchSaveNewInvoice = () => ({
    type: SAVE_NEW_INVOICE
});

export const fetchDeleteInvoice = () => ({
    type: DELETE_INVOICE
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



export const createProduct = () => dispatch => {
    dispatch(fetchCreateProduct());
}

export const currentProduct = (productId) => dispatch => {
    return api.currentProduct(productId)
    .then(data => dispatch(fetchSetCurrentProduct(data)))
    .then(() => dispatch(fetchToggleModal()));
}

export const loadProducts = () => dispatch => {
    return api.getProducts()
    .then(data => dispatch(fetchGetAllProducts(data)));
}

export const saveProduct = (product) => dispatch => {
    dispatch(fetchSaveNewProduct());
    return api.saveNewProduct(product);
}

export const updateProduct = (productId, product) => dispatch => {
    dispatch(fetchUpdateProduct());
    return api.updateProduct(productId, product)
    .then(() => dispatch(loadProducts()));

}

export const deleteProduct = (productId) => dispatch => {
    dispatch(fetchDeleteProduct());
    return api.deleteProduct(productId)
    .then(() => dispatch(loadProducts()));
}



export const createInvoice = () => dispatch => {
    dispatch(fetchCreateInvoice());
}

export const currentInvoice = (invoiceId) => dispatch => {
    return api.currentInvoice(invoiceId)
    .then(data => dispatch(fetchSetCurrentInvoice(data)))
    .then(() => dispatch(fetchToggleModal()));
}

export const loadInvoices = () => dispatch => {
    return api.getInvoices()
    .then(data => dispatch(fetchGetAllInvoices(data)));
}

export const saveInvoice = (invoice) => dispatch => {
    dispatch(fetchSaveNewInvoice());
    return api.saveNewInvoice(invoice);
}

export const updateInvoice = (invoiceId, invoice) => dispatch => {
    dispatch(fetchUpdateInvoice());
    return api.updateInvoice(invoiceId, invoice)
    .then(() => dispatch(loadInvoices()));

}

export const deleteInvoice = (invoiceId) => dispatch => {
    dispatch(fetchDeleteInvoice());
    return api.deleteInvoice(invoiceId)
    .then(() => dispatch(loadInvoices()));
}
