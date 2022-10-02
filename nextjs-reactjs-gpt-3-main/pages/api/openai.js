const OpenAI = require('openai-api');
const openai = new OpenAI(process.env.REACT_APP_API_URL);



export default async (req, res) => {
  let prompt = `Question: ${req.body.name}\n\nAnswer:\n`;
  const gptResponse = await openai.complete({
    engine: 'curie:ft-personal-2022-10-02-01-41-08',
    prompt: prompt,
    maxTokens: 256,
    temperature: 0.6,
    topP: 1,
    presencePenalty: 0,
    frequencyPenalty: 0.1,
    bestOf: 1,
    n: 1,
    stop: ["\\n", "END"]
});
  
  res.status(200).json({text: `${gptResponse.data.choices[0].text}`})
}
