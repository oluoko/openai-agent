import { z } from 'zod'
import type { ToolFn } from '../../types'
import { openai } from '../ai'

export const generateImageToolDefinition = {
  name: 'generate_image',
  parameters: z.object({
    prompt: z
      .string()
      .describe(
        `prompt for the image. be sure to consider the  user's original message when making the prompt. if you are unsure, then ask the user  to provide more details`
      ),
  }),
  description: 'generate an image based on a prompt',
}

type Args = z.infer<typeof generateImageToolDefinition.parameters>

export const generateImage: ToolFn<Args, string> = async ({
  toolArgs,
  userMessage,
}) => {
  const response = await openai.images.generate({
    model: 'dall-e-3',
    prompt: toolArgs.prompt,
    n: 1,
    size: '1024x1024',
  })

  const imageUrl = response.data[0].url!

  return imageUrl
}
