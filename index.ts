import { weatherAgent } from "./agent/weather-agent";

const { text } = await weatherAgent.generate({
  prompt: "What is the weather in Tokyo?",
});

console.log(text);
