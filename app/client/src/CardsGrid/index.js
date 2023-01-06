
import React from 'react'
import './CardsGrid.css'

function CardsGrid(props) {

    return (<section className='Cardsgrid'>{props.children}</section>)
}

export { CardsGrid }