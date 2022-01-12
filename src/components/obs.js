import * as React from 'react'

const Obs = ({ children }) => {

    const [visible, setVisible] = React.useState(true)
    const hideWhenVisible = { display: visible ? 'none' : '' }
    const showWhenVisible = { display: visible ? '' : 'none' }

    const toggleVisibility = () => {
        setVisible(!visible)
    }
    const style = {
        backgroundColor: "#c1edb7",
        padding: "10px",
        borderRadius: "5px",
        marginBottom: "10px"
    }
    return (
        <div style={style} onClick={toggleVisibility}>
            <h5>Huom!</h5>
            <span style={hideWhenVisible}>...</span>
            <div style={showWhenVisible}>{children}</div>
        </div>
    )
}

export default Obs