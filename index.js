// // const { OpenAI } = require("openai");
// // const openai = new OpenAI({
// //     apiKey: "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" // replace with your actual API key
// // });

// // const completion =  openai.chat.completions.create({
// //     model: "gpt-4",
// //     messages: [
// //         { "role": "user", "content": "write a haiku about ai" }
// //     ]
// // });

// // console.log(completion);
// import OpenAI from "openai";

// const openai = new OpenAI({
//   apiKey: "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",
// });

// const response = await openai.chat.completions.create({
//     model: 'gpt-3.5-turbo-instruct',
//     prompt: 'Write a tagline for an ice cream shop.'
//   });
// // const response = await openai.chat.completions.create({
// //   model: "whisper-1",
// //   prompt:"who is usamabinladin",
// // //   messages: [
// // //     {
// // //       "role": "system",
// // //       "content": [
// // //         {
// // //           "type": "text",
// // //           "text": "scdv"
// // //         }
// // //       ]
// // //     },
// // //     {
// // //       "role": "user",
// // //       "content": [
// // //         {
// // //           "type": "text",
// // //           "text": "]]]"
// // //         }
// // //       ]
// // //     },
// // //     {
// // //       "role": "assistant",
// // //       "content": [
// // //         {
// // //           "type": "text",
// // //           "text": "j"
// // //         }
// // //       ]
// // //     }
// // //   ],
// //   temperature: 0.4,
// //   max_tokens: 70,
// //   top_p: 1,
// //   frequency_penalty: 0,
// //   presence_penalty: 0,
// // //   response_format: {
// // //     "type": "text"
// // //   },
// // });

// console.log(response)



// import OpenAI from "openai";

// // const openai = new OpenAI();
// const openai = new OpenAI({
//     apiKey: "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"
// });
// async function main() {
//   const completion = await openai.completions.create({
//     model: "gpt-3.5-turbo-instruct",
//     prompt: "Say this is a test.",
//     max_tokens: 7,
//     temperature: 0,
//   });

//   console.log(completion);
// }
// main();

/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import express from 'express';
import cors from 'cors';

  const apiKey = "AIzaSyBRKscXbsAMXmSLC65z4rX14Tp_5Me0ueM";
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.0-pro",
  });
  // Initialize the app and set the port
const app = express();
const port = 3000;
// Use CORS middleware
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

  app.get("/" ,( req, res)=>{
   res.json({message:"Hello, world!"});
  })


  const generationConfig = {
    temperature: 0.9,
    topP: 1,
    maxOutputTokens: 2048,
    responseMimeType: "text/plain",
  };
  
  app.post('/chat', async (req, res) => {
    const { userInput } = req.body;

    const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "Look at this sequence of three shapes. What shape should come as the fourth shape? Explain your reasoning with detailed descriptions of the first shapes."},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "The fourth shape should be a hexagon. \n\nThe sequence starts with a triangle (3 sides), followed by a square (4 sides), and then a pentagon (5 sides).  The pattern is to add one side to the previous shape. \n"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "how is pm of pakistan"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "The Prime Minister of Pakistan is the chief executive of the Government of Pakistan. The prime minister is appointed by the President of Pakistan, with the approval of the National Assembly. The prime minister is responsible for running the government and implementing its policies.\n\nThe current Prime Minister of Pakistan is Shehbaz Sharif. He was elected on April 11, 2022, after a vote of no confidence in the previous Prime Minister, Imran Khan.\n\nThe Prime Minister of Pakistan has a number of powers and responsibilities, including:\n\n* Appointing and dismissing cabinet ministers\n* Advising the President on matters of government policy\n* Representing Pakistan at international summits and meetings\n* Commanding the armed forces\n\nThe Prime Minister of Pakistan is also the leader of the majority party in the National Assembly. The prime minister's term of office is five years, or until the National Assembly is dissolved.\n\nThe Prime Minister of Pakistan is a powerful position, and the holder of the office has a significant impact on the country's politics and economy.\n\nHere are some of the challenges facing the Prime Minister of Pakistan:\n\n* Economic instability: Pakistan has a large budget deficit and a high level of public debt. The prime minister must find ways to reduce spending and increase revenue without harming the economy.\n* Political instability: Pakistan has a history of political instability, and the prime minister must work to build consensus and maintain stability.\n* Security challenges: Pakistan faces a number of security challenges, including terrorism, sectarian violence, and border disputes with India. The prime minister must work to ensure the security of the country.\n* Corruption: Corruption is a major problem in Pakistan, and the prime minister must work to reduce corruption and improve transparency.\n\nDespite these challenges, the Prime Minister of Pakistan is a key figure in the country's politics and economy. The prime minister has the power to make a real difference in the lives of the Pakistani people."},
          ],
        },
      ],
    });
  
    const result = await chatSession.sendMessage(userInput);
    console.log(result.response.text());
    
    
    return res.status(200).json({ message: result.response.text() });


  });
  
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
