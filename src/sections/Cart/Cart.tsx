import { searchFoods } from "@/utils/api";
import { useEffect, useState } from "react";
import { Container } from "./styles";
import { CartInfos } from "@/components";

const Cart: React.FC = () => {
  const [responseGPT, setResponseGPT] = useState([]);
  useEffect(() => {
    const responseString =
      '\n\n[\n    ["Rice", "Beans", "Pasta", "Canned Vegetables"],\n    ["Canned Fish", "Sugar", "Cereal", "Oatmeal"],\n    ["Cookies", "Nuts", "Dried Fruit", "Canned Meat"],\n    ["Flour", "Canned Tomatoes", "Canned Beans", "Canned Corn"]\n]';

    setResponseGPT(JSON.parse(responseString));
  }, []);

  return (
    <Container>
      <h1>Escolha seu pacote: </h1>
      {responseGPT?.map((array: any, index: number) => (
        <CartInfos
          key={index}
          infos={array}
          coins={Math.floor(Math.random() * (30 - 10 + 1)) + 10}
        />
      ))}
    </Container>
  );
};
export default Cart;
