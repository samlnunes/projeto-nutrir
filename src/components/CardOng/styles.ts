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
`;

export const Top = styled.div`
  display: flex;
  justify-content: flex-end;
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

    p {
      font-size: 0.875rem;
      font-weight: 400;
      letter-spacing: 0;
    }
  }
`;
