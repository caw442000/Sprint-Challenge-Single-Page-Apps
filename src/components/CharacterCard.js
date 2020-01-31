import React from "react";

const CharacterCard = ({data}) => {
  return (
    <div>
  
    {data.map(data => {
      return (
        <div key={data.id}>
          <h2>Name: {data.name}</h2>
          <h3>Status: {data.status}</h3>
          <h3>Species: {data.species}</h3>
          <h3>Origin: {data.origin.name}</h3>
        </div>
      );
    })}
  </div>
  
    

    
    
    )
};

export default CharacterCard;
