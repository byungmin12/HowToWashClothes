import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styled from 'styled-components';
import Clothes from './Clothes';
import Search from './Search';

const Container = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  /* padding: 20px; */
  background-color: #93796d;
  @media screen and (max-width: 600px) {
    width: 100vw;
    height: 100vh;
  }
`;

const ClothesContainerCss = styled.div`
  width: 96%;
  height: 100%;
  /* background-color: red; */
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px 20px;
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
  padding: 5%;
  /* margin-bottom: 25px; */
  margin: 0px 0px 100px 0px;
  @media screen and (max-width: 600px) {
    width: 100vw;
    height: 100vh;
  }
`;

const Loading = styled.div`
  width: 80%;
  height: 20%;
  /* margin: 50px auto; */
  /* text-align: center; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 150;
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 800;
`;

const TitleText = styled.div`
  width: 100%;
  height: 20%;
  color: white;
  font-size: 4rem;
  font-weight: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 500px) {
    font-size: 3rem;
  }
`;

function ClothesContainer() {
  const state = useSelector((state) => state.WashingMachineReducer);
  const [isCheckSearch, setIsCheckSearch] = useState(false);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  // const [searchData, setSearchData] = useState(state);
  // console.log(searchData.ClothesData);
  const [data, setData] = useState([]);

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    if (scrollHeight - scrollTop === clientHeight) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    //여기서 계속 추가를 해줘야함
    const setLength = 9;
    const listSliceLength = state.ClothesData.length < setLength ? state.ClothesData.length : setLength;
    const getData = () => {
      setTimeout(() => {
        let remainder = state.ClothesData.slice(listSliceLength);
        let list = state.ClothesData.slice((page - 1) * listSliceLength, page * listSliceLength);

        //9개를 뽑기전에 전체 길이가 9 보다 작은 경우
        // 9보다 많은 경우
        if (isCheckSearch) {
          if (remainder.length >= 9) {
            setData([...list]);
          } else {
            list = state.ClothesData.slice(0, state.ClothesData.length);
            setData([...list]);
          }
          setIsCheckSearch(false);
        } else {
          if (remainder.length >= 9) {
            setData((prev) => [...prev, ...list]);
          } else {
            list = state.ClothesData.slice(0, state.ClothesData.length);
            setData((prev) => [...prev, ...list]);
          }
        }
        // if(data.length===state.length){
        //   setPage(0)
        // }
        setIsLoading(false);
      }, 1000);
    };
    const loadData = async () => {
      setIsLoading(true);
      getData();
    };
    loadData();
  }, [page, state]);

  return (
    <Container>
      <TitleText>How to wash ?</TitleText>
      <Search setIsCheckSearch={setIsCheckSearch} setPage={setPage} />
      <ClothesContainerCss onScroll={(e) => handleScroll(e)}>
        {data.map((el) => {
          return <Clothes data={el} key={el.id} />;
        })}
      </ClothesContainerCss>
      {isLoading ? <Loading>Loading...</Loading> : null}
    </Container>
  );
}

export default ClothesContainer;
