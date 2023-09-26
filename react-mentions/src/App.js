import React from "react"
import Mentions from "./Mentions.js"

export default function App() {
	return (
		<div
			style={{
				marginLeft: "auto",
				marginRight: "auto",
				paddingLeft: "25px",
				paddingRight: "25px",
			}}
		>
			{/* <textarea rows="4" cols="100" /> */}
			<h2>Textarea</h2>
			<Mentions />
			<h2>Single Line</h2>
			<Mentions single={true} />
		</div>
	)
}
