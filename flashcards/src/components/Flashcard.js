import React, { useState } from "react"

export default function Flashcard({ flashcard }) {
	const [flip, setFlip] = useState(false)

	return (
		<div className={flip ? "card flipped" : "card"} onClick={() => setFlip(!flip)}>
			<div className="front">{flashcard.question}</div>
			<div className="back">
				<p>{flashcard.answer}</p>
			</div>
		</div>
	)
}
