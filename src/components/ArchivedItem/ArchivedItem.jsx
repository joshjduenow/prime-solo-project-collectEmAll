import "../Archived/Archived.css";
import React from "react";
import { useDispatch } from "react-redux";

export default function ArchivedCardItem({ card }) {
  const dispatch = useDispatch();

  const archivedToCollection = () => {
    dispatch({
      type: "ARCHIVED_TO_COLLECTION",
      payload: card,
    });
  };
  const deleteFromArchived = (card) => {
    dispatch({
      type: "DELETE_FROM_ARCHIVED",
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
      <div className="buttons-arch">
        <button onClick={archivedToCollection} className="button-arch" role="button">
          Add
        </button>
        <button
          onClick={() => deleteFromArchived(card)}
          className="button-arch"
          role="button"
        >
          Delete
        </button>
      </div>
    </>
  );
}
