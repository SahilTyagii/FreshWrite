import express from "express"
import bodyParser from "body-parser"

const app = express()
const port = 3000
var blogs = {
    
}

// for (const[name, content] of Object.entries(blogs)) {
//     console.log(`${name}: ${content}`)
// }

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.get("/create", (req, res) => {
    res.render("create.ejs")
})

app.post("/submit", (req, res) => {
    const heading = req.body["title"]
    const data = req.body["data"]
    // console.log(`title: ${heading} data: ${data}`)
    blogs[heading] = data

    var title = []
    var content = []
    var wordCount = []
    for (const[name, data] of Object.entries(blogs)) {
        title.push(name)
        content.push(data)
        wordCount.push(data.split(" ").length)
    }
    res.render("posts.ejs", {
        names: title,
        blogs: content,
        words: wordCount,
    })
})

app.post("/read", (req, res) => {
    // console.log(`body: ${req.body["title"]}`)
    const name = req.body["title"]
    res.render("read.ejs", {
        title: name,
        content: blogs[name]
    })
})

app.post("/edit", (req, res) => {
    const name = req.body["title"]
    res.render("edit.ejs", {
        heading: name,
        content: blogs[name],
    })
})

app.post("/update", (req, res) => {
    const heading = req.body["title"]
    const data = req.body["data"]
    blogs[heading] = data

    var title = []
    var content = []
    var wordCount = []
    for (const[name, data] of Object.entries(blogs)) {
        title.push(name)
        content.push(data)
        wordCount.push(data.split(" ").length)
    }
    res.render("posts.ejs", {
        names: title,
        blogs: content,
        words: wordCount,
    })
})

app.post("/delete", (req, res) => {
    const heading = req.body["title"]
    delete blogs[heading]

    var title = []
    var content = []
    var wordCount = []
    for (const[name, data] of Object.entries(blogs)) {
        title.push(name)
        content.push(data)
        wordCount.push(data.split(" ").length)
    }
    res.render("posts.ejs", {
        names: title,
        blogs: content,
        words: wordCount,
    })
})

app.get("/posts", (req, res) => {
    // for (var member in blogs) delete blogs[member];
    var title = []
    var content = []
    var wordCount = []
    for (const[name, data] of Object.entries(blogs)) {
        title.push(name)
        content.push(data)
        wordCount.push(data.split(" ").length)
    }
    res.render("posts.ejs", {
        names: title,
        blogs: content,
        words: wordCount,
    })
})

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}.`)
})