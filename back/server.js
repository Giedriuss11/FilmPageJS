const express = require("express")
const app = express()
const cors = require("cors")
const mainRouter = require("./router/mainRouter.js")
require("dotenv").config()

app.use(cors())
app.use(express.json())


app.use("/", mainRouter);

app.listen(4000, () => {
    console.log("Server is running on port 4000")
})