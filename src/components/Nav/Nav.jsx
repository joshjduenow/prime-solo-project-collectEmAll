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
        <div>
          {/* If no user is logged in, show these links */}
          {!user.id && (
            <>
              <Link className="navLink" to="/login">
                Login / Register
              </Link>
              <Link className="navLink" to="/about">
                About
              </Link>
            </>
          )}

          {/* If a user is logged in, show these links */}
          {user.id && (
            <>
            <Pokeball />
              <Link className="navLink" to="/mycards">
                My Cards
              </Link>

              <Link className="navLink" to="/saved">
                Saved For Later
              </Link>

              <LogOutButton className="navLink" />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Nav;
