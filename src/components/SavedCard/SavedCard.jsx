import CardItem from "../CardItem/CardItem";
import "./SavedCard.css";

export default function SavedCard() {
  return (
    <>
      <div className="container">
        <h2 className="saved">Saved Cards</h2>
      </div>
      <CardItem />
    </>
  );
}
