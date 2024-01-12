# node-ai

Open-ai prompting with nodejs

### Installation guide

You need to have installed node on your machine then set your OPEN-AI PI KEY.

```bash
npm install
node index.js
```

#### Docs sample code

```js
import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();
```

## 🌐 Contact me:

[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://linkedin.com/in/adgehbirhane) [![Twitter](https://img.shields.io/badge/Twitter-%231DA1F2.svg?logo=Twitter&logoColor=white)](https://twitter.com/adgehbirhane) [![Telegram](https://img.shields.io/badge/Telegram-%232CA5E0.svg?logo=telegram&logoColor=white)](https://t.me/adgehbirhane)

[![Portfolio](https://img.shields.io/badge/Portfolio-%232696F1.svg?style=for-the-badge&logo=webflow&logoColor=white)](https://belaybirhanu.netlify.app)
