import React, { useState, useEffect } from "react"
import { useHistory, useParam, Link } from "react-router-dom"
import { toast } from "react-toastify"

const initialState = {
	firstname: "",
	lastname: "",
	email: "",
	mobile: "",
}

export default function AddEdit() {
	const [state, setState] = useState(initialState)
	const { firstname, lastname, email, mobile } = state

	const handleSubmit = (e) => {
		e.preventDefault()
	}

	const handleInputChange = (e) => {
		const { name, value } = e.target
		setState({ ...state, name: value })
	}

	return (
		<div className="addedit">
			<form className="addedit__form" onSubmit={handleSubmit}>
				<div className="o-flex column">
					<label htmlFor="firstname" className="fld-label">
						First Name
					</label>
					<input
						type="text"
						id="firstname"
						name="firstname"
						className="e-input--primary"
						placeholder="Your first name ...."
						value={firstname}
						onChange={handleInputChange}
					/>
				</div>
				<label htmlFor="lastname" className="fld-label">
					Last Name
				</label>
				<input
					type="text"
					id="lastname"
					name="lastname"
					className="e-input--primary"
					placeholder="Your Last name ...."
					value={lastname}
					onChange={handleInputChange}
				/>
				<label htmlFor="email" className="fld-label">
					email
				</label>
				<input
					type="text"
					id="email"
					name="email"
					className="e-input--primary"
					placeholder="Your email ...."
					value={email}
					onChange={handleInputChange}
				/>
				<label htmlFor="mobile" className="fld-label">
					mobile
				</label>
				<input
					type="text"
					id="mobile"
					name="mobile"
					className="e-input--primary"
					placeholder="Your mobile ...."
					value={mobile}
					onChange={handleInputChange}
				/>
			</form>
		</div>
	)
}
