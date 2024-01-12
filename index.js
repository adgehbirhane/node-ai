import OpenAI from "openai";
import readline from "readline";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.API_KEY,
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function main() {
  let userInput;

  while (true) {
    userInput = await askUser("Press '-1' for exit or \n Message ChatGPT: ");
    
    if (userInput === "-1") {
      console.log("Exiting...");
      break;
    }

    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: userInput }],
      model: "gpt-3.5-turbo",
    });

    console.log("AI's response:", completion.choices[0].message.content);
  }

  rl.close();
}

function askUser(question) {
  return new Promise(resolve => {
    rl.question(question, resolve);
  });
}

main();

