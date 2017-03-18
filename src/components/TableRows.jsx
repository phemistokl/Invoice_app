import React, { Component } from 'react';
import { connect } from 'react-redux';

const TableRows = props => {

        return (
          <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.address}</td>
            <td>{props.phone}</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        );
}

export default TableRows;
