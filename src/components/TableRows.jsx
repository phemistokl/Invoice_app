import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class TableRows extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };

        //this.handleNoteDelete = this.handleNoteDelete.bind(this);
        //this.handleNoteAdd = this.handleNoteAdd.bind(this);
    }

    render() {
        const {
            id,
            name,
            address,
            phone
        } = this.props;

        return (
          <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{address}</td>
            <td>{phone}</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        );
    }
}
