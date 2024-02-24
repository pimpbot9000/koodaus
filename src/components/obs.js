import * as React from 'react'

const Obs = ({ children }) => {

    const [visible, setVisible] = React.useState(true)
    const hideWhenVisible = { display: visible ? 'none' : '' }
    const showWhenVisible = { display: visible ? '' : 'none' }

    const toggleVisibility = () => {
        setVisible(!visible)
    }
    const style = {
        backgroundColor: "#d8edb4",
        padding: "2px 10px 2px 10px",
        borderRadius: "3px",
        marginBottom: "10px",
        fontFamily: "Roboto"
    }
    return (
        <div style={style} onClick={toggleVisibility}>
            <h3>Huom!</h3>
            <span style={hideWhenVisible}></span>
            <div style={showWhenVisible}>{children}</div>
        </div>
    )
}

export default Obs