import React, { useState } from "react"
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
	const [datePickerOpened, setDatePickerOpened] = useState(false)
	const [peopleSelectOpened, setPeopleSelectOpened] = useState(false)
	const [bookingOptions, setBookingOptions] = useState({
		adult: 1,
		children: 0,
		room: 1,
	})

	const [state, setState] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: "selection",
		},
	])

	function handleBookingOptions(name, operation) {
		const res = {
			...bookingOptions,
			[name]:
				operation === "i"
					? bookingOptions[name] + 1
					: bookingOptions[name] - 1,
		}
		console.log("res")
		console.log(res)
		setBookingOptions(res)
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
				<button type="button" className="signin c-btn">
					Sign in / Register
				</button>
			</div>
			<div className="navcontainer">
				<div className="headerSearch">
					<div className="inputs o-flex">
						<div className="headerSearchItem o-flex--1">
							<FontAwesomeIcon icon={faBed} />
							<input
								type="text"
								className="o-flex--1"
								placeholder="Where are you going?"
							/>
						</div>
						<div className="headerSearchItem o-flex--1">
							<FontAwesomeIcon icon={faCalendarDays} />
							<input
								type="text"
								className="o-flex--1"
								placeholder={`${currentDate()} to ${currentDate()}`}
								onClick={() =>
									setDatePickerOpened(!datePickerOpened)
								}
							/>
						</div>
						<div className="headerSearchItem o-flex--1">
							<FontAwesomeIcon icon={faPerson} />
							<input
								type="text"
								className="o-flex--1"
								placeholder="1 adult - 0 chilren - 1 room"
								onClick={() =>
									setPeopleSelectOpened(!peopleSelectOpened)
								}
							/>
							<div className="headerSearchItem__peoplePopup">
								<div className="o-flex x--between y--center">
									<span>Adult</span>
									<div className="count">
										<button
											type="button"
											onClick={() =>
												handleBookingOptions(
													"adult",
													"i",
												)
											}
										>
											+
										</button>
										<span>{bookingOptions.adult}</span>
										<button
											type="button"
											disabled={bookingOptions.adult <= 0}
											onClick={() =>
												handleBookingOptions(
													"adult",
													"d",
												)
											}
										>
											-
										</button>
									</div>
								</div>
								<div className="o-flex x--between  y--center">
									<span>Children</span>
									<div className="count">
										<button
											type="button"
											onClick={() =>
												handleBookingOptions(
													"children",
													"i",
												)
											}
										>
											+
										</button>
										<span>{bookingOptions.children}</span>
										<button
											type="button"
											disabled={bookingOptions.adult <= 0}
											onClick={() =>
												handleBookingOptions(
													"children",
													"d",
												)
											}
										>
											-
										</button>
									</div>
								</div>
								<div className="o-flex x--between  y--center">
									<span>Room</span>
									<div className="count">
										<button
											type="button"
											onClick={() =>
												handleBookingOptions(
													"room",
													"i",
												)
											}
										>
											+
										</button>
										<span>{bookingOptions.room}</span>
										<button
											type="button"
											disabled={bookingOptions.adult <= 0}
											onClick={() =>
												handleBookingOptions(
													"room",
													"d",
												)
											}
										>
											-
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<button type="button" className="search c-btn">
						Search
					</button>
				</div>
			</div>

			<div className="navcontainer">
				<div className="datepicker">
					{datePickerOpened && (
						<DateRangePicker
							onChange={(item) => setState([item.selection])}
							showSelectionPreview
							moveRangeOnFirstSelection={false}
							months={2}
							ranges={state}
							direction="horizontal"
							className="datepicker"
						/>
					)}
				</div>
			</div>
		</div>
	)
}
