import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useDispatch } from 'react-redux';
import { handleCloseClothesModal } from '../actions/ClotheModalActionIndex';
import axios from 'axios';

const YoutubeAPIKey = process.env.REACT_APP_GOOGLE_API_KEY;
axios.defaults.withCredentials = true;

const openKeyframes = keyframes`
  to{
    width: 70%;
  height: 90%;
  }
`;

const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 999;
`;

const Modal = styled.div`
  width: 0%;
  height: 0%;
  background-color: rgba(0, 0, 0, 0.7);
  border: 7px solid white;
  border-radius: 20px;
  color: white;
  animation: ${openKeyframes} 0.3s forwards;
`;

function WashInfoModal({ data }) {
  const url = '/youtube/v3/search';

  const dispatch = useDispatch();
  const params = {
    key: YoutubeAPIKey,
    part: 'snippet',
    q: '셔츠세탁방법', //데이터 삽입 후 바꿔주기
    maxResults: 5,
    type: 'video',
    regionCode: 'KR',
  };

  const handleModalClose = () => {
    dispatch(handleCloseClothesModal());
  };

  useEffect(() => {
    axios.get(url, { params }).then((data) => {
      console.log(data.data.items);
    });

    // 영상ID :: item.id.videoId
    // 영상제목 item.snippet.title
    // 영상설명 item.snippet.description
    // 썸네일 item.snippet.thumbnails.medium.url
  }, []);

  return (
    <ModalContainer>
      <Modal>
        <h1>{data.title}</h1>
        <div>{data.explain}</div>
        <div onClick={handleModalClose}>x</div>
      </Modal>
    </ModalContainer>
  );
}

export default WashInfoModal;
