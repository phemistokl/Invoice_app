import React, { Component } from 'react';
import { connect } from 'react-redux';

import { editCustomer, currentCustomer, toggleModal } from '../actions';

@connect(undefined, { editCustomer, currentCustomer, toggleModal })
export default class TableRows extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    currentCustomer() {
        this.props.currentCustomer(this.props.id);
    }

    render() {
        const { id, name, address, phone } = this.props;

        return (
          <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{address}</td>
            <td>{phone}</td>
            <td><a className="point" onClick={this.currentCustomer.bind(this)}>Edit</a></td>
          </tr>
        );
    }
}
