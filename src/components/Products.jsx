import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class Products extends Component {
    constructor(props) {
        super(props);
        document.title = 'Product list';

        this.state = {
        };

        //this.handleNoteDelete = this.handleNoteDelete.bind(this);
        //this.handleNoteAdd = this.handleNoteAdd.bind(this);
    }

    render() {
        return (
            <div className="app">
                <h2 className="app__header">Product list</h2>
            </div>
        );
    }
}
