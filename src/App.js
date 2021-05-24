import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import { API_BASE } from './constants';
import Searchbar from './Components/Searchbar';

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

function App() {
  const [searchTerm, setSearchTerm] = useState("");

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
      .then(data => console.log(data))
      // clear the search field in UI
      .then(setSearchTerm(""));
  }

  return (
    <div className="App">
      <Searchbar handleChange={handleChange} handleSubmit={handleSubmit} searchTerm={searchTerm}/>
      <Title>BORUS Test App</Title>
    </div>
  );
}

export default App;
