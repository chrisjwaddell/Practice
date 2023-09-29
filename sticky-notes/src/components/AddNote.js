import React, { useState } from "react"

export default function AddNote({ handleAddNote }) {
	const [note, setNote] = useState("")

	const CHARACTER_LIMIT = 200

	function handleChange(e) {
		setNote(e.target.value)
	}

	function handleSaveClick() {
		handleAddNote(note)
		setNote("")
	}

	return (
		<div className="note new__note">
			<textarea
				rows="8"
				cols="10"
				placeholder="Type to add a new....."
				onChange={handleChange}
				maxLength="200"
				value={note}
			></textarea>
			<div className="note__footer">
				<small>{CHARACTER_LIMIT - note.length} Remaining</small>
				<button
					className="save c-btn"
					onClick={() => {
						if (note.trim().length > 0) {
							handleAddNote(note)
							setNote("")
						}
					}}
				>
					Save
				</button>
			</div>
		</div>
	)
}
