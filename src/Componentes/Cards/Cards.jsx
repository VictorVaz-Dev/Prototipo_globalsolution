import React from 'react'
import './Cards.css'


const Cards = (props) => {
const {src, alt, width, h2, p} = props

    return (
        <div className='card'>
            <img src={src} alt={alt} width={width} />
            <h2>{h2}</h2>
            <p>{p}</p>
        </div>
    )
}

export default Cards;