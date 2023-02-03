import * as React from 'react'

const Trinket = ({id, height}) => {
    const src = `https://trinket.io/embed/python3/${id}?runOption=run`
    return (
    <>  
        <iframe src={src} width="100%" height={height} frameborder="0" marginwidth="0" marginheight="`${}`" allowfullscreen></iframe>
    </>
    )

}

export default Trinket