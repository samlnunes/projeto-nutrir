import { useEffect, useState } from "react";
import { Container, Box, Coins } from "./styles";
import { searchFoods } from "@/utils/api";
import MonetizationOnTwoToneIcon from "@mui/icons-material/MonetizationOnTwoTone";
import Modal from "../Modal/Modal";

interface CartInfosProps {
  infos: any;
  coins: number;
}

const CartInfos: React.FC<CartInfosProps> = ({ infos, coins }) => {
  const [foodDataList, setFoodDataList] = useState<any>();
  const [hovered, setHovered] = useState<boolean>(false);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    if (!infos) return;
    handleSearch();
  }, [infos]);

  const handleSearch = async () => {
    const data = await searchFoods(infos);
    setFoodDataList(data);
  };

  function translateString(input: string) {
    let translation = "";

    switch (input) {
      case "Rice":
        translation = "Arroz";
        break;
      case "Beans":
        translation = "Feijão";
        break;
      case "Pasta":
        translation = "Massa";
        break;
      case "Canned Vegetables":
        translation = "Legumes Enlatados";
        break;
      case "Canned Fish":
        translation = "Peixe Enlatado";
        break;
      case "Sugar":
        translation = "Açúcar";
        break;
      case "Cereal":
        translation = "Cereal";
        break;
      case "Oatmeal":
        translation = "Aveia";
        break;
      case "Cookies":
        translation = "Bolachas";
        break;
      case "Nuts":
        translation = "Nozes";
        break;
      case "Dried Fruit":
        translation = "Frutas Secas";
        break;
      case "Canned Meat":
        translation = "Carne Enlatada";
        break;
      case "Flour":
        translation = "Farinha";
        break;
      case "Canned Tomatoes":
        translation = "Tomates Enlatados";
        break;
      case "Canned Beans":
        translation = "Feijão Enlatado";
        break;
      case "Canned Corn":
        translation = "Milho Enlatado";
        break;
      default:
        translation = "Tradução não encontrada.";
    }

    return translation;
  }

  return (
    <div style={{ position: "relative" }}>
      <Container
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setModalShow(true)}
      >
        {foodDataList?.map((item: any, key: number) => (
          <Box>
            <h1>{translateString(item?.query)}</h1>
            {item.image && <img src={item.image} alt={`Food ${key}`} />}
          </Box>
        ))}
      </Container>
      {hovered && (
        <Coins>
          <h1>{coins}</h1>
          <MonetizationOnTwoToneIcon
            style={{ color: "#daa520" }}
            fontSize="large"
          />
        </Coins>
      )}
      <Modal open={modalShow} setClose={() => setModalShow(false)} />
    </div>
  );
};

export default CartInfos;
