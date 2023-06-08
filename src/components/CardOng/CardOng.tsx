import React, { useEffect, useState } from "react";
import { Container, Top, BoxInfos, Content } from "./styles";
import { useCollectPoint } from "@/utils/context/CollectPoint";
import HomeIcon from "@mui/icons-material/Home";
import CloseIcon from "@mui/icons-material/Close";
import { Data } from "@/pages/api/ongs";
import { Cart } from "@/sections";

const CardOng: React.FC = () => {
  const { collectPointId, setCollectPointId } = useCollectPoint();
  const [point, setPoint] = useState<Data>();
  const [cart, setCart] = useState(false);

  useEffect(() => {
    fetch("/api/ongs")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPoint(data.find((item: any) => item.id === collectPointId));
      });
  }, [collectPointId]);

  return (
    <Container>
      <Top>
        <button onClick={() => setCollectPointId(null)}>
          <CloseIcon />
        </button>
      </Top>
      {cart ? (
        <>
          <Cart />
        </>
      ) : (
        <>
          <BoxInfos>
            <img src={point?.image} alt="" />
            <h1>{point?.name}</h1>
          </BoxInfos>
          <Content>
            <div>
              <HomeIcon />
              <p>{point?.location.address}</p>
            </div>
            <button className="doar" onClick={() => setCart(true)}>
              Doar
            </button>
          </Content>
        </>
      )}
    </Container>
  );
};

export default CardOng;
