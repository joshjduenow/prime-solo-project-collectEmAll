import "../CardItem/CardItem.css";
import React from "react";

export default function ArchivedCardItem({ card }) {
  return (
    <>
      <div className="cardItem">
        <p>
          Name:{card.name}
          <br></br>
          Number:{card.card_number}
        </p>
        <img className="cardPic" src={card.image} />
      </div>
      <div className="buttons">
        <button className="button-74" role="button">
          Add
        </button>
        <button className="button-74" role="button">
          Delete
        </button>
      </div>
    </>
  );
}
