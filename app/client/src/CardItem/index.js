
import React from 'react';
import './CardItem.css';

function CardItem(props) {
    return (
        <article className="CardItem">
            <h2 className="CardItem-name">{props.name}</h2>
            <footer>
                <span className="CardItem-footer">{props.price} </span>
                <span className="CardItem-footer">{props.currency}</span>
            </footer>
        </article>
    )
}

export { CardItem }