import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadProducts, saveProduct, editProduct, updateProduct, deleteProduct, toggleModal } from '../../actions';

@connect(mapStateToModalProps, { loadProducts, saveProduct, editProduct, updateProduct, deleteProduct, toggleModal })
export default class Modal extends Component {
    constructor(props) {
        super(props);

        if (!this.props.newEntry) {
          this.state = ({
            name: props.name,
            price: props.price
          });
        } else {
          this.state = ({
            name: '',
            price: ''
          });
        }
    }

    componentDidMount() {
        $('#editProduct').modal('show');
    }

    closeModal() {
        // need to have component inside different this context
        let modalComponent = this;
        $('#editProduct').modal('hide');
        // Make sure bootstrap modal close finishes before
        // changing modal isOpen to false otherwise background gets stuck
        $('#editProduct').on('hidden.bs.modal', function () {
          modalComponent.props.toggleModal();
        });
    }

    handleDelete() {
        if (this.props.id && !this.props.newEntry) {
          this.props.deleteProduct(this.props.id);
        }
        this.closeModal();
    }

    handleCreate() {
      const product = {
          name: this.state.name,
          price: this.state.price
      };


        if (!this.props.newEntry) {
          this.props.updateProduct(this.props.id, product);
        }
        else {
          this.props.saveProduct(product);
        }

      this.closeModal();
      this.props.loadProducts();
    }

    handleNameChange(e) {
      e.preventDefault();
      this.setState({
        name: e.target.value
      });
    }

    handlePriceChange(e) {
      e.preventDefault();
      this.setState({
        price: e.target.value
      });
    }

    render() {
      if (!this.props.isOpen) {
        this.closeModal();
      }
      return <div
        id={"editProduct"}
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
                  <h4 className="modal-title">Edit Product</h4>
                  : <h4 className="modal-title">Create Product</h4>
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
