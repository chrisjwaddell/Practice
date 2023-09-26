import React, { useState, useEffect } from "react"
import Card from "./Card.js"

export default function Board() {
	const [board, setBoard] = useState([])
	const [playingState, setPlayingState] = useState([])
	const [count, setCount] = useState(0)

	// stat - empty
	// stat - paired
	// stat - active
	function handleClick(id, idx) {
		console.log(id, idx)
		let newBoard = [...board]

		console.log("count - " + count)
		if (count === 16) {
			alert("Game over")
		}

		if (newBoard[idx].stat === "paired") {
			console.log("Already matched, choose another card")
		} else if (newBoard[idx].stat === "active") {
			console.log("Choose another card")
		} else {
			newBoard[idx].stat = "active"
			if (playingState.length < 1) {
				setPlayingState([id])
			} else if (playingState.length === 1) {
				if (id === playingState[0]) {
					console.log("matched")
					newBoard.forEach(function (cur, idx) {
						if (cur.stat === "active") {
							newBoard[idx].stat = "paired"
						}
					})
					setCount((prevCount) => prevCount + 2)
				} else {
					newBoard.forEach(function (cur, idx) {
						if (cur.stat === "active") {
							newBoard[idx].stat = "active"
						}
					})
				}
				setPlayingState([id, id])
			} else {
				newBoard.forEach(function (cur, idx) {
					if (cur.stat === "active") {
						newBoard[idx].stat = ""
					}
				})
				setPlayingState([])
			}
			setBoard(newBoard)
			if (count === 14) {
				alert("Game over")
			}
		}

		console.log(newBoard)
		console.log(playingState)
		// setBoard(newBoard)
	}

	useEffect(() => {
		const arrBoard = Array(16)
		// console.log(arrBoard)

		const rand = () => Math.round(Math.random() * 15)

		function putPairsIn(pairNum) {
			let r = rand()
			// if (!arrBoard[r]) arrBoard[r] = pairNum
			while (arrBoard[r]) {
				r = rand()
			}
			arrBoard[r] = { id: pairNum, stat: "" }
		}

		for (let i = 1; i < 9; i += 1) {
			putPairsIn(i)
			putPairsIn(i)
		}

		console.log(arrBoard)
		setBoard(arrBoard)
	}, [])

	return (
		<div>
			<div className="gap o-flex wrap">
				{board.map((card, idx) => (
					<Card
						key={idx}
						id={card.id}
						idx={idx}
						stat={card.stat}
						handleClick={() => handleClick(card.id, idx)}
					/>
				))}
			</div>
		</div>
	)
}
