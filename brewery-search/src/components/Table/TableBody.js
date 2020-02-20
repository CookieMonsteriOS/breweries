import React from 'react'
const TableBody = props => {
    const rows = props.breweries.map((row, index) => {
        return(<tr key={row.id}>
            <td>{row.name}</td>
            <td>{row.brewery_type.charAt(0).toUpperCase() + row.brewery_type.slice(1)}</td>
            <td>{row.street === "" ? "" : row.street } {row.city} , {row.state}, {row.country}, {row.postal_code}.</td>
            <td>{row.phone === "" ?  "No phone number ": "(+1)" + row.phone}</td>
            <td><a href={row.website_url} target="_blank">Visit {row.name}</a></td>
        </tr>)

    })
    return <tbody>{rows}</tbody>
}
export default TableBody;