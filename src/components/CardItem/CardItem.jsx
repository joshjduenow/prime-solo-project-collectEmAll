import "./CardItem.css";
import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";

export default function CardItem({ card }) {
  console.log(card);
  const dispatch = useDispatch();
  const history = useHistory();
  
  const cardDetails = () => {
    dispatch({
      type: "GET_DETAILS",
      payload: card.id,
    });
    history.push(`/details/${card.id}`);

  return (
    <>
      <div className="cardItem">
        <div>
          <h3>{card}</h3>
          <h2>{card}</h2>
          <img
            src={card}
            //   onClick={movieDetails}
            //   alt={movie.title}
          />
        </div>
      </div>
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
    </>
  );
}
}
