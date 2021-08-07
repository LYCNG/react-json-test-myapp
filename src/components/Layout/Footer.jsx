import React from 'react'

function Footer({dark}) {

    const darkStyle={
        height:"50px",
        backgroundColor:"white",
        color: 'black'
    }
    const lightStyle={
        height:"50px",
        backgroundColor:"gray",
        color: 'white'
    }

    return (
        <div style={dark? darkStyle:lightStyle}>
        </div>
    )
}

export default Footer
