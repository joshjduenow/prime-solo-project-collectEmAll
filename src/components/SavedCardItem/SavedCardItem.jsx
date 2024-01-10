import "../CardItem/CardItem.css";
import React from "react";


export default function SavedCardItem({ card }) {
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
          Favorite
        </button>
        <button className="button-74" role="button">
          Save
        </button>
        <button className="button-74" role="button">
          Archive
        </button>
        <button className="button-74" role="button">
          Delete
        </button>
      </div>
    </>
  );
}
