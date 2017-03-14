import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadCustomers } from '../actions';

@connect(mapStateToProps, { loadCustomers })
export default class Customers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            customers: []
        };

        //this.handleNoteDelete = this.handleNoteDelete.bind(this);
        //this.handleNoteAdd = this.handleNoteAdd.bind(this);
    }

    componentWillMount() {
        this.props.loadCustomers();
    }
    //
    // componentDidUpdate() {
    //     this.props.loadCustomers();
    // }

    render() {    
        return (
            <div className="app">
                <h2 className="app__header">Customer list</h2>
            </div>
        );
    }
}

function mapStateToProps(state) {
  //console.log(state);
    return {
        customers: state.customers.customers,
        loading: state.customers.isFetching
    };
}
