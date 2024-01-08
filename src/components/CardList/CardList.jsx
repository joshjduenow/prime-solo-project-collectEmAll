import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import CardItem from "../CardItem/CardItem";

export default function CardList() {
    const dispatch = useDispatch();
    const cards = useSelector((store) => store.cards)
    

    useEffect(() => {
        dispatch({ type: "GET_CARDS" });
    }, []);
    return(
        <main>
            <h4>Cards:</h4>
            <div className="cardList">
            {cards.map((card, i) => (
                <div card={card.name[0]} key={i}>
                    </div>
            ))}
            </div>
        </main>
        
    )
}