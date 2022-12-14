import { Overlay, ModalItem } from './Modal.styled';

export const Modal = ({ src, alt, handleCloseModal }) => {
  return (
    <Overlay>
      <ModalItem>
        <img src={src} alt={alt} onClick={handleCloseModal} />
      </ModalItem>
    </Overlay>
  );
};
