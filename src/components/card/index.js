import React from "react";
// import { prependOnceListener } from 'cluster';

function Card(props) {
    return <div>
        <div className="card text-white bg-dark mb-3">
            {props.cards.map( card => <div className="card-header" key={card.id}>{card.name}</div>)}
            <div className="card-body">
                <h5 className="card-title">Dark card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div>
}

export default Card;
