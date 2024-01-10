import "../Archived/Archived.css";
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
      <div className="buttons-saved">
        <button className="button-save" role="button">
          Add
        </button>
        <button className="button-save" role="button">
          Delete
        </button>
      </div>
    </>
  );
}
