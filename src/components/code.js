import * as React from 'react'

const Code = ({ children }) => {
    const style = {
        backgroundColor: "#bda",
        padding: "2px 10px 2px 10px",
        borderRadius: "5px",
        marginBottom: "2px",
        fontStyle: "normal"
    }
    return (
        <span style={style}>
            <em><code>{children}</code></em>
        </span>
    )
}

export default Code