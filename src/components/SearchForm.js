import React, {useState, useEffect} from "react";

const SearchForm = ({data}) => {

  const [searchData, setSearchData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    
      const characters = data.filter(character =>
        character.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchData(characters);
      console.log("characters", characters)
    },[query]);



  
  const handleInputChange = event => {
    setQuery(event.target.value);
  };

 
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
      <div className="spell">
      {data.map(data => {
        return (
          <div className="character-list " key={searchData.id}>
            <h2>
              <span aria-label="witch" role="img">
                🧙
              </span>
              {data.name}
            </h2>
           
          <h3>Status: {data.status}</h3>
          <h3>Species: {data.species}</h3>
          <h3>Origin: {data.origin.name}</h3>
          </div>
        );
      })}
    </div>
    </section>
  );
};
export default SearchForm;
