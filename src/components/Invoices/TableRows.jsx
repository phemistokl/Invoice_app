import React, { Component } from 'react';
import { connect } from 'react-redux';

import { editInvoice, currentInvoice, toggleModal } from '../../actions';

@connect(undefined, { editInvoice, currentInvoice, toggleModal })
export default class TableRows extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    currentInvoice() {
        this.props.currentInvoice(this.props.id);
    }

    render() {
        const { id, customer_id, discount, total } = this.props;

        return (
          <tr>
            <td>{id}</td>
            <td>{customer_id}</td>
            <td>{discount}</td>
            <td>{total}</td>
            <td><a className="point" onClick={this.currentInvoice.bind(this)}>Edit</a></td>
            <td><a className="point">Delete</a></td>
          </tr>
        );
    }
}
