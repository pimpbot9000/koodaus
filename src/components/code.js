import * as React from 'react'

const Code = ({ children }) => {
    const style = {
        backgroundColor: "#c0de8e",
        padding: "0px 10px 2px 10px",
        margin: 0,
        borderRadius: "5px",        
        fontStyle: "normal"
    }
    return (
        <span style={style}>
            <em><code>{children}</code></em>
        </span>
    )
}

export default Code