import "../Archived/Archived.css";
import * as React from "react";
import { useDispatch } from "react-redux";
import { useState, Fragment } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { blue } from "@mui/material/colors";

export default function ArchivedCardItem({ card }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const archivedToCollection = () => {
    setOpen(true);
    dispatch({
      type: "ARCHIVED_TO_COLLECTION",
      payload: card,
    });
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
          <DialogTitle id="alert-dialog-title">
            {"Are you sure?"}
          </DialogTitle>
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
