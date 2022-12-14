import { Overlay, Modal } from './Modal.styled';

export const Modal = ({ src, alt, handleCloseModal }) => {
  <Overlay>
    <Modal>
      <img src={src} alt={alt} onClick={handleCloseModal} />
    </Modal>
  </Overlay>;
};
