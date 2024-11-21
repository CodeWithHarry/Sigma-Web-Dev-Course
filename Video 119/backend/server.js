import express  from "express"
import cors from "cors"
// import bodyParser from "body-parser" 
// Not Necessaryto import the BodyParser in the latest version
const app = express()
const port = 3000

app.use(cors()) 
// app.use(bodyParser.json())
// Now in the latest version you don't need to import body-parser.It is already in-built there with express.Now app.use(bodyParser.json()) can be replaced by app.use(express.json())
app.use(express.json());
app.get('/', (req, res) => { 
    res.send('Hello World!')
})

app.post('/', (req, res) => { 
    console.log(req.body)
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
