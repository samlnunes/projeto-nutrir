import React from "react";
import { Container, Top, BoxInfos, Content } from "./styles";
import { useCollectPoint } from "@/utils/context/CollectPoint";
import HomeIcon from "@mui/icons-material/Home";
import CloseIcon from "@mui/icons-material/Close";
import PhoneIcon from "@mui/icons-material/Phone";

const CardOng: React.FC = () => {
  const { collectPointId, setCollectPointId } = useCollectPoint();

  return (
    <Container>
      <Top>
        <button onClick={() => setCollectPointId(null)}>
          <CloseIcon />
        </button>
      </Top>
      <BoxInfos>
        <img src="/victorias-logo.jpg" alt="" />
        <h1>Ong Victórias Pela Vida</h1>
      </BoxInfos>
      <Content>
        <div>
          <HomeIcon />
          <p>
            Rua Salvador Pela, 75 - Lauzane Paulista, São Paulo - SP, 02441-090
          </p>
        </div>
        <div>
          <PhoneIcon />
          <p>(11) 99202-8118</p>
        </div>
        <div>
          <p>
            "QUEM SOMOS? Desde 2013, a ONG Victórias pela Vida, está sediada na
            Zona Norte de São Paulo e composto por voluntários que compreendem e
            apoiam a mesma intenção da instituição,“respeito básico pelo
            próximo”. Sem distinção de sexo, raça, trabalho, credo religioso e
            convicções políticas a instituição têm como principal objetivo
            ajudar sem olhar a quem, por meio de uma relação de assistência,
            carinho e amizade. O QUE FAZEMOS? Desenvolvemos diversos projetos e
            campanhas com a finalidade de ajudar semanalmente muitos moradores
            em situação de rua, gerando momentos inesquecíveis nas entregas de
            marmitas, prestamos também assistência às famílias de baixa renda
            além de promover grandes ações (mutirões) às aldeias indígenas e
            comunidades carentes."
          </p>
        </div>
      </Content>
    </Container>
  );
};

export default CardOng;
