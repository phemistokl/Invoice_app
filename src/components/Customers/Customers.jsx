import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Row  from 'react-bootstrap/lib/Row';
import Col  from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import Table from 'react-bootstrap/lib/Table';

import TableGrid from './TableGrid.jsx';
import Modal from './Modal.jsx';

import { loadCustomers, createCustomer, toggleModal } from '../../actions';

@connect(mapStateToProps, { loadCustomers, createCustomer, toggleModal })
export default class Customers extends Component {
    constructor(props) {
        super(props);
        document.title = 'Customer list';

        this.state = {
            customers: []
        };
    }

    createCustomer() {
        this.props.createCustomer();
        this.props.toggleModal();
    }

    componentWillMount() {
        this.props.loadCustomers();
    }

    render() {
        return (
          <div>
            { this.props.isOpen ? <Modal /> : null }
            <Row className="show-grid">
              <Col xs={12} sm={12} md={12} lg={12}><h1>Customer list</h1><Button onClick={this.createCustomer.bind(this)}>Create</Button></Col>
            </Row>
            <Table responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                <TableGrid customers={this.props.customers} />
              </Table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        customers: state.customers.customers,
        isOpen: state.modal.isOpen
    };
}
