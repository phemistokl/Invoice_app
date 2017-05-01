import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadInvoices, saveInvoice, editInvoice, updateInvoice, deleteInvoice, toggleModal } from '../../actions';

@connect(mapStateToModalProps, { loadInvoices, saveInvoice, editInvoice, updateInvoice, deleteInvoice, toggleModal })
export default class Modal extends Component {
    constructor(props) {
        super(props);

        if (!this.props.newEntry) {
          this.state = ({
            customer_id: props.customer_id,
            discount: props.discount,
            total: props.total
          });
        } else {
          this.state = ({
            customer_id: '',
            discount: '',
            total: ''
          });
        }
    }

    componentDidMount() {
        $('#editInvoice').modal('show');
    }

    closeModal() {
        // need to have component inside different this context
        let modalComponent = this;
        $('#editInvoice').modal('hide');
        // Make sure bootstrap modal close finishes before
        // changing modal isOpen to false otherwise background gets stuck
        $('#editInvoice').on('hidden.bs.modal', function () {
          modalComponent.props.toggleModal();
        });
    }

    handleDelete() {
        if (this.props.id && !this.props.newEntry) {
          this.props.deleteInvoice(this.props.id);
        }
        this.closeModal();
    }

    handleCreate() {
      const invoice = {
          customer_id: this.state.customer_id,
          discount: this.state.discount,
          total: this.state.total,
      };


        if (!this.props.newEntry) {
          this.props.updateInvoice(this.props.id, invoice);
        }
        else {
          this.props.saveInvoice(invoice);
        }

      this.closeModal();
      this.props.loadInvoices();
    }

    handleCustomerChange(e) {
      e.preventDefault();
      this.setState({
        customer_id: e.target.value
      });
    }

    handleDiscountChange(e) {
      e.preventDefault();
      this.setState({
        discount: e.target.value
      });
    }

    render() {
      if (!this.props.isOpen) {
        this.closeModal();
      }
      return <div
        id={"editInvoice"}
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
                  <h4 className="modal-title">Edit Invoice</h4>
                  : <h4 className="modal-title">Create Invoice</h4>
                }
              </div>
              <div className="modal-body">
                <div className="input-form-group">
                  <label htmlFor="product-name">Product Name</label>
                  <input type="text"
                    onChange={this.handleNameChange.bind(this)}
                    id="product-name"
                    className="form-control"
                    value={this.state.name}
                  />
                </div>

                <div className="input-form-group">
                  <label htmlFor="product-price">Product Price</label>
                  <input type="text"
                    onChange={this.handlePriceChange.bind(this)}
                    id="product-price"
                    className="form-control"
                    value={this.state.price}
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
    id: state.products.product.id,
    name: state.products.product.name,
    price: state.products.product.price,
    isOpen: state.modal.isOpen,
    newEntry: state.modal.newEntry
  };
}
