import React from "react";

import { Container } from "./styles";

export interface PartnersProps {
  name: string;
  logo: string;
  cash: number;
}

const Partners: React.FC<PartnersProps> = ({ cash, logo, name }) => {
  return (
    <Container>     
      <img src={logo} alt="" />
      <span>{cash}% de desconto</span>
    </Container>
  );
};

export default Partners;
