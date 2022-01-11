import * as React from 'react'

const Quote = ({ children }) => {
    const style = {
        backgroundColor: "#e3dd96",
        padding: "20px",
        borderRadius: "5px",
        marginBottom: "10px"
    }
    return (
        <div style={style}>
            "<em>{children}</em>"
        </div>
    )
}

export default Quote