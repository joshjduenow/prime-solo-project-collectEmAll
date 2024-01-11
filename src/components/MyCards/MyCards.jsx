import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import "./MyCards.css";
import MyCardItem from "../MyCardItem/MyCardItem";
import CardItem from "../CardItem/CardItem";

export default function MyCards() {
  const dispatch = useDispatch();
  const collection = useSelector((store) => store.collection);
  console.log("what is collection:", collection);

  useEffect(() => {
    dispatch({ type: "FETCH_COLLECTION" });
  }, []);
  return (
    <>
      <div className="container">
        <h2 className="mycards">My Collection</h2>
      </div>
      <div className="cardList">
        {collection &&
          collection.map((card) => <MyCardItem card={card} key={card.id} />)}
      </div>
    </>
  );
}
