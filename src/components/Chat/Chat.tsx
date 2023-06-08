import { useEffect, useState } from "react";
import axios from "axios";

const Chat = () => {
  const [response, setResponse] = useState();

  const getGPT = async () => {
    const response = await axios.post(
      "https://api.openai.com/v1/engines/text-davinci-003-playground/completions",
      {
        prompt: "Generate an array with 4 subarrays, each containing 4 commonly donated non-perishable household food items in Brazil in English.",
        temperature: 0.22,
        max_tokens: 500,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      },
      {
        headers: {
          Authorization:
            "Bearer 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",
        },
      }
    );

    setResponse(response.data.choices[0].text.trim());
  };

  useEffect(() => {
    getGPT();
  }, []);

  return response ?? <></>;
};

export default Chat;
