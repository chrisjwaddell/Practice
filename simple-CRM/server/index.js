const mysql = require("mysql2")
const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

require("dotenv").config()

const pool = mysql
	.createPool({
		host: process.env.MYSQL_HOST,
		user: process.env.MYSQL_USER,
		password: process.env.MYSQL_PWD,
		database: process.env.MYSQL_DATABASE,
	})
	.promise()

app.post("/api/add", async (req, res) => {
	console.log("hit add")
	console.log(req.body)
	const { firstname, lastname, email, mobile } = req.body
	console.log(firstname, lastname, email, mobile)
	const qry =
		"INSERT INTO people (firstName, lastName, fullName, email, mobileNumber) VALUES (?, ?, ?, ?, ?)"
	await pool
		.query(
			qry,
			[firstname, lastname, firstname + " " + lastname, email, mobile],
			(err, result) => {
				if (error) {
					console.log(err)
					res.send({ message: "error" })
				} else {
					res.send({ message: "success" })
				}
			}
		)
		.then((resp) => res.send({ message: resp }))
})

app.delete("/api/remove/:id", async (req, res) => {
	console.log("remove")
	console.log(req.params.id)
	const { id } = req.params
	console.log(id)

	const qry = "DELETE FROM people WHERE person_id = ?"

	await pool
		.query(qry, [id], (err, result) => {
			console.log("in callback")
			if (error) {
				console.log("error")
				console.log(err)
				res.json({ message: "error" })
			} else {
				res.json({ message: "success" })
			}
		})
		.then((resp) => {
			console.log("then")
			res.send({ message: resp })
		})

	// await pool.query(test, (err, result) => {
	// 	console.log(err)
	// })
	// res.json({ message: "Done" })
})

app.get("/api/getusers", async (req, res) => {
	console.log("hit /getusers")
	const [rows] = await pool.query("SELECT * FROM people")
	// console.log(rows)
	res.json(rows)
})

// getUsers()

app.listen(25055, () => console.log("Server listening on 25055"))
