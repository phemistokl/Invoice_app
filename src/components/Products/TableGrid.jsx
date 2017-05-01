import React, { Component } from 'react';

import TableRows from './TableRows.jsx';

export default props => {
    const { products } = props;

    return (
        <tbody>
              {
                  products.map(product => <TableRows
                     key={product.id}
                     id={product.id}
                     name={product.name}
                     price={product.price}
                  />)
              }
        </tbody>
    );
}
