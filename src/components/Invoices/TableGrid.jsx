import React, { Component } from 'react';

import TableRows from './TableRows.jsx';

export default props => {
    const { invoices } = props;

    return (
        <tbody>
              {
                  invoices.map(invoice => <TableRows
                     key={invoice.id}
                     id={invoice.id}
                     customer_id={invoice.customer_id}
                     discount={invoice.discount}
                     total={invoice.total}
                  />)
              }
        </tbody>
    );
}
