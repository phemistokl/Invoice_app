import React, { Component } from 'react';

import TableRows from './TableRows.jsx';

// export default props => {
//     const { customers } = props;
//
//     console.log(customers);
//
//     return (
//         <TableRows />
//     );
// }
export default class TableGrid extends Component {
    render() {
        const {
            customers,
        } = this.props;

        return (
          <tbody>
                {
                    customers.map(customer =>
                        <TableRows
                            key={customer.id}
                            id={customer.id}
                            name={customer.name}
                            address={customer.address}
                            phone={customer.phone}
                        />
                    )
                }
            </tbody>
        );
    }
}
