import React, { useState } from "react";

const SearchForm = ({handleInputChange, query}) => {
 
  return (
    <section>
      <div >
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
