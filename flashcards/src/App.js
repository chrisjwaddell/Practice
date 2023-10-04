import React, { useState, useEffect } from "react"

import Header from "./components/Header"
import FlashcardList from "./components/FlashcardList"

function decodeString(str) {
	const textArea = document.createElement("textarea")
	textArea.innerHTML = str
	return textArea.value
}

export default function App() {
	const [flashcards, setFlashcards] = useState([])
	const [categories, setCategories] = useState([])
	// const [flashcards, setFlashcards] = useState(SAMPLE_DATA)

	function handleFilter(category) {
		console.log("category - " + category)
		setFlashcards(flashcards.filter((flashcard) => flashcard.category === category))
		// return flashcards
	}

	useEffect(() => {
		fetch("https://opentdb.com/api.php?amount=50")
			.then((resp) => resp.json())
			.then((j) => {
				return j.results.map((cur, idx) => ({
					id: `${idx}-${Date.now()}`,
					category: cur.category,
					question: decodeString(cur.question),
					answer: decodeString(cur.correct_answer),
				}))
			})
			.then((final) => {
				console.log(final)
				setFlashcards(final)
				final.map((cur) => cur.category)
				let c = Array.from(new Set(final.map((item) => item.category))).sort()
				console.log(c)
				setCategories(c)
			})
	}, [])

	return (
		<>
			<Header categoryList={categories} onFilter={handleFilter} />
			<div className="o-container">
				<FlashcardList flashcards={flashcards} />
			</div>
		</>
	)
}
