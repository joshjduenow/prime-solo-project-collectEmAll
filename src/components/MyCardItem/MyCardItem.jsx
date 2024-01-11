import "../MyCards/MyCards.css";
import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";

export default function CardItem({ card }) {
  const dispatch = useDispatch();

  const collectionToArchived = () => {
    dispatch({
      type: "COLLECTION_TO_ARCHIVED",
      payload: card,
    });
  };
  const deleteFromCollection = (card) => {
    dispatch({
      type: "DELETE_FROM_COLLECTION",
      payload: card,
    });
  };

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
          Save
        </button>
        <button
        onClick={() => collectionToArchived(card)} 
        className="button-my" role="button">
          Archive
        </button>
        <button 
        onClick={() => deleteFromCollection(card)}
        className="button-my" role="button">
          Delete
        </button>
      </div>
    </>
  );
}
