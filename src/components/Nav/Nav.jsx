import React from "react";
import { Link } from "react-router-dom";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.css";
import { useSelector } from "react-redux";
import Pokeball from "../Pokeball/Pokeball";
import Header from "../Header/Header";

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <>
    <Header />
    <div className="nav">
      <Pokeball />
      {/* <Link to="/home">
        <h2 className="nav-title">Collect' Em All !</h2>
      </Link> */}
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/info">
              Info Page
            </Link>

            <Link className="navLink" to="/saved">
              Saved For Later
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}

        <Link className="navLink" to="/about">
          About
        </Link>
      </div>
    </div>
    </>
  );
}

export default Nav;
