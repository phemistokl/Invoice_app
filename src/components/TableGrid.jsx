import React, { Component } from 'react';

import TableRows from './TableRows.jsx';

export default props => {
    const { customers } = props;

    return (
        <tbody>
              {
                  customers.map(customer => <TableRows key={customer.id} {...customer} />)
              }
        </tbody>
    );
}
