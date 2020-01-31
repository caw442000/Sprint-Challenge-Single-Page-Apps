import React, {useState, useEffect }from "react";
import CharacterCard from "./CharacterCard";

const SearchForm = ({data}) => {
  console.log( "This is SearchForm Data", data)
  const [searchData, setSearchData] = useState([]);
  const [query, setQuery] = useState("");
 
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    // if the data has changed other wise don't run axios
    
    
    
     
      const characters = data.filter(character =>
        character.name.toLowerCase().includes(query.toLowerCase())
      );
      console.log("characters", characters)
      setSearchData(characters);
  }, [query]);

    const handleInputChange = event => {
      setQuery(event.target.value);
    };
  
    console.log ("This is Search Data", searchData)
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
      <CharacterCard data = {searchData}/>
    </section>
  );
};
export default SearchForm;
