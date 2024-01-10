import "./CardItem.css";
import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";

export default function CardItem({ card }) {
  //   console.log("what is card", card);
  const dispatch = useDispatch();

  const addToCollection = () => {
    dispatch({
      type: "ADD_COLLECTION",
      payload: card,
    });
  };

  const addToSaved = () => {
    dispatch({
      type: "ADD_SAVED",
      payload: card,
    });
  };
  const addToArchived = () => {
    dispatch({
      type: "ADD_ARCHIVED",
      payload: card,
    });
  };

  return (
    <>
      <div className="cardItem">
        <p>
          Name:{card.name}
          <br></br>
          Number:{card.number}
        </p>
        <img className="cardPic" src={card.images.small} />
      </div>
      <div className="buttons">
        <button onClick={addToCollection} className="button-74" role="button">
          Add
        </button>
        <button onClick={addToSaved} className="button-74" role="button">
          Save
        </button>
        <button onClick={addToArchived} className="button-74" role="button">
          Archive
        </button>
      </div>
    </>
  );
}
