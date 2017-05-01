import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Redirect, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './components/App.jsx';
import Customers from './components/Customers/Customers.jsx';
import Products from './components/Products/Products.jsx';
import Invoices from './components/Invoices/Invoices.jsx';
import InvoiceEdit from './components/Invoices/InvoiceEdit.jsx';

import store from './store';

import 'react-select/dist/react-select.css';

const routes = (
    <Route component={App}>
        <Redirect from="/" to="customers" />
        <Route path="customers" component={Customers} />
        <Route path="products" component={Products} />
        <Route path="invoices" component={Invoices}>
            <Route path="invoice/:id" component={InvoiceEdit} />
        </Route>
    </Route>
);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            {routes}
        </Router>
    </Provider>,
    document.getElementById('app-root')
);
