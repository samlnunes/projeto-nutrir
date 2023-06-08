import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  max-width: 50vw;
  border-radius: 10px;
  margin: 100px auto 20px auto;
  padding: 70px 4vw;
  gap: 20px;
  display: flex;
  flex-direction: column;

  p {
    font-size: 18px;
    line-height: 1.6;
    color: #333333;
  }

  span {
    font-weight: 800;
    color: #ed2647;
  }

  @media (max-width: 768px) {
    margin: 100px 4vw 30px 4vw;
    max-width: 100%;
    padding: 40px 4vw;
  }
`;
