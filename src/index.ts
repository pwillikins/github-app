import express from 'express'

const app = express()
const port = 8080

app.get("/", (req: express.Request, res: express.Response) => {
    res.send("My Simple Github App")
})

// start the Express server
app.listen(port, () => {
    console.log(`Listening to server http://localhost:${port}`)
})