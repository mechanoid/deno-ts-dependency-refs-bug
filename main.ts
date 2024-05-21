// @deno-types="npm:@types/express"
import express, { Request, Response } from "npm:express"

const app = express()
app.get((req: Request, res: Response) => {
  console.log(req.method) // props like method no longer defined
  res.send('ok') // res methods also not resolvable
})
