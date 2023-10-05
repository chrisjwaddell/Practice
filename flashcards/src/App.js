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
	const [category, setCategory] = useState(0)
	// const [flashcards, setFlashcards] = useState(SAMPLE_DATA)

	const url = (categoryId) =>
		categoryId
			? `https://opentdb.com/api.php?amount=50&category=${categoryId}`
			: "https://opentdb.com/api.php?amount=50"

	function handleFilter(categoryId) {
		console.log("category - " + categoryId)
		setFlashcards(flashcards.filter((flashcard) => flashcard.category === categoryId))
		// return flashcards
	}

	useEffect(() => {
		// get full category list
		const fetchData = async () => {
			const data = await fetch("https://opentdb.com/api_category.php")
			const json = await data.json()
			console.log("App useEffect - json")
			console.log(json)
			// The first item in the list is blank ie no category
			const newArray = [{ id: 0, name: "" }].concat(json.trivia_categories)
			setCategories(newArray)
			// setCategories(json.trivia_categories)
		}

		fetchData().catch((err) => console.log(err))

		// 50 questions with no category
		fetch("https://opentdb.com/api.php?amount=50")
			.then((resp) => resp.json())
			.then((j) => {
				console.log("j 50 q's")
				console.log(j)
				console.log(j.results)
				return j.results
			})
			.then((arrQuestions) => {
				return arrQuestions.map((cur, idx) => ({
					id: `${idx}-${Date.now()}`,
					category: cur.category,
					question: decodeString(cur.question),
					answer: decodeString(cur.correct_answer),
				}))
			})
			.then((final) => {
				// console.log("Final")
				// console.log(final)
				setFlashcards(final)
				// final.map((cur) => cur.category)
				// let c = Array.from(new Set(final.map((item) => item.category))).sort()
				// console.log(c)
				// setCategories(c)
			})
	}, [])

	useEffect(() => {
		//https://opentdb.com/api.php?amount=10&category=22
		fetch(url(category))
			.then((resp) => resp.json())
			.then((json) => {
				console.log("json in 2nd useEffect")
				console.log(json)
				return json
			})
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
				// final.map((cur) => cur.category)
				// let c = Array.from(new Set(final.map((item) => item.category))).sort()
				// console.log(c)
				// setCategories(c)
			})
	}, [category])

	return (
		<>
			<Header categoryList={categories} onFilter={(cat) => setCategory(cat)} />
			<div className="o-container">
				<FlashcardList flashcards={flashcards} />
			</div>
		</>
	)
}
