import "./CardItem.css";
import React from "react";
import { useDispatch } from "react-redux";

export default function CardItem({ card }) {
  console.log(card);

  return (
    <li>
      <img src={card} />
      <div className="cardItem">
        <button className="button-74" role="button">
          Add
        </button>
        <button className="button-74" role="button">
          Save
        </button>
        <button className="button-74" role="button">
          Archive
        </button>
        <button className="button-74" role="button">
          Delete
        </button>
        <p>Card Description</p>
      </div>
    </li>
  );
}
