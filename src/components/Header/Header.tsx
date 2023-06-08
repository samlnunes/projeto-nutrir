import React from "react";

import MonetizationOnTwoToneIcon from "@mui/icons-material/MonetizationOnTwoTone";
import { Container, BoxCoins, Nav } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Nav>
        <a href="/sobre">Sobre nós</a>
      </Nav>
      <a href="/">
        <img src="/logo.svg" alt="" />
      </a>
      <BoxCoins>
        <span>30</span>
        <MonetizationOnTwoToneIcon
          style={{ color: "#daa520" }}
          fontSize="large"
        />
      </BoxCoins>
    </Container>
  );
};

export default Header;
