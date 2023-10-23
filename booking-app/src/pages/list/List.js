import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { DateRange } from "react-date-range"
import Navbar from "../../components/Navbar"
// import ListImage from "../../components/ListImage"
// import Hotels from "../../data/hotels"
import displayDates from "../../lib/functions"

export default function List() {
	const location = useLocation()

	const [destination, setDestination] = useState(location.state.destination)
	const [date, setDate] = useState(location.state.date)
	const [bookingOptions, setBookingOptions] = useState(
		location.state.bookingOptions,
	)

	return (
		<div>
			<Navbar mode="list" />
			<div className="o-container">
				<div className="listContainer">
					{/* <ListImage listing={Hotels[0]} />
					<ListImage listing={Hotels[1]} />
					<ListImage listing={Hotels[2]} /> */}

					{/* <div className="listWrapper">
						<div className="listSearch">
							<h1 className="lsTitle">Search</h1>
							<div className="lsItem">
								<label htmlFor="saarchdest">Destination</label>
								<input
									id="saarchdest"
									type="button"
									placeholder={destination}
									type="text"
								/>
							</div>
							<div className="lsItem">
								<label>Check-in Date</label>
								<span
									onClick={() => setOpenDate(!openDate)}
								>{`${format(
									date[0].startDate,
									"MM/dd/yyyy",
								)} to ${format(
									date[0].endDate,
									"MM/dd/yyyy",
								)}`}</span>
								{openDate && (
									<DateRange
										onChange={(item) =>
											setDate([item.selection])
										}
										minDate={new Date()}
										ranges={date}
									/>
								)}
							</div>
							<div className="lsItem">
								<label>Options</label>
								<div className="lsOptions">
									<div className="lsOptionItem">
										<span className="lsOptionText">
											Min price <small>per night</small>
										</span>
										<input
											type="number"
											className="lsOptionInput"
										/>
									</div>
									<div className="lsOptionItem">
										<span className="lsOptionText">
											Max price <small>per night</small>
										</span>
										<input
											type="number"
											className="lsOptionInput"
										/>
									</div>
									<div className="lsOptionItem">
										<span className="lsOptionText">
											Adult
										</span>
										<input
											type="number"
											min={1}
											className="lsOptionInput"
											placeholder={options.adult}
										/>
									</div>
									<div className="lsOptionItem">
										<span className="lsOptionText">
											Children
										</span>
										<input
											type="number"
											min={0}
											className="lsOptionInput"
											placeholder={options.children}
										/>
									</div>
									<div className="lsOptionItem">
										<span className="lsOptionText">
											Room
										</span>
										<input
											type="number"
											min={1}
											className="lsOptionInput"
											placeholder={options.room}
										/>
									</div>
								</div>
							</div>
							<button>Search</button>
                                    </div> */}

					{/* <div className="listResult">
							<SearchItem />
							<SearchItem />
							<SearchItem />
							<SearchItem />
							<SearchItem />
							<SearchItem />
							<SearchItem />
							<SearchItem />
							<SearchItem />
						</div>
					</div> */}
				</div>
			</div>
		</div>
	)
}
