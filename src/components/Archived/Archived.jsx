import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import ArchivedCardItem from "../ArchivedItem/ArchivedItem";
import "./Archived.css";

export default function Archived() {
  const dispatch = useDispatch();
  const archived = useSelector((store) => store.archived);
  console.log("what is saved:", archived);

  useEffect(() => {
    dispatch({ type: "FETCH_ARCHIVED" });
  }, []);
  return (
    <>
      <div className="container">
        <h2 className="archived">Archives</h2>
      </div>
      {archived &&
        archived.map((card) => <ArchivedCardItem card={card} key={card.id} />)}
    </>
  );
}
