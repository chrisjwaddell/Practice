import React, { useState, useEffect } from "react"
import NotesList from "./components/NotesList"
import { nanoid } from "nanoid"
import Search from "./components/Search"

function dateToDDMMYYYY(dt, seperator = "/") {
	let da = new Date(dt)

	let d = da.getDate() < 10 ? "0" + da.getDate() : da.getDate()
	let m = da.getMonth() < 9 ? "0" + Number(da.getMonth() + 1) : Number(da.getMonth() + 1)
	let y = da.getFullYear()
	return d + seperator + m + seperator + y
}

export default function App() {
	// const [notes, setNotes] = useState([
	// 	{ id: nanoid(), text: "First note", date: "28/09/2023" },
	// 	{ id: nanoid(), text: "2nd note", date: "18/08/2023" },
	// ])

	const [notes, setNotes] = useState(
		JSON.parse(localStorage.getItem("react-notes-app-data")) || []
	)

	const [searchText, setSearchText] = useState("")
	const [darkMode, setDarkMode] = useState(false)

	useEffect(() => {
		localStorage.setItem("react-notes-app-data", JSON.stringify(notes))
	}, [notes])

	function saveNote(txt) {
		const newNote = { text: txt, date: dateToDDMMYYYY(new Date(), "/"), id: nanoid() }
		console.log(newNote)
		setNotes([...notes, newNote])
	}

	function deleteNote(id) {
		console.log("delete Note")
		console.log(id)
		setNotes(notes.filter((n) => n.id !== id))
	}

	function handleToggleClick() {}

	return (
		<div
			className={darkMode ? "dark-mode" : ""}
			style={{ paddingTop: "50px", height: "100vh" }}
		>
			<div className="o-container">
				<div className="o-flex o-flex-column heading">
					<div className="o-flex x--between y--center">
						<h1>Notes</h1>
						<button
							className="c-btn c-btn--primary toggle"
							onClick={() => setDarkMode(!darkMode)}
						>
							Toggle Mode
						</button>
					</div>
					<div className="mt">
						{/* <input placeholder="New Note"></input> */}
						<Search handleSearchNote={setSearchText} />
					</div>
				</div>
				<NotesList
					notesList={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText.toLowerCase())
					)}
					handleAddNote={saveNote}
					handleDeleteNote={deleteNote}
				/>
			</div>
		</div>
	)
}
