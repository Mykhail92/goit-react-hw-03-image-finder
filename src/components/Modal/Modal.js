import { Component } from 'react';
import { Overlay, ModalItem } from './Modal.styled';

export class Modal extends Component {
  onBackdropClick = event => {
    console.log(event.target);
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };
  render() {
    return (
      <Overlay onClick={this.onBackdropClick}>
        <ModalItem>
          <img src={this.props.src} alt={this.props.alt} />
        </ModalItem>
      </Overlay>
    );
  }
}
