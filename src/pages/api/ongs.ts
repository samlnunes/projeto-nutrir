// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  id: number;
  image: string;
  phone: string;
  address: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res
    .status(200)
    .json([
      {
        id: 1,
        name: "Mooca Solidária",
        image: "/logo-mooca.png",
        phone: "",
        address: "R. Padre Raposo, 397 - Mooca, São Paulo - SP, 03118-000",
      },
      {
        id: 2,
        name: "IGREJA PENTECOSTAL ADONAI NISSI",
        image: "/logo-mooca.png",
        phone: "",
        address: "R. Samuel Morse, 74 - Cidade Monções, São Paulo - SP, 04576-060",
      },
      {
        id: 3,
        name: "Mooca Solidária",
        image: "/logo-mooca.png",
        phone: "",
        address: "R. Padre Raposo, 397 - Mooca, São Paulo - SP, 03118-000",
      },
      {
        id: 4,
        name: "Mooca Solidária",
        image: "/logo-mooca.png",
        phone: "",
        address: "R. Padre Raposo, 397 - Mooca, São Paulo - SP, 03118-000",
      },
    ]);
}
