import express from 'express'
import router from './routes/github'

const app = express()
const port = 8080

app.use(router)

// start the Express server
app.listen(port, () => {
    console.log(`Listening to server http://localhost:${port}`)
})