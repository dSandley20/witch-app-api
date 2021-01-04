import * as dotenv from "dotenv"
import express from 'express'

//NOTE: you HAVE to define the path of the env file when using dotenv in typescript
//NOTE: so also if you are trying to call it from the root of the project as a whole you don't need to cd back a dir
dotenv.config({path: '.env'})

const app : express.Application = express()
const dev_port : string = process.env.dev_port

//NOTE: making sure that the express app is working properly with TS
app.get('/', (req : express.Request, res: express.Response) => {
    res.send('Hello World!')
})
  
app.listen(dev_port, () => {
    console.log(`Example app listening at http://localhost:${dev_port}`)
})