import React from "react"

export default function Card({ id, idx, stat, handleClick }) {
	// return <div className="gap flex--1 card"></div>

	return (
		<div
			className={stat === "active" || stat === "paired" ? "flipped gap card" : "gap card"}
			onClick={() => handleClick()}
		>
			<img src={`img/${id}.svg`} />
		</div>
	)
}
