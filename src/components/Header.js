import React from "react";
import {Link, Route} from "react-router-dom"
import SearchForm from "./SearchForm";


const Header = props => {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <nav>
        <div className="nav-links">
          <Link to="/">
            Welcome Page
          </Link>
          <Link to="/CharacterList">Character List</Link>
        </div>
      </nav>

    </header>
  );
};
export default Header;
