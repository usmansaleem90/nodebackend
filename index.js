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

const convertToHtml = (plainText) => {
    // Replace **bold text** with <strong>bold text</strong>
    let htmlText = plainText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  
    // Replace newlines (\n) with <br> to maintain line breaks
    htmlText = htmlText.replace(/\n/g, '<br>');
  
    return htmlText;
  };

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
      history: [],
    });
  const result = await chatSession.sendMessage(userInput);
    const sorted = convertToHtml(result.response.text())
    console.log(convertToHtml(result.response.text()));
    // const formattedResponse = `<b>${result.split('\n\n')[0]}</b><br><br>${responseText.split('\n\n')[1]}`; // Assuming the first line is the heading

    
    
    return res.status(200).json({ message: sorted });


  });
  
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
