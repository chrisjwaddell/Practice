import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faBed,
	faPlane,
	faCar,
	faTaxi,
	faCalendarDays,
	faPerson,
} from "@fortawesome/free-solid-svg-icons"

import { DateRangePicker } from "react-date-range"

import "react-date-range/dist/styles.css" // main style file
import "react-date-range/dist/theme/default.css" // theme css file

const currentDate = () => {
	const dt = new Date()
	console.log(dt.toLocaleDateString())
	return dt.toLocaleDateString()
}

export default function Header() {
	function handleSelect(ranges) {
		console.log(ranges)
		// {
		//   selection: {
		//     startDate: [native Date Object],
		//     endDate: [native Date Object],
		//   }
		// }
	}

	const selectionRange = {
		startDate: new Date(),
		endDate: new Date(),
		key: "selection",
	}

	return (
		<div className="header">
			<div className="navcontainer">
				<div className="headerlist">
					<div className="headerlistitems">
						<div
							className="headerlistitem active"
							style={{
								border: "1px solid #ffffff",
								borderRadius: "15px",
							}}
						>
							<FontAwesomeIcon icon={faBed} />
							<span>Stays</span>
						</div>
						{/* </div> */}
						<div className="headerlistitem">
							<FontAwesomeIcon icon={faPlane} />
							<span>Fights</span>
						</div>
						<div className="headerlistitem">
							<FontAwesomeIcon icon={faCar} />
							<span>Car rentals</span>
						</div>
						<div className="headerlistitem">
							<FontAwesomeIcon icon={faBed} />
							<span>Attractions</span>
						</div>
						<div className="headerlistitem">
							<FontAwesomeIcon icon={faTaxi} />
							<span>Airport taxis</span>
						</div>
					</div>
				</div>
			</div>
			<h1 className="navcontainer">
				A lifetime of discounts? It&aposs Genius.
			</h1>
			<p className="navcontainer">
				Get rewarded for your travels - unlock instant savings of 10% or
				more wiht a free Lamabook account.
			</p>
			<div className="navcontainer">
				<button type="button" className="c-btn">
					Sign in / Register
				</button>
			</div>
			<div className="navcontainer">
				<div className="headerSearch">
					<div className="inputs o-flex">
						<div className="headerSearchItem o-flex--1">
							<FontAwesomeIcon icon={faBed} />
							{/* <span>sadfasdfsa</span> */}
							<input
								type="text"
								className="o-flex--1"
								placeholder="Where are you going?"
							/>
						</div>
						<div className="headerSearchItem o-flex--1">
							<FontAwesomeIcon icon={faCalendarDays} />
							{/* <span>sadfasdfsa</span> */}
							<input
								type="text"
								className="o-flex--1"
								placeholder={`${currentDate()} to ${currentDate()}`}
							/>
						</div>
						<div className="headerSearchItem o-flex--1">
							<FontAwesomeIcon icon={faPerson} />
							{/* <span>sadfasdfsa</span> */}
							<input
								type="text"
								className="o-flex--1"
								placeholder="1 adult - 0 chilren - 1 room"
							/>
						</div>
					</div>
					<button type="button" className="c-btn">
						Search
					</button>
				</div>
				<DateRangePicker
					ranges={[selectionRange]}
					onChange={handleSelect(selectionRange)}
				/>
			</div>
		</div>
	)
}
