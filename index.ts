import { weatherAgent } from "@/agent/weather-agent";
import { printStream } from "@/util/print-stream";

const result = weatherAgent.stream({
  prompt: "What is the weather in Tokyo?",
});

await printStream(result);
