import React, { useState } from "react"
import { MdDeleteForever } from "react-icons/md"

export default function Note({ text, date, id, handleDeleteNote }) {
	const [note, setNote] = useState("")

	function handleDeleteClick() {
		handleDeleteNote(id)
		// setNote("")
	}

	return (
		<div className="note">
			<span>{text}</span>
			<div className="note__footer">
				<small>{date}</small>
				<MdDeleteForever
					className="delete-icon"
					onClick={handleDeleteClick}
				></MdDeleteForever>
			</div>
		</div>
	)
}
