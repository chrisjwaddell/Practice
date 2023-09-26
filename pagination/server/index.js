const mysql = require("mysql2")
const express = require("express")
const cors = require("cors")

const app = express()

require("dotenv").config()

// const cors = require("cors")

const pool = mysql
	.createPool({
		host: process.env.MYSQL_HOST,
		user: process.env.MYSQL_USER,
		password: process.env.MYSQL_PWD,
		database: process.env.MYSQL_DATABASE,
	})
	.promise()

async function getUsers() {
	const [rows] = await pool.query("SELECT * FROM people LIMIT 400")
	console.log(rows)
	return rows
}

app.get("/getusers", cors(), async (req, res) => {
	console.log("hit /getusers")
	const [rows] = await pool.query("SELECT * FROM people LIMIT 400")
	// console.log(rows)
	res.json(rows)
})

// getUsers()

app.listen(25055, () => console.log("Server listening on 25055"))
