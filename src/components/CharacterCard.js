import React from "react";
import styled from "styled-components";


const CharacterCardDiv = styled.div`
  background: yellow;
  color: black;
  width: 400px;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  
`;
const CharacterListDiv = styled.div`

  background: purple;
  color: black;
  width: 400px;
  max-height: 300px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
  
`;
const CharacterCard = ({data}) => {
  return (
    <div>
  
    {data.map(data => {
      return (
        <CharacterListDiv>
        <CharacterCardDiv key={data.id}>
          <h2>Name: {data.name}</h2>
          <h3>Status: {data.status}</h3>
          <h3>Species: {data.species}</h3>
          <h3>Origin: {data.origin.name}</h3>
        </CharacterCardDiv>
        </CharacterListDiv>
      );
    })}
  </div>
  
    

    
    
    )
};

export default CharacterCard;
