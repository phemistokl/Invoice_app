import React, { Component } from 'react';
import { connect } from 'react-redux';
//import Modal from 'react-bootstrap/lib/Modal';

import { loadCustomers, createCustomer, toggleModal } from '../actions';

@connect(mapStateToModalProps, { loadCustomers, createCustomer, toggleModal })
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

        //this.handleNoteDelete = this.handleNoteDelete.bind(this);
        //this.handleNoteAdd = this.handleNoteAdd.bind(this);
    }

    componentDidMount() {
        $('#editRecipe').modal('show');
    }

    closeModal() {
        // need to have component inside different this context
        let modalComponent = this;
        $('#editRecipe').modal('hide');
        // Make sure bootstrap modal close finishes before
        // changing modal isOpen to false otherwise background gets stuck
        $('#editRecipe').on('hidden.bs.modal', function () {
          modalComponent.props.toggleModal();
        });
    }

    handleDelete() {
        if (this.props.id && !this.props.modal.newEntry) {
          this.props.actions.deleteRecipe(this.props.id);
        }
        this.closeModal();
    }

    handleCreate() {
      const customer = {
          name: this.state.name,
          address: this.state.address,
          phone: this.state.phone
      };

      this.props.createCustomer(customer);

      //this.resetState();
        // if (!this.props.modal.newEntry) {
        //   this.props.actions.updateRecipe(recipe);
        // }
        // else {
        //   // Save a new recipe
        //   this.props.actions.saveNewRecipe(recipe);
        // }
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
      if (!this.props.isOpen) {
        this.closeModal();
      }
      return <div
        id={"editRecipe"}
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
                  !this.props.id ?
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
                  <label htmlFor="recipe-name">Customer Phone</label>
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
                  className="btn btn-default"
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
  //console.log(state);
  return {
    id: state.customers.customers.id,
    newEntry: state.modal.newEntry,
    name: state.customers.customers.name,
    address: state.customers.customers.address,
    phone: state.customers.customers.phone,
    isOpen: state.modal.isOpen,
    newEntry: state.modal.newEntry
  };
}
