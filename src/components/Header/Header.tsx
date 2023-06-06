import React from "react";

import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import { Container, BoxCoins } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <img src="/logo.svg" alt="" />
      <BoxCoins>
        <span>30</span>
        <MonetizationOnTwoToneIcon style={{ color: "#daa520" }} fontSize="large" />
      </BoxCoins>
    </Container>
  );
};

export default Header;
