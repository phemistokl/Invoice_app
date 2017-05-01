import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Row  from 'react-bootstrap/lib/Row';
import Col  from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import Table from 'react-bootstrap/lib/Table';

import TableGrid from './TableGrid.jsx';
import Modal from './Modal.jsx';

import { loadProducts, createProduct, toggleModal } from '../../actions';

@connect(mapStateToProps, { loadProducts, createProduct, toggleModal })
export default class Products extends Component {
    constructor(props) {
        super(props);
        document.title = 'Product list';

        this.state = {
            products: []
        };
    }

    createProduct() {
        this.props.createProduct();
        this.props.toggleModal();
    }

    componentWillMount() {
        this.props.loadProducts();
    }

    render() {
        return (
          <div>
            { this.props.isOpen ? <Modal /> : null }
            <Row className="show-grid">
              <Col xs={12} sm={12} md={12} lg={12}><h1>Product list</h1><Button onClick={this.createProduct.bind(this)}>Create</Button></Col>
            </Row>
            <Table responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                <TableGrid products={this.props.products} />
              </Table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.products.products,
        isOpen: state.modal.isOpen
    };
}
