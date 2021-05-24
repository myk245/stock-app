import React, { useState } from 'react';
import styled from 'styled-components';
import StockModal from './StockModal';
import { API_BASE } from '../constants';

const ResultDiv = styled.div`
   border: 1px solid #e5e5e5;
   width: 70%;
   height: 100%;
   margin: 20px auto;
   text-align: center;
   padding: 5px;
`;

function SearchResult(props) {
   const [modalOpen, setModalOpen] = useState(false);
   const [companyInfo, setCompanyInfo] = useState([]);

   const fetchDetails = () => {
      fetch(`${API_BASE}/stock/${props.symbol}/company?token=${process.env.REACT_APP_API_KEY}`)
         .then(response => response.json())
         .then(data => {
            setModalOpen(true)
            setCompanyInfo(data)
         })
   }

   return (
      <div>
         <ResultDiv>
            <h4>Symbol: {props.symbol}</h4>
            <p>Stock Name: {props.name}</p>
            <p>Region: {props.region}</p>
            <button onClick={fetchDetails}>See Company Profile</button>
         </ResultDiv>
         
         <StockModal
            show={modalOpen}
            onHide={() => setModalOpen(false)}
            symbol={props.symbol}
            stockDetails={companyInfo}
         />
      </div>
   )
}

export default SearchResult