import React from 'react';
import styled from 'styled-components';

const NewsItemContainer = styled.div`
   border: 1px solid #f4f4f4;
`;

function NewsItem(props) {
   return (
      <NewsItemContainer>
         <p>{props.headline}</p>
         <p>{props.summary}</p>
      </NewsItemContainer>
   )
}

export default NewsItem