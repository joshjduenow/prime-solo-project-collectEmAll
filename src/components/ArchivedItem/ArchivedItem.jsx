import "../Archived/Archived.css";
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
      <div className="buttons-arch">
        <button className="button-arch" role="button">
          Add
        </button>
        <button className="button-arch" role="button">
          Delete
        </button>
      </div>
    </>
  );
}
