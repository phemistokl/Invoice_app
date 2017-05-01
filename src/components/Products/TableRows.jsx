import React, { Component } from 'react';
import { connect } from 'react-redux';

import { editProduct, currentProduct, toggleModal } from '../../actions';

@connect(undefined, { editProduct, currentProduct, toggleModal })
export default class TableRows extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    currentProduct() {
        this.props.currentProduct(this.props.id);
    }

    render() {
        const { id, name, price } = this.props;

        return (
          <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{price}</td>
            <td><a className="point" onClick={this.currentProduct.bind(this)}>Edit</a></td>
          </tr>
        );
    }
}
