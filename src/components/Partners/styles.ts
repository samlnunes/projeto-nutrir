import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #ffffff;
  height: 100%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  img {
    max-width: 70px;
  }

  span {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 59px;
    text-align: center;

    color: #101828;
  }
`;
