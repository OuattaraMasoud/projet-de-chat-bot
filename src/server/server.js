

const express = require('express');
const bodyParser = require('body-parser');
const { OpenAIApi } = require('openai');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

const openai = new OpenAIApi({ key: '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' }); // Remplacez 'YOUR_API_KEY' par votre clé API OpenAI

app.post('/chat', async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = openai
    .createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: userMessage }],    });

    const botResponse = response.choices[0].text;

    res.json({ message: botResponse });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la communication avec le chatbot' });
  }
});

app.listen(port, () => {
  console.log(`Serveur écoutant sur le port ${port}`);
});




