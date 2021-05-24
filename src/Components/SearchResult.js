import React, { useState } from 'react';
import styled from 'styled-components';
import CompanyDetails from './CompanyDetails';

const ResultDiv = styled.div`
   border: 1px solid #e5e5e5;
   width: 50%;
   margin: 20px auto;
   text-align: center;
   padding: 5px;
`;

function SearchResult(props) {
   const [showDetails, setShowDetails] = useState(false);
   const [companyInfo, setCompanyInfo] = useState([]);

   const toggleShowDetails = () => {
      setShowDetails(true)
   }

   return (
      <div>
         <ResultDiv>
            <h4>Symbol: {props.symbol}</h4>
            <p>Stock Name: {props.name}</p>
            <p>Region: {props.region}</p>
            <button onClick={toggleShowDetails}>See Company Profile</button>
         </ResultDiv>
         
         {/* conditionally render company details depending on showDetails */}
         {showDetails
            ?
            <CompanyDetails symbol={props.symbol}/>
            :
            null
         }

         {/* <StockModal
            show={modalOpen}
            onHide={() => setModalOpen(false)}
            stockDetails={companyInfo[0]}
            companyNews={companyInfo[1]}
         /> */}
      </div>
   )
}

export default SearchResult