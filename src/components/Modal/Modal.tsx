import React from "react";
import { ModalContainer, ContentContainer, CloseButton } from "./styles";

interface ModalProps {
  open: boolean;
  setClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ open, setClose }) => {
  const handleClose = () => {
    setClose();
  };

  return (
    //@ts-ignore
    <ModalContainer open={open} onClose={handleClose}>
      <ContentContainer>
        <h1>Salve esse código único e apresente na entidade de doação!</h1>
        <p>D7219A</p>
        <div>
          <CloseButton onClick={handleClose}>Entendi</CloseButton>
        </div>
      </ContentContainer>
    </ModalContainer>
  );
};

export default Modal;
