import React, { Component } from 'react';
import { connect } from 'react-redux';

const TableRows = props => {

        return (
          <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.address}</td>
            <td>{props.phone}</td>
            <td><a href="">Edit</a></td>
          </tr>
        );
}

export default TableRows;
