import express from "express"
import bodyParser from "body-parser"

const app = express()
const port = 3000
var blogs = []

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}.`)
})