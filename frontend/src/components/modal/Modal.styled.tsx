import styled from 'styled-components';

const Modal = styled.div.attrs<any>((props) => ({}))`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
`;

const ModalWindow = styled.div.attrs<any>((props) => ({}))`
  width: 300px;
  height: auto;
  /* border: 1px solid aquamarine; */
  background-color: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
`;

const ModalBody = styled.div.attrs<any>((props) => ({}))`
  border: 1px solid black;
  padding: 10px;
  margin: 15px;
  display: flex;
`;

const ModalImg = styled.div.attrs<any>((props) => ({}))`
  /* border : 1px solid red; */
`;

const ModalContent = styled.div.attrs<any>((props) => ({}))`
  /* border : 1px solid yellow; */
  position: relative;
  width: 100%;
`;

const ModalButton = styled.div.attrs<any>((props) => ({}))`
  /* border : 1px solid blue; */
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0;
`;

export { Modal, ModalWindow, ModalBody, ModalImg, ModalContent, ModalButton };
