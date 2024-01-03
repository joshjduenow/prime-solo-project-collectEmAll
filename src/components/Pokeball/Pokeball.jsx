import { Link } from "react-router-dom";
import "./Pokeball.css";

export default function Pokeball () {
    return (
        <div>
            <Link className="pokeball" to="/user"></Link>
        </div>
    )
}