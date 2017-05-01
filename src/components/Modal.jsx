import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadCustomers, saveCustomer, editCustomer, updateCustomer, deleteCustomer, toggleModal } from '../actions';

@connect(mapStateToModalProps, { loadCustomers, saveCustomer, editCustomer, updateCustomer, deleteCustomer, toggleModal })
export default class Modal extends Component {
    constructor(props) {
        super(props);

        if (!this.props.newEntry) {
          this.state = ({
            name: props.name,
            address: props.address,
            phone: props.phone
          });
        } else {
          this.state = ({
            name: '',
            address: '',
            phone: ''
          });
        }
    }

    componentDidMount() {
        $('#editCustomer').modal('show');
    }

    closeModal() {
        // need to have component inside different this context
        let modalComponent = this;
        $('#editCustomer').modal('hide');
        // Make sure bootstrap modal close finishes before
        // changing modal isOpen to false otherwise background gets stuck
        $('#editCustomer').on('hidden.bs.modal', function () {
          modalComponent.props.toggleModal();
        });
    }

    handleDelete() {
        if (this.props.id && !this.props.newEntry) {
          this.props.deleteCustomer(this.props.id);
        }
        this.closeModal();
    }

    handleCreate() {
      const customer = {
          name: this.state.name,
          address: this.state.address,
          phone: this.state.phone
      };


        if (!this.props.newEntry) {
          this.props.updateCustomer(this.props.id, customer);
        }
        else {
          this.props.saveCustomer(customer);
        }

      this.closeModal();
      this.props.loadCustomers();
    }

    handleNameChange(e) {
      e.preventDefault();
      this.setState({
        name: e.target.value
      });
    }

    handleAddressChange(e) {
      e.preventDefault();
      this.setState({
        address: e.target.value
      });
    }

    handlePhoneChange(e) {
      e.preventDefault();
      this.setState({
        phone: e.target.value
      });
    }

    render() {
      console.log(this.props.name);
      if (!this.props.isOpen) {
        this.closeModal();
      }
      return <div
        id={"editCustomer"}
        className="modal fade"
        data-backdrop="static"
        tabIndex="-1"
        role="dialog"
          >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  onClick={this.closeModal.bind(this)}
                  type="button" className="close"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                {
                  !this.props.newEntry ?
                  <h4 className="modal-title">Edit Customer</h4>
                  : <h4 className="modal-title">Create Customer</h4>
                }
              </div>
              <div className="modal-body">
                <div className="input-form-group">
                  <label htmlFor="customer-name">Customer Name</label>
                  <input type="text"
                    onChange={this.handleNameChange.bind(this)}
                    id="customer-name"
                    className="form-control"
                    value={this.state.name}
                  />
                </div>

                <div className="input-form-group">
                  <label htmlFor="customer-address">Customer Address</label>
                  <input type="text"
                    onChange={this.handleAddressChange.bind(this)}
                    id="customer-address"
                    className="form-control"
                    value={this.state.address}
                  />
                </div>
                <div className="input-form-group">
                  <label htmlFor="customer-name">Customer Phone</label>
                  <input type="text"
                    onChange={this.handlePhoneChange.bind(this)}
                    id="customer-name"
                    className="form-control"
                    value={this.state.phone}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-default mystyle"
                  onClick={this.closeModal.bind(this)}
                >
                    Cancel
                </button>
                <button
                  onClick={this.handleCreate.bind(this)}
                  type="button"
                  className="btn btn-primary"
                >
                  Save changes
                </button>
                <button
                  onClick={this.handleDelete.bind(this)}
                  type="button"
                  className="btn btn-danger bottom-left"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
      </div>
    }
}

function mapStateToModalProps(state) {
  return {
    id: state.customers.customer.id,
    name: state.customers.customer.name,
    address: state.customers.customer.address,
    phone: state.customers.customer.phone,
    isOpen: state.modal.isOpen,
    newEntry: state.modal.newEntry
  };
}
