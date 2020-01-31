import React from "react";
import {Link} from "react-router-dom"
import styled from "styled-components";

export const HeaderNav = styled.nav`
 
  align-items: center;
  height: 40px;
  justify-content: space-between;


`;

export const HeaderDiv = styled.div`
  width: 30%
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding: 20px;
  margin: 0 auto;




`;




const Header = props => {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <HeaderNav>
        <HeaderDiv>
          <Link to="/">Welcome Page</Link>
          <Link to="/CharacterList">Character List</Link>
        </HeaderDiv>
      </HeaderNav>

    </header>
  );
};
export default Header;
