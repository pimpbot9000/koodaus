import * as React from 'react'
import './layout.css'

const Segment = ({ title, children }) => {
    return (
        <div className="Segment">
            <h3>{title}</h3>
            {children}
        </div>
    )
}

export default Segment