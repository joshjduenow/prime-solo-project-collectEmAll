import React from "react";
import "./MyCards.css";
import CardItem from "../CardItem/CardItem";

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

export default function MyCards() {
  return (
    <>
      <div className="container">
        <h2 className="mycards">My Collection</h2>
      </div>
      <CardItem />
    </>
  );
}
