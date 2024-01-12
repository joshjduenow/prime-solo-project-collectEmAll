// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import CardItem from "../MyCardItem/MyCardItem";
// import CardList from "../CardList/CardList";

// function SearchBar() {
//   let [searchInput, setSearchInput] = useState("");

//   const cards = useSelector((store) => store.cards);

//   const dispatch = useDispatch();

//   const getCards = (e) => {
//     dispatch({
//       type: "GET_CARDS",
//       payload: searchInput,
//     });
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={searchInput}
//         onChange={(e) => setSearchInput(e.target.value)}
//         placeholder="Search"
//       ></input>

//       <button onClick={getCards}>Search</button>

//       {cards.data &&
//         cards.data.map((card) => {
//           return <CardList key={card.id} card={card} />;
//         })}
//     </div>
//   );
// }

// export default SearchBar;
