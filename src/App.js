import React, { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import { API_BASE } from './constants';
import Searchbar from './Components/Searchbar';
import SearchResult from './Components/SearchResult';


const Title = styled.div`
  margin-top: 100px;
  font-size: 25px;
`;

const ResultsContainer = styled.div`
  border: 1px solid #e5e5e5;
  margin-top: 10px;
`;

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  // on submit, grab the search term and call the appropriate api endpoint
  const handleSubmit = () => {
    fetch(`${API_BASE}/search/${searchTerm}?token=${process.env.REACT_APP_API_KEY}`, {
      "method": "GET",
      "headers": {
        'Content-Type': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(data => setResults(data))
      // clear the search field in UI
      .then(setSearchTerm(""));
  }

  console.log(results)

  return (
    <div className="App">
      <Searchbar handleChange={handleChange} handleSubmit={handleSubmit} searchTerm={searchTerm}/>
      <Title>BORUS Test App</Title>

      <ResultsContainer>
        {/* cik is a unique identifier - but the cik for some results are null, so we are using the uuid package to generate the keys here */}
        {results.map(result => <SearchResult key={uuidv4()} symbol={result.symbol} name={result.name} region={result.region}/>)}
      </ResultsContainer>
    </div>
  );
}

export default App;

// cik: "328487"
// currency: "USD"
// exchange: "NAS"
// exchangeName: "DGBSA/ ANL STEK(T)LMLOQESENCRAA G"
// exchangeSuffix: null
// figi: "XR0GYB40B9B0"
// iexId: "IEX_4D48333344362D52"
// lei: "U94OBKMT8P0RFGHPWXU3"
// name: "pnAcI lep"
// region: "US"
// sector: "aunMricgutnfa"
// securityName: " InplApce"
// securityType: "sc"
// symbol: "AAPL"
// type: "cs"