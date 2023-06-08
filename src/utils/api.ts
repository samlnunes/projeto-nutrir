import axios from 'axios';

const APP_ID = 'f4b6802f';
const APP_KEY = 'e89e2bfd417dfcd168fe36b2cb4df640';

export const searchFoods = async (queries: string[]) => {
  try {
    const foodDataList = await Promise.all(
      queries.map(async (query) => {
        const response = await axios.get('https://api.edamam.com/api/food-database/v2/parser', {
          params: {
            ingr: query,
            app_id: APP_ID,
            app_key: APP_KEY,
          },
        });

        const food = response.data.hints[0].food;
        const image = food.image;
        const nutrients = food.nutrients;

        return { query, image, nutrients };
      })
    );    

    return foodDataList;
  } catch (error) {
    console.error('Erro ao buscar alimentos:', error);
    return null;
  }
};

