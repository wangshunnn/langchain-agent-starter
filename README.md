# LangChain Agent Starter

这是一个用于学习 LangChain Agent 的简单示例项目。它演示了如何使用 TypeScript 创建一个自定义工具（Tool）并将其集成到一个基于 OpenAI 兼容接口（这里使用的是 SiliconFlow 的 Qwen 模型）的 Agent 中。

## 功能特性

- 使用 TypeScript 编写
- 集成 `@langchain/openai` 和 `langchain`
- 定义了一个自定义工具 `get_weather` (模拟天气查询)
- 使用 Zod 进行参数校验
- 默认配置了 SiliconFlow API (Qwen/Qwen2.5-72B-Instruct)

## 前置要求

- Node.js
- pnpm

## 安装

```bash
pnpm install
```

## 配置

在项目根目录下创建一个 `.env` 文件，并参考 `.env.example` 文件添加你的 LLM API Key：

```dosini
# .env
SILICON_API_KEY=your_api_key_here
```

## 运行

编译运行：

```bash
pnpm start
```

或者，你可以直接通过 `tsx` 或 `ts-node` 来直接运行 TS 文件：

```bash
npx tsx src/index.ts
```

## 代码结构

- `src/index.ts`: 主要逻辑文件，包含 Agent 的创建、工具定义和调用。
