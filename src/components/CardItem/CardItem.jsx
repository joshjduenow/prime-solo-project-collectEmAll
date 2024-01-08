import "./CardItem.css";
import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";

export default function CardItem({ card }) {
  console.log(card);
  
  return (
      <>
      <div className="cardItem">
        <p>
          Name:{card.name}
          <br></br>
          Number:{card.number}
        </p>
        <img className="cardPic" src={card.images.small} />
      </div>
      <div className="buttons">
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
      </div>
    </>
  );
}

//   onClick={movieDetails}
//   alt={movie.title}

//   const dispatch = useDispatch();
//   const history = useHistory();

//   const cardDetails = () => {
//     dispatch({
//       type: "GET_DETAILS",
//       payload: card.id,
//     });
//     history.push(`/details/${card.id}`);