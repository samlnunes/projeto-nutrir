import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  height: calc(100vh - 200px);
  width: 500px;
  position: absolute;
  top: 90px;
  border-radius: 20px;
  padding: 20px 0;
  left: 10px;
  z-index: 9999;
  overflow: auto;

  @media (max-width: 768px) {
    width: calc(100% - 20px);
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin-bottom: 10px;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

export const BoxInfos = styled.div`
  img {
    width: 100%;
  }

  h1 {
    margin: 10px 20px;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 1.75rem;
  }
`;

export const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  div {
    display: flex;
    gap: 10px;
    align-items: center;

    p {
      font-size: 0.875rem;
      font-weight: 400;
      letter-spacing: 0;
    }
  }

  .doar {
    width: calc(50% - 40px);
    height: 56px;
    position: absolute;
    bottom: 20px;
    background-color: #ed2647;
    font-weight: 800;
    font-size: 18px;
    border-radius: 10px;
    color: #ffffff;
    border: none;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
      background-color: #ca3433;
      transition: 0.5s;
    }
  }
`;
