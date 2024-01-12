import "./CardItem.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import * as React from "react";
import Snackbar from "@mui/material/Snackbar";

export default function CardItem({ card }) {
  const dispatch = useDispatch();
  const [cardsPopUp, setCardsPopUp] = useState(false);
  const [savedPopUp, savedCardsPopUp] = useState(false);
  const [archivedPopUp, archivedCardsPopUp] = useState(false);

  const handleMyCards = () => {
    setCardsPopUp(true);
  };
  const handleSavedCards = () => {
    savedCardsPopUp(true);
  };
  const handleArchivedCards = () => {
    archivedCardsPopUp(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setCardsPopUp(false);
    archivedCardsPopUp(false);
    savedCardsPopUp(false);
  };

  const addToCollection = () => {
    setCardsPopUp(true);
    dispatch({
      type: "ADD_COLLECTION",
      payload: card,
    });
  };

  const addToSaved = () => {
    savedCardsPopUp(true);
    dispatch({
      type: "ADD_SAVED",
      payload: card,
    });
  };
  const addToArchived = () => {
    archivedCardsPopUp(true);
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
        <Snackbar
          open={cardsPopUp}
          autoHideDuration={4000}
          onClose={handleClose}
          message="Added to My Cards!"
        />
        <button onClick={addToSaved} className="button-74" role="button">
          Save
        </button>
        <Snackbar
          open={savedPopUp}
          autoHideDuration={4000}
          onClose={handleClose}
          message="Added to Saved Cards!"
        />
        <button onClick={addToArchived} className="button-74" role="button">
          Archive
        </button>
        <Snackbar
          open={archivedPopUp}
          autoHideDuration={4000}
          onClose={handleClose}
          message="Added to Archived Cards!"
        />
      </div>
    </>
  );
}
