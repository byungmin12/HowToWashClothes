import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styled, { keyframes } from 'styled-components';
import Clothes from './Clothes';

const Container = styled.div`
  width: 50%;
  height: 90%;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 20px;
`;

const ClothesContainerCss = styled.div`
  width: 100%;
  height: 95%;
  /* background-color: red; */
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px 20px;
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Loading = styled.div`
  width: 100%;
  height: 20%;
  /* margin: 50px auto; */
  /* text-align: center; */
  position: absolute;
  top: 50%;
  transform: translate(0%, -50%);
  z-index: 150;
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 800;
`;

function ClothesContainer() {
  const state = useSelector((state) => state.WashingMachineReducer);

  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const handleScroll = (e) => {
    console.log(e.currentTarget.scrollHeight, '스크롤높이');
    console.log(e.currentTarget.clientHeight, '클라이언트높이');
    console.log(e.currentTarget.scrollTop, '스크롤탑');

    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    if (scrollHeight - scrollTop === clientHeight) {
      setPage((prev) => prev + 1);
      console.log('페이지 업');
    }
  };

  useEffect(() => {
    //여기서 계속 추가를 해줘야함
    const listSliceLength = 9;
    const getData = () => {
      setTimeout(() => {
        let remainder = state.ClothesData.slice(listSliceLength);
        let list = state.ClothesData.slice((page - 1) * listSliceLength, page * listSliceLength);
        console.log('데이터 가져오기');
        console.log('나머지', remainder);
        console.log('리스트', list);

        //9개를 뽑기전에 전체 길이가 9 보다 작은 경우
        // 9보다 많은 경우
        if (remainder.length >= 12) {
          setData((prev) => [...prev, ...list]);
        } else {
          list = state.ClothesData.slice(0, state.ClothesData.length);
          setData((prev) => [...prev, ...list]);
        }
        setIsLoading(false);
      }, 1000);
    };
    const loadData = async () => {
      setIsLoading(true);
      getData();
      // setIsLoading(false);
    };
    loadData();
  }, [page]);

  return (
    <Container>
      <ClothesContainerCss onScroll={(e) => handleScroll(e)}>
        {data.map((el) => {
          return <Clothes data={el} key={el.id} />;
        })}
      </ClothesContainerCss>
      {isLoading ? <Loading>Loading...</Loading> : null}
      {/* <Loading>Loading...</Loading> */}
    </Container>
  );
}

export default ClothesContainer;
