import * as React from 'react'

const Task = ({ children }) => {
    const style = {
        marginTop: "10px",
        color: "#0b6ebf"
    }
    return (
        <h5 style={style}>Tehtävä {children}</h5>
    )
}

export default Task