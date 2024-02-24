import * as React from 'react'

const Task = ({ children }) => {
    const style = {
        marginTop: "10px",
        color: "#0b6ebf"
    }
    return (
        <h4 style={style}>Tehtävä {children}</h4>
    )
}

export default Task