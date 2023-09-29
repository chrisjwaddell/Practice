import React from "react"
import { MdSearch } from "react-icons/md"

export default function Search({ handleSearchNote }) {
	return (
		<div className="search">
			<MdSearch className="search-icons" size="1.3cm" />
			<input
				type="text"
				placeholder="type to search...."
				className="search__input"
				onChange={(e) => handleSearchNote(e.target.value)}
			/>
		</div>
	)
}
