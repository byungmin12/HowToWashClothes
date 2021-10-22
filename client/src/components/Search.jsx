import React from 'react';
import styled, { keyframes } from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';

const Container = styled.div`
  width: 100%;
  height: 5%;
  position: relative;
  display: flex;
  justify-content: center;
`;

const SearchContainer = styled.input`
  width: 100%;
  height: 100%;
  box-shadow: #ffffff -3px -4px 10px 0px, #757ea0 3px 4px 10px 0px;
  border-radius: 30px;
  background-color: transparent;
  border-color: transparent;
  outline: none;
  padding-left: 40px;
`;

const SearchIconCss = styled(SearchIcon)`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 30px;
`;

function Search() {
  return (
    <Container>
      <SearchContainer type="text" placeholder="세탁하고싶은 옷이 있나요?"></SearchContainer>
      <SearchIconCss />
    </Container>
  );
}

export default Search;
