import React from 'react';
import styled, { keyframes } from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';

const Container = styled.div`
  width: 100%;
  height: 50px;
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const SearchContainer = styled.input`
  width: 80%;
  height: 100%;
  border-radius: 30px;
  /* background-color: transparent; */
  border-color: transparent;
  outline: none;
  padding-left: 40px;
  background: linear-gradient(145deg, #846d62, #9d8175);
  box-shadow: 12px 12px 24px #7d675d, -12px -12px 24px #a98b7d;
  ::placeholder {
    color: white;
  }
`;

const SearchIconCss = styled(SearchIcon)`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 10%;
`;

function Search() {
  return (
    <Container>
      <SearchContainer type="text" placeholder="what the fuck "></SearchContainer>
      <SearchIconCss />
    </Container>
  );
}

export default Search;
