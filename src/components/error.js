import * as React from 'react'

const Error = ({ children }) => {
    const style = {
        backgroundColor: "#fad0cd",
        padding: "0px 10px 0px 10px",
        margin: 0
    }
    return (
        <div style={style}>
        {children}
        </div>
    )
}

export default Error