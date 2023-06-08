import React, { useState } from "react";

import { Container } from "./styles";
import Modal from "../Modal/Modal";

export interface PartnersProps {
  name: string;
  logo: string;
  cash: number;
}

const Partners: React.FC<PartnersProps> = ({ cash, logo, name }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Container onClick={() => setModalShow(true)}>
        <img src={logo} alt="" />
        <span>{cash}% de desconto</span>
      </Container>
      <Modal open={modalShow} setClose={() => setModalShow(false)} />
    </>
  );
};

export default Partners;
