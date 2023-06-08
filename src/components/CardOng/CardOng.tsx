import React, { useEffect, useState } from "react";
import { Container, Top, BoxInfos, Content } from "./styles";
import { useCollectPoint } from "@/utils/context/CollectPoint";
import HomeIcon from "@mui/icons-material/Home";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
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
        {cart ? (
          <button onClick={() => setCart(false)}>
            <KeyboardReturnIcon style={{ color: "#000" }} />
          </button>
        ) : (
          <div />
        )}
        <button onClick={() => setCollectPointId(null)}>
          <CloseIcon style={{ color: "#000" }} />
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
            <a
              href={`https://maps.google.com/maps?q=${point?.location.lat},${point?.location.lng}`}
              target="_blank"
            >
              Como chegar
            </a>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button className="doar" onClick={() => setCart(true)}>
                Doar
              </button>
            </div>
          </Content>
        </>
      )}
    </Container>
  );
};

export default CardOng;
