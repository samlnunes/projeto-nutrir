// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Location = {
  address: string;
  lat: number;
  lng: number;
};

export type Data = {
  name: string;
  id: number;
  image: string;
  location: Location;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json([
    {
      id: 1,
      name: "Mooca Solidária",
      image: "/logo-mooca.png",
      location: {
        address: "R. Padre Raposo, 397 - Mooca, São Paulo - SP",
        lat: -23.55956,
        lng: -46.59724,
      },
    },
    {
      id: 2,
      name: "Centro Comunitário Nossa Senhora Aparecida",
      image: "/ccnsa.jpeg",
      location: {
        address:
          "Rua Condessa Amália Matarazzo, 13 Jd. Peri, Zona Urbana Centro",
        lat: -23.4555,
        lng: -46.65247,
      },
    },
    {
      id: 3,
      name: "Associação Recanto da Vovó de Assistência Social",
      image: "/recanto.jpeg",
      location: {
        address: "Av. Bosque Da Saúde 346, Zona Urbana Sul",
        lat: -23.61181,
        lng: -46.63486,
      },
    },
    {
      id: 4,
      name: "Centro de Capacitação para a Vida - Projetos Neemias",
      image: "/neemias.jpeg",
      location: {
        address: "Av. Jose Maria Whitaker, 2000 -, Zona Urbana Sul",
        lat: -23.61736,
        lng: -46.64353,
      },
    },
    {
      id: 5,
      name: "Obras Sociais Nossa Senhora Aquiropita",
      image: "/obras-sociais.jpeg",
      location: {
        address: "Rua Treze De Maio, 478 - Bela Vista, Zona Urbana Centro",
        lat: -23.557302,
        lng: -46.646632,
      },
    },
    {
      id: 6,
      name: "Associação Cívica Feminina",
      image: "/acf.jpg",
      location: {
        address: "Av. Francisco Matarazzo, 385 - Água Branca, São Paulo - SP",
        lat: -23.530007,
        lng: -46.667434,
      },
    },
    {
      id: 7,
      name: "Instituto Lygia Jardim",
      image: "/lygia.jpg",
      location: {
        address: "Rua Dr. Cândido Espinheira, 79 - Perdizes, Zona Urbana Centro",
        lat: -23.534597,
        lng: -46.660892,
      },
    },
    {
      id: 8,
      name: "Fundação Jovem Profissional",
      image: "/jovem.jpeg",
      location: {
        address: "Av. Nove De Julho, 399 - Bela Vista, Zona Urbana Centro",
        lat: -23.54985,
        lng: -46.642336,
      },
    },
    {
      id: 9,
      name: "Grêmio Gaviões da Fiel Torcida - Força Independente",
      image: "/gavioes.jpg",
      location: {
        address: "Rua Cristina Tomaz - 183 - Bom Retiro, Zona Urbana Centro",
        lat: -23.519909,
        lng: -46.645141,
      },
    },
    {
      id: 10,
      name: "Instituto de Desenvolvimento Social e Cidadania de São Paulo",
      image: "/idsc.jpg",
      location: {
        address: "Rua Silveira Martins, 72 - 3º Andar Sé, Zona Urbana Centro",
        lat: -23.551669,
        lng: -46.631284,
      },
    },
  ]);
}
