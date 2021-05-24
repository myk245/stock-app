import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';
import { API_BASE } from '../constants';
import NewsItem from './NewsItem';

const NewsSection = styled.div`
`;

function StockModal(props) {
   const [companyNews, setCompanyNews] = useState([]);
   const [showNews, setShowNews] = useState(false);

   const fetchNews = () => {
      // fetch most recent 5 related news articles
      fetch(`${API_BASE}/stock/${props.stockDetails.symbol}/news/last/5?token=${process.env.REACT_APP_API_KEY}`)
         .then(response => response.json())
         .then(data => setCompanyNews(data))
         .then(setShowNews(!showNews))
   }

   console.log(companyNews)

   return (
      <Modal
         className="modal"
         show={props.show}
         onHide={props.onHide}
         centered
         scrollable={true}
      >
         <ModalHeader closeButton />
         <Modal.Body className="modal-body">
            <p>{props.stockDetails.companyName}</p>
            <p>Symbol: {props.stockDetails.symbol}</p>
            <p>Description: {props.stockDetails.description}</p>
            <p>CEO: {props.stockDetails.CEO}</p>
            <p>Sector: {props.stockDetails.sector}</p>
            <p>Industry: {props.stockDetails.industry}</p>
            <p>Company Website: {props.stockDetails.website}</p>
            <p>Country: {props.stockDetails.country}</p>

            <button onClick={fetchNews}>Fetch News</button>
            {showNews
               ?
               <NewsSection>
                  <h5>Related News</h5>
                  {companyNews.map(news => <NewsItem key={uuidv4()} headline={news.headline} summary={news.summary}/>)}
               </NewsSection>
               :
               null
            }
         </Modal.Body>
      </Modal>
   )
}

export default StockModal

// datetime: 1656342855212
// hasPaywall: false
// headline: "k7a  '02uriso CvuAoJfpyn lTe rNt2petse D 1We t E ClWi-sn e"
// image: "t.4s-li9w4/a499sse2o48b-/7.u/1m/01:i99t/p/0o-dccnxe-a1e9fpghai61848bmdb6vd73"
// lang: "ne"
// related: "LPAA"
// source: "NECT"
// summary: "kfulw1svln  ncelp  daoPf. leaoe.p0a kinr e.almtvi'eAep T  t"
// url: "/ci9es9x9c9/tuc81fp97/ehwe214s0da/1-