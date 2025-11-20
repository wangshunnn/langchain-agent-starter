import "dotenv/config"
import * as z from "zod"
import { createAgent, tool } from "langchain"
import { ChatOpenAI } from "@langchain/openai"

const getWeather = tool(({ city }) => `${city} 天气阴晴不定!`, {
  name: "get_weather",
  description:
    "通过搜索引擎获取指定城市的实时天气信息，包括温度、天气状况等,其中温度是必须要包含的.",
  schema: z.object({
    city: z
      .string()
      .describe(
        "要查询天气的城市名称，例如：北京、上海、广州, 也可以具体到区, 上海市黄浦区"
      ),
  }),
})

const model = new ChatOpenAI({
  model: "Qwen/Qwen2.5-72B-Instruct",
  configuration: {
    baseURL: "https://api.siliconflow.cn/v1",
    apiKey: process.env.SILICON_API_KEY,
  },
})

const agent = createAgent({
  model,
  tools: [getWeather],
})

try {
  const response = await agent.invoke({
    messages: [{ role: "user", content: "北京海淀区什么天气?" }],
  })
  console.log("Agent Invoke Response:", response)
} catch (error) {
  console.error("Agent Invoke Error:", error)
}
