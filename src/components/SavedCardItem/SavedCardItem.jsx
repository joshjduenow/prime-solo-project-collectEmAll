import "./SavedCardItem.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import * as React from "react";
import Snackbar from "@mui/material/Snackbar";

export default function SavedCardItem({ card }) {
  const dispatch = useDispatch();
  const [cardsPopUp, setCardsPopUp] = useState(false);
  const [deletePopUp, setDeletePopUp] = useState(false);

  const handleMyCards = () => {
    setCardsPopUp(true);
  };
  const handleDeletedCards = () => {
    setDeletePopUp(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setCardsPopUp(false);
    setDeletePopUp(false);
  };

  const addCollection = () => {
    handleMyCards();
    dispatch({
      type: "ADD_TO_COLLECTION",
      payload: card,
    });
  };
  const deleteFromSaved = () => {
    handleDeletedCards();
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
        <button onClick={addCollection} className="button-save" role="button">
          Add
        </button>
        <Snackbar
          open={cardsPopUp}
          autoHideDuration={4000}
          onClose={handleClose}
          message="Added to My Cards!"
        />
        <button onClick={deleteFromSaved} className="button-save" role="button">
          Delete
        </button>
        <Snackbar
          open={deletePopUp}
          autoHideDuration={4000}
          onClose={handleClose}
          message="Deleted from Saved!"
        />
      </div>
    </>
  );
}
