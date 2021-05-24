import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { API_BASE } from '../constants';

const CompanyDiv = styled.div`
   margin: 0 auto;
`;

function CompanyDetails(props) {

   useEffect(() => {
      Promise.all([
         // fetch company details
         fetch(`${API_BASE}/stock/${props.symbol}/company?token=${process.env.REACT_APP_API_KEY}`),
         // fetch most recent 5 related news articles
         fetch(`${API_BASE}/stock/${props.symbol}/news/last/5?token=${process.env.REACT_APP_API_KEY}`)
      ])
         // return a JSON object from each of the responses
         .then(responses => Promise.all(responses.map(response => response.json())))
         // use data to store information in state and pass to modal
         // data[0] will be company details
         // data[1] will be related news articles
         .then(data => console.log(data))
         .catch(error => console.log(error))
   }, [])

   // const fetchDetails = () => {
   //    Promise.all([
   //       // fetch company details
   //       fetch(`${API_BASE}/stock/${props.symbol}/company?token=${process.env.REACT_APP_API_KEY}`),
   //       // fetch most recent 5 related news articles
   //       fetch(`${API_BASE}/stock/${props.symbol}/news/last/5?token=${process.env.REACT_APP_API_KEY}`)
   //    ])
   //       // return a JSON object from each of the responses
   //       .then(responses => Promise.all(responses.map(response => response.json())))
   //       // use data to store information in state and pass to modal
   //       // data[0] will be company details
   //       // data[1] will be related news articles
   //       .then(data => setCompanyInfo(data))
   //       .catch(error => console.log(error))
   // }

   return (
      <CompanyDiv>
         
      </CompanyDiv>
   )
}

export default CompanyDetails