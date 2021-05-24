import React from 'react';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';

const ModalDiv = styled.div`
   padding: 20px 20px;
   text-align: center;
`;

function StockModal(props) {
   console.log(props.stockDetails)
   console.log(props.companyNews)

   return (
      <Modal
         className="modal"
         show={props.show}
         onHide={props.onHide}
         centered
      >
         <ModalDiv>
            <ModalHeader closeButton />
            
            <Modal.Body>
               <p>{props.stockDetails.companyName}</p>
               <p>Symbol: {props.stockDetails.symbol}</p>
               <p>Description: {props.stockDetails.description}</p>
               <p>CEO: {props.stockDetails.CEO}</p>
               <p>Sector: {props.stockDetails.sector}</p>
               <p>Industry: {props.stockDetails.industry}</p>
               <p>Company Website: {props.stockDetails.website}</p>
               <p>Country: {props.stockDetails.country}</p>

            </Modal.Body>
         </ModalDiv>
      </Modal>
   )
}

export default StockModal