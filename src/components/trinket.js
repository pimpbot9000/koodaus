import * as React from 'react'

const Trinket = ({id, height}) => {
    const style = {
        backgroundColor: "#bda",
        padding: "10px 10px 2px 10px",
        //margin: 0,
        marginBotton: "10px",
        borderRadius: "2px",        
        fontStyle: "normal",
        //boxShadow: "5px 5px lightblue"
    }
    const src = `https://trinket.io/embed/python3/${id}?runOption=run`
    return (
    <><div style={style}>  
        <iframe src={src} width="100%" height={height} frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
    </div>
    <br/>
    </>
    )

}

export default Trinket