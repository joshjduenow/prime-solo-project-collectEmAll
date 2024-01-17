import "../Archived/Archived.css";
import * as React from "react";
import { useDispatch } from "react-redux";
import { useState, Fragment } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Snackbar from "@mui/material/Snackbar";

export default function ArchivedCardItem({ card }) {
  const [open, setOpen] = useState(false);
  const [myCardsPopUp, setMyCardsPopUp] = useState(false);
  const [deletePopUp, setDeletePopUp] = useState(false);
  const dispatch = useDispatch();

  const handleMyCards = () => {
    setMyCardsPopUp(true);
  };
  const handleDeletedCards = () => {
    setDeletePopUp(true);
  };
  const handlePopUpClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setMyCardsPopUp(false);
    setDeletePopUp(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const archivedToCollection = () => {
    setMyCardsPopUp(true);
    dispatch({
      type: "ARCHIVED_TO_COLLECTION",
      payload: card,
    })
  };
  const deleteFromArchived = () => {
    setOpen(false);
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
        <button
          onClick={archivedToCollection}
          className="button-arch"
          role="button"
        >
          Add
        </button>
        <Snackbar
          open={myCardsPopUp}
          autoHideDuration={4000}
          onClose={handlePopUpClose}
          message="Added to My Cards!"
        />
        <button
          onClick={() => handleClickOpen(card)}
          className="button-arch"
          role="button"
        >
          Delete
        </button>
      </div>
      <Fragment>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
          <DialogActions>
            <button
              onClick={deleteFromArchived}
              className="button-dialog"
              role="button"
              autoFocus
            >
              Delete
            </button>
          </DialogActions>
        </Dialog>
      </Fragment>
    </>
  );
}
