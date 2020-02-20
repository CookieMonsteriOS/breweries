import React, { Component } from 'react'
import { Table } from 'reactstrap';
import TableBody from './TableBody.js'
import TableHeader from './TableHeader.js'
import './TableStyles.css';

class BreweryTable extends Component {
    render() {
        const { breweryData } = this.props;
        return (
            <Table className="brewery-table" >
                <TableHeader />
                <TableBody breweries={breweryData}/>
            </Table>
        )
    }
}

export default BreweryTable