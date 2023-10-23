import React, { useState } from "react"
import propTypes from "prop-types"
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
import { useNavigate } from "react-router-dom"

import displayDates from "../lib/functions"

const currentDate = () => {
	const dt = new Date()
	return dt.toLocaleDateString()
}

function Header({ mode }) {
	const [datePickerOpened, setDatePickerOpened] = useState(false)
	const [peopleSelectOpened, setPeopleSelectOpened] = useState(false)
	const [bookingOptions, setBookingOptions] = useState({
		adult: 1,
		children: 0,
		room: 1,
	})

	const [date, setDate] = useState({
		startDate: new Date(),
		endDate: new Date(),
		key: "selection",
	})

	console.log("displayDates")
	console.log(typeof displayDates)
	console.log(displayDates(date))

	const [destination, setDestination] = useState("")

	const navigate = useNavigate()

	function handleBookingOptions(name, operation) {
		const res = {
			...bookingOptions,
			[name]:
				operation === "i"
					? bookingOptions[name] + 1
					: bookingOptions[name] - 1,
		}
		setBookingOptions(res)
	}

	function handleSearch() {
		console.log("handleSearch")
		navigate("/hotels", { state: { destination, date, bookingOptions } })
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

			{mode !== "list" && (
				<div>
					<h1 className="navcontainer">
						A lifetime of discounts? It&aposs Genius.
					</h1>
					<p className="navcontainer">
						Get rewarded for your travels - unlock instant savings
						of 10% or more wiht a free Lamabook account.
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
										onChange={(e) =>
											setDestination(e.target.value)
										}
									/>
								</div>
								<div className="headerSearchItem o-flex--1">
									<FontAwesomeIcon icon={faCalendarDays} />
									<input
										type="text"
										className="o-flex--1"
										placeholder={`${currentDate()} to ${currentDate()}`}
										onClick={() => {
											setDatePickerOpened(() => {
												if (peopleSelectOpened)
													setPeopleSelectOpened(false)
												return !datePickerOpened
											})
										}}
										// value={`${date.startDate.toLocaleDateString()} - ${date.endDate.toLocaleDateString()}`}
										value={displayDates(date)}
									/>
								</div>
								<div className="headerSearchItem o-flex--1">
									<FontAwesomeIcon icon={faPerson} />
									<input
										type="text"
										className="o-flex--1"
										placeholder="1 adult - 0 chilren - 1 room"
										onClick={() =>
											setPeopleSelectOpened(() => {
												if (datePickerOpened)
													setDatePickerOpened(false)
												return !peopleSelectOpened
											})
										}
									/>
									{!datePickerOpened &&
										peopleSelectOpened && (
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
														<span>
															{
																bookingOptions.adult
															}
														</span>
														<button
															type="button"
															disabled={
																bookingOptions.adult <=
																1
															}
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
														<span>
															{
																bookingOptions.children
															}
														</span>
														<button
															type="button"
															disabled={
																bookingOptions.children <=
																0
															}
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
														<span>
															{
																bookingOptions.room
															}
														</span>
														<button
															type="button"
															disabled={
																bookingOptions.room <=
																1
															}
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
										)}
								</div>
							</div>
							<button
								type="button"
								className="search c-btn"
								onClick={handleSearch}
							>
								Search
							</button>
						</div>
					</div>

					<div className="navcontainer">
						<div className="datepicker">
							{!peopleSelectOpened && datePickerOpened && (
								<DateRangePicker
									onChange={(item) => {
										setDate({
											startDate: item.selection.startDate,
											endDate: item.selection.endDate,
											key: "selection",
										})
										setDatePickerOpened(false)
									}}
									showSelectionPreview
									moveRangeOnFirstSelection={false}
									months={2}
									ranges={[date]}
									direction="horizontal"
									className="datepicker"
								/>
							)}
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

Header.propTypes = {
	mode: propTypes.string.isRequired,
}

export default Header
