import React, { useState } from "react"
import Note from "./Note.js"
import AddNote from "./AddNote.js"

export default function NotesList({ notesList, handleAddNote, handleDeleteNote }) {
	return (
		<div className="notes-list mt">
			{notesList.map((n) => {
				return (
					<Note
						text={n.text}
						date={n.date}
						id={n.id}
						handleDeleteNote={handleDeleteNote}
					/>
				)
			})}
			<AddNote handleAddNote={handleAddNote} />
		</div>
	)
}
