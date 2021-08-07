import React from 'react'

function Footer({dark}) {

    const footStyle={
        height:"50px",
        backgroundColor:dark?"white":"grey",
        color: 'black'
    }

    return (
        <div style={footStyle}>
        </div>
    )
}

export default Footer
