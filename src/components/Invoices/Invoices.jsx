import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Row  from 'react-bootstrap/lib/Row';
import Col  from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import Table from 'react-bootstrap/lib/Table';

import TableGrid from './TableGrid.jsx';
import Modal from './Modal.jsx';

import { loadInvoices, createInvoice, toggleModal } from '../../actions';

@connect(mapStateToProps, { loadInvoices, createInvoice, toggleModal })
export default class Invoices extends Component {
    constructor(props) {
        super(props);
        document.title = 'Product list';

        this.state = {
            invoices: []
        };
    }

    createInvoice() {
        this.props.createInvoice();
        this.props.toggleModal();
    }

    componentWillMount() {
        this.props.loadInvoices();
    }

    render() {
        return (
          <div>
            { this.props.isOpen ? <Modal /> : null }
            <Row className="show-grid">
              <Col xs={12} sm={12} md={12} lg={12}><h1>Invoice list</h1><Button onClick={this.createInvoice.bind(this)}>Create</Button></Col>
            </Row>
            <Table responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Customer</th>
                    <th>Discount</th>
                    <th>Total</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <TableGrid invoices={this.props.invoices} />
              </Table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        invoices: state.invoices.invoices,
        isOpen: state.modal.isOpen
    };
}
