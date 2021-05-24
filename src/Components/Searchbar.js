import React from 'react';
import styled from 'styled-components';

const Navbar = styled.div`
   height: 64px;
   z-index: 8;
   position: fixed;
   width: 100%;
   top: 0;
   display: flex;
   justify-content: space-between;
   align-items: center;
   background: white;
   box-shadow: 0 1px 4px rgba(0,0,0,.1);
   padding: 0 16px;
   box-sizing: border-box;
`;

const Title = styled.div`
   margin-top: 100px;
   font-size: 25px;
`;

const SearchDiv = styled.div`
   margin: 0 auto;
`;

const Search = styled.input`
   margin: 0 auto;
   padding: 5px;
   width: 200px;
`;

const Submit = styled.button`
   padding: 5px;
`;

function Searchbar(props) {
   return (
      <Navbar>
         <SearchDiv>
            <Search type="text" onChange={props.handleChange} value={props.searchTerm} placeholder="Stock Symbol" />
            <Submit type="submit" onClick={props.handleSubmit}>Search</Submit>
         </SearchDiv>
      </Navbar>
   )
}

export default Searchbar