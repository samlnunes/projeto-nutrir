// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  logo: string;
  cash: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json([
    { name: "O Boticário", logo: "/logo-boticario.png", cash: 2 },
    { name: "Carrefour", logo: "/logo-carrefour.png", cash: 3 },
    { name: "Casas Bahia", logo: "/logo-casas-bahia.png", cash: 3 },
    { name: "Eletrolux", logo: "/logo-eletrolux.png", cash: 1 },
    { name: "IFood", logo: "/logo-ifood.png", cash: 3.5 },
    { name: "Magazine Luiza", logo: "/logo-magazine-luiza.png", cash: 15 },
    { name: "Netshoes", logo: "/logo-netshoes.png", cash: 10 },
    { name: "Uber", logo: "/logo-uber.png", cash: 4 },
    { name: "O Boticário", logo: "/logo-boticario.png", cash: 2 },
    { name: "Carrefour", logo: "/logo-carrefour.png", cash: 3 },
    { name: "Casas Bahia", logo: "/logo-casas-bahia.png", cash: 3 },
    { name: "Eletrolux", logo: "/logo-eletrolux.png", cash: 1 },
    { name: "IFood", logo: "/logo-ifood.png", cash: 3.5 },
    { name: "Magazine Luiza", logo: "/logo-magazine-luiza.png", cash: 15 },
    { name: "Netshoes", logo: "/logo-netshoes.png", cash: 10 },
    { name: "Uber", logo: "/logo-uber.png", cash: 4 },
  ]);
}
