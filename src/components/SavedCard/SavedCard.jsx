import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import SavedCardItem from "../SavedCardItem/SavedCardItem";
import "./SavedCard.css";

export default function SavedCard() {
  const dispatch = useDispatch();
  const saved = useSelector((store) => store.saved);
  console.log("what is saved:", saved);

  useEffect(() => {
    dispatch({ type: "FETCH_SAVED" });
  }, []);
  return (
    <>
      <div className="container">
        <h2 className="saved">Saved Cards</h2>
      </div>
      <div className="cardList">
        {saved &&
          saved.map((card) => <SavedCardItem card={card} key={card.id} />)}
      </div>
    </>
  );
}
