import * as React from 'react'

const Quote = ({ children }) => {

    const style2 = {
        borderLeft: "4px solid #0b6ebf",
        paddingLeft: "20px",
        margin: "10px",
        color: "#555"
    }
    return (
        <div style={style2}>
            " <em>{children}</em> "
        </div>
    )
}

export default Quote