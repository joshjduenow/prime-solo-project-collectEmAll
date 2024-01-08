import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import "./CardList.css";
import CardItem from "../CardItem/CardItem";

export default function CardList() {
  const dispatch = useDispatch();
  const cards = useSelector((store) => store.cards);

  useEffect(() => {
    dispatch({ type: "GET_CARDS" });
  }, []);
  return (
    <main>
      <div className="cardList">
        {cards.data &&
          cards.data.map((card) => <CardItem card={card} key={card.id} />)}
      </div>
    </main>
  );
}
