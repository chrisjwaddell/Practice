const express = require("express")
const cors = require("cors")

const app = express()

require("dotenv").config()

app.use(cors())

app.get("/", (req, res) => {
	res.json({})
})

app.listen(25055, () => console.log("Server listening on 25055"))
