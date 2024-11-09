# OpenAI Agent

## Setup Instructions

This repo requires **Node.js version 20+** or **bun v1.0.20**.

You will need an [API Key from OpenAI](https://platform.openai.com/settings/organization/api-keys).

```bash
git clone https://github.com/oluoko/openai-agent/.git
cd agents-production
git checkout step/1
npm install # or bun install
```

or

```bash
bun install
```

install the dependencies

To run:

```bash
bun run index.ts
```

## OpenAI API Key

Create an [API Key from OpenAI](https://platform.openai.com/settings/organization/api-keys) and save it in a `.env` file:

```
OPENAI_API_KEY='YOUR_API_KEY'
```

This project was created using `bun init` in bun v1.0.20. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
