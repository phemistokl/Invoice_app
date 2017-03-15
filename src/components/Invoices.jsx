import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class Invoices extends Component {
    constructor(props) {
        super(props);
        document.title = 'Invoice list';

        this.state = {
        };

        //this.handleNoteDelete = this.handleNoteDelete.bind(this);
        //this.handleNoteAdd = this.handleNoteAdd.bind(this);
    }

    render() {
        return (
            <div className="app">
                <h2 className="app__header">Invoice list</h2>
            </div>
        );
    }
}
