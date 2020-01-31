import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import styled from "styled-components";
const CharacterListDiv = styled.div`

  background: #99f3eb;
  color: black;
  width: 300px;
  max-height: 300px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
  
`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(`https://rickandmortyapi.com/api/character/`).then(response => {
      console.log(response);
      
      setData(response.data.results);
    });


  }, [SearchForm.query]);


  return (
    <div>
      <h2>THE SEARCH</h2>
      <SearchForm data = {data}/> 
     
      <CharacterCard data = {data}/>
      
    </div>

  );
}
