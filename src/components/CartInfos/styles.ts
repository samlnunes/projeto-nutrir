import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background-color: #eae3cf;
  border-radius: 10px;
  cursor: pointer;
  position: relative;

  &:hover {
    opacity: 0.2;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 60px;
    margin-bottom: 5px;
    border-radius: 100%;

    @media (max-width: 768px) {
      max-width: 50px;
    }
  }

  h1 {
    font-size: 16px !important;
    margin-bottom: 5px;
    max-width: 100px;
    text-align: center;
    min-height: 30px;
  }

  p {
    font-size: 14px;
  }
`;

export const Coins = styled.div`
  z-index: 9;
  position: absolute;
  display: flex;
  align-items: center;
  gap: 10px;
  top: 50%;
  left: calc(50% - 37.5px);
  width: 75px;
`;
