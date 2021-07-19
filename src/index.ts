import express from 'express'
import path from "path"
import router from './routes/github'
import bodyParser from 'body-parser'

const app = express()
const port = 8080

// Configure Express to use EJS
app.set( "view engine", "ejs" );
app.set( "views", path.join( __dirname, "views" ) );

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(router)

// start the Express server
app.listen(port, () => {
    console.log(`Listening to server http://localhost:${port}`)
})