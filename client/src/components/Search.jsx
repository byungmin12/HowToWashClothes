import React from 'react';
import styled, { keyframes } from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector, useDispatch } from 'react-redux';
import { handleSearchClothes } from '../actions/WashingMachineActionIndex';

const Container = styled.div`
  width: 100%;
  height: 90px;
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const SearchContainer = styled.input`
  width: 80%;
  height: 100%;
  border-radius: 30px;
  border-color: transparent;
  outline: none;
  padding-left: 40px;
  background: linear-gradient(145deg, #846d62, #9d8175);
  box-shadow: 5px 5px 12px #342b26, -5px -5px 27px #b89788;
  ::placeholder {
    color: white;
  }
`;

const SearchIconCss = styled(SearchIcon)`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 10%;
  color: white;
`;

function Search({ setIsCheckSearch, setPage }) {
  const state = useSelector((state) => state.WashingMachineReducer);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      setIsCheckSearch(true);
      const value = e.target.value;
      const reg = new RegExp(`${value}`, 'i');

      let filterData = state.ClothesData.filter((el) => {
        return reg.test(el.title);
      });
      dispatch(handleSearchClothes(filterData, value));
      setPage(1);
    }
  };

  return (
    <Container>
      <SearchContainer
        type="text"
        placeholder="what the fuck "
        onKeyPress={(e) => {
          handleSearch(e);
        }}></SearchContainer>
      <SearchIconCss />
    </Container>
  );
}

export default Search;
