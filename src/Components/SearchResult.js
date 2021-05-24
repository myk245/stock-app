import React from 'react';
import styled from 'styled-components';

const ResultDiv = styled.div`
   border: 1px solid #e5e5e5;
   width: 50%;
   margin: 20px auto;
   text-align: center;
   padding: 5px;
`;

function SearchResult(props) {
   return (
      <ResultDiv>
         <h4>Symbol: {props.symbol}</h4>
         <p>Stock Name: {props.name}</p>
         <p>Region: {props.region}</p>
      </ResultDiv>
   )
}

export default SearchResult