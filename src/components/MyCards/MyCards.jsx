import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import "./MyCards.css";
import CardItem from "../CardItem/CardItem";

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

export default function MyCards() {
  const dispatch = useDispatch();
  const cards = useSelector((store) => store.cards);

  useEffect(() => {
    dispatch({ type: "GET_CARDS" });
  }, []);
  return (
    <>
      <div className="container">
        <h2 className="mycards">My Collection</h2>
      </div>
      <div className="cardList">
        {cards.data &&
          cards.data.map((card) => <CardItem card={card} key={card.id} />)}
      </div>
    </>
  );
}
