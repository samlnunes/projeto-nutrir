import React from "react";

import { Container } from "./styles";

const Sobre: React.FC = () => {
  return (
    <Container>
      <p>
        A <span>Projeto Nutrir</span> é uma empresa dedicada a combater a fome
        de maneira eficiente e inovadora. Nossa missão é proporcionar soluções
        que possam fazer a diferença na vida das pessoas em situação de
        vulnerabilidade alimentar. Através de nossa plataforma, oferecemos uma
        abordagem abrangente para ajudar a enfrentar esse desafio global.
      </p>

      <p>
        A principal ferramenta da <span>Projeto Nutrir</span> é uma plataforma
        baseada em mapeamento, que utiliza tecnologia de ponta para identificar
        e destacar os locais que recebem alimentos e estão necessitando de
        doações. Essa abordagem visa conectar de forma eficiente doadores e
        instituições, simplificando o processo de doação e maximizando o impacto
        positivo.
      </p>

      <p>
        Além disso, contamos com a colaboração da IA ChatGPT, uma tecnologia
        avançada de inteligência artificial. Através dela, a plataforma é capaz
        de gerar combinações personalizadas de quatro produtos essenciais para
        doação, levando em consideração as necessidades específicas de cada
        instituição. Essa funcionalidade única facilita o processo de doação
        para os usuários, permitindo que eles façam a diferença de maneira
        eficaz.
      </p>

      <p>
        Acreditamos que a doação vai além de ser um ato de generosidade; é
        também uma oportunidade de criar um impacto positivo e gratificante na
        vida dos doadores. Por isso, desenvolvemos um sistema de recompensas na{" "}
        <span>Projeto Nutrir</span>. Cada vez que os usuários realizam doações,
        eles acumulam coins, uma moeda virtual exclusiva de nossa plataforma.
        Essas coins podem ser trocadas por cupons de desconto em lojas renomadas
        em todo o Brasil. Dessa forma, além de ajudar a combater a fome, os
        doadores também podem desfrutar de benefícios exclusivos, incentivando
        ainda mais a participação e o engajamento de todos.
      </p>

      <p>
        Na <span>Projeto Nutrir</span>, acreditamos que a solidariedade e a
        responsabilidade social são fundamentais para a construção de uma
        sociedade mais justa e igualitária. Nossa plataforma, aliada à
        inteligência artificial e ao programa de recompensas, busca engajar
        doadores de forma significativa, tornando o processo de doação mais
        prático, gratificante e interativo. Junte-se a nós nessa missão de fazer
        a diferença, ajudando a combater a fome e promovendo um impacto positivo
        na vida daqueles que mais precisam.
        <span>Unidos, podemos criar um futuro melhor para todos.</span>
      </p>
    </Container>
  );
};

export default Sobre;
