import "../Archived/Archived.css";
import React from "react";
import { useDispatch } from "react-redux";

export default function SavedCardItem({ card }) {
  const dispatch = useDispatch();

  const addToCollection = () => {
    dispatch({
      type: "ADD_COLLECTION",
      payload: card,
    });
  };
  const deleteFromSaved = (card) => {
    dispatch({
      type: "DELETE_FROM_SAVED",
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
      <div className="buttons-saved">
        <button onClick={addToCollection} className="button-save" role="button">
          Add
        </button>
        <button
          onClick={() => deleteFromSaved(card)}
          className="button-save"
          role="button"
        >
          Delete
        </button>
      </div>
    </>
  );
}
