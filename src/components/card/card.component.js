import React from "react";
import "./card.styles.css";

function Card(props) {
  return (
    <div className="card-container">
      <img
        alt={props.monster.name}
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
      />
      <h4>{props.monster.name}</h4>
      <p>{props.monster.email}</p>
    </div>
  );
}

export default Card;