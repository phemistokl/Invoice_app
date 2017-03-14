import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
    render() {
        return (
            <div>
                <div>
                  <div>
                    <div>
                      <Link to="/invoices">Invoices</Link>
                    </div>

                    <div>
                      <Link to="/products">Products</Link>
                    </div>

                    <div>
                      <Link to="/customers">Customers</Link>
                    </div>
                  </div>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
