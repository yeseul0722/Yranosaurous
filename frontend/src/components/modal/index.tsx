import { Modal, ModalWindow, ModalBody, ModalImg, ModalContent, ModalButton } from './Modal.styled';

const modal = (props: any) => {
  return (
    <Modal>
      <ModalWindow>
        <ModalBody>
          <ModalImg>
            <img src={props.DsImg} alt={props.DsName} width={100} height={100} />
          </ModalImg>
          <ModalContent>
            <ModalButton>
              <button onClick={props.closeModal}>닫기</button>
            </ModalButton>
          </ModalContent>
        </ModalBody>
      </ModalWindow>
    </Modal>
  );
};

export default modal;
