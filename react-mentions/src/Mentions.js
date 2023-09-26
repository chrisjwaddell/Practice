import { useState } from "react"
import { MentionsInput, Mention } from "react-mentions"
import defaultStyle from "./defaultStyle"

// https://www.youtube.com/watch?v=EB3x9ge6w9c
const users = [
	{ id: "1", display: "Jack" },
	{ id: "2", display: "Diane" },
	{ id: "3", display: "Mary" },
	{ id: "4", display: "Bart" },
]

const fetchUsers = async (query, callback) => {
	if (!query) {
		return
	}
	let f = await fetch("http://localhost:3000/users", {
		method: "GET", // or 'PUT'
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
	})
		.then((resp) => resp.json())
		.then((j) => j.filter((per) => per.name.toLowerCase().includes(query.toLowerCase())))
		.then((res) => res.map((cur) => ({ id: String(cur.id), display: cur.name })))
		.catch((err) => console.error(err))
	// console.log(f)
	callback(f)
}

// id must be string otherwise we get a strange error
// 'display' needs to be the display field I think

export default function Mentions({ single }) {
	const [value, setValue] = useState("")
	return (
		<div>
			{single ? (
				<MentionsInput
					style={defaultStyle}
					value={value}
					onChange={(e) => setValue(e.target.value)}
					placeholder={"Mention people using @"}
					a11ySuggestionsListLabel={"Suggested mentionss"}
				>
					<Mention style={{ backgroundColor: "#cee4e5" }} data={fetchUsers} />
				</MentionsInput>
			) : (
				<MentionsInput
					singleLine
					style={defaultStyle}
					value={value}
					onChange={(e) => setValue(e.target.value)}
					placeholder={"Mention people using @"}
					a11ySuggestionsListLabel={"Suggested mentionss"}
				>
					<Mention style={{ backgroundColor: "#cee4e5" }} data={users} />
				</MentionsInput>
			)}
		</div>
	)
}
