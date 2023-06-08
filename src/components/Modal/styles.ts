import styled from "styled-components";

export const ModalContainer = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${({ open }) => (open ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

export const ContentContainer = styled.div`
  background-color: #ffffff;
  box-shadow: 24px;
  border-radius: 10px;
  padding: 20px;
  max-width: 550px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h1 {
    font-size: 22px;
    font-weight: 600;
  }

  p {
    padding: 10px;
    border-radius: 10px;
    background-color: #eae3cf;
    width: fit-content;
    font-weight: 700;
  }

  div {
    display: flex;
    justify-content: flex-end;

    button {
      width: 50%;
      background-color: #ed2647;
      border: none;
      height: 56px;
      border-radius: 10px;
      font-size: 18px;
      color: #ffffff;
      cursor: pointer;
      transition: 0.5s;

      &:hover {
        background-color: #ca3433;
        transition: 0.5s;
      }
    }
  }

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 30px;
  }
`;

export const CloseButton = styled.button`
  width: 50%;
  background-color: #ed2647;
  border: none;
  height: 56px;
  border-radius: 10px;
  font-size: 18px;
  color: #ffffff;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: #ca3433;
    transition: 0.5s;
  }
`;
