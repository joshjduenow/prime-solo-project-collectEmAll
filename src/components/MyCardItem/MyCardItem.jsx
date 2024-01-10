import "../MyCards/MyCards.css";
import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";

export default function CardItem({ card }) {
//   console.log("what is card", card);


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
      <div className="buttons-mycards">
        <button className="button-my" role="button">
          Favorite
        </button>
        <button className="button-my" role="button">
          Save
        </button>
        <button className="button-my" role="button">
          Archive
        </button>
        <button className="button-my" role="button">
          Delete
        </button>
      </div>
    </>
  );
}

