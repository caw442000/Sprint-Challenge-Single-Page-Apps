import React from "react";
import CharacterList from "./CharacterList";

const SearchForm = ({handleInputChange, query}) => {
 
  return (
    <section>
      <div className="spells">
        <form className="search">
          <input
            type="text"
            onChange={handleInputChange}
            value={query}
            name="name"
            tabIndex="0"
            className="prompt search-name"
            placeholder="search by name"
            autoComplete="off"
          />
        </form>
      </div>
    </section>
  );
};
export default SearchForm;
