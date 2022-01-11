import * as React from 'react'

const Obs = ({ children }) => {
    const style = {
        backgroundColor: "#c1edb7",
        padding: "10px",
        borderRadius: "5px",
        marginBottom: "10px"
    }
    return (
        <div style={style}>
            <h5>Huom!</h5>
            {children}
        </div>
    )
}

export default Obs