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
        {cards.data && cards.data.map((card, i) => (
          <ul key={i}>
            <li>Name:{card.name}</li>
            <li>Number:{card.number}</li>
            <img src={card.images.small} />
          </ul>
        ))}
      </div>
    </main>
  );
}
