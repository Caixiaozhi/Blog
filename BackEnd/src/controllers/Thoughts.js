import {
  createThoughts
} from 'app/modules/thoughts'

export default class Thoughts {
  static async publishThoughts(ctx) {
    const params = ctx.req.body
    const file = ctx.req.file
    const content = params.content
    const [status, body] = await createThoughts(content, file)
    ctx.status = status
    ctx.body = body
  }
}