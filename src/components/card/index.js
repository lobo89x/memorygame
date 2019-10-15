import React from "react";
// import { prependOnceListener } from 'cluster';

function Card(props) {
    return <div>
            {props.cards.map( card =>
            <div className="card text-white bg-dark mb-3">
                <div className="card-body">
                    <h5 className="card-title">{card.name}</h5>
                    <p className="card-text"></p>
                </div>
            </div>
                 )}
    </div>
}

export default Card;
