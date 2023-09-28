import React, { useState, useEffect } from "react"
import { useNavigate, useParam, Link } from "react-router-dom"
import { toast } from "react-toastify"
// import "react-toastify/dist/ReactToastify.css"

const initialState = {
	firstname: "",
	lastname: "",
	email: "",
	mobile: "",
}

export default function AddEdit() {
	const [state, setState] = useState(initialState)
	const { firstname, lastname, email, mobile } = state

	const navigate = useNavigate()

	const handleSubmit = (e) => {
		e.preventDefault()

		console.log(JSON.stringify({ firstname, lastname, email, mobile }))

		if (!firstname || !lastname || !email || !mobile) {
			toast.error("Please fill in all the fields")
		} else {
			fetch("http://localhost:25055/api/add", {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ firstname, lastname, email, mobile }),
			})
				.then(setState(initialState))
				// .then((users) => console.log(users))
				.catch((err) => console.error(err))
			// .catch((err) => console.error(err.response.data?????))
			toast.success("Contact Added successfully")
			setTimeout(() => {
				navigate("/")
			}, 500)
		}
	}

	const handleInputChange = (e) => {
		const { name, value } = e.target
		setState({ ...state, [name]: value })
	}

	return (
		<div className="addedit">
			<form className="addedit__form" onSubmit={handleSubmit}>
				<div className="fld-lbl-row">
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
				<div className="fld-lbl-row">
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
				</div>
				<div className="fld-lbl-row">
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
				</div>
				<div className="fld-lbl-row">
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
				</div>

				<input
					type="submit"
					value="save"
					className="t-db c-btn c-btn--primary t-mac t-mt btn-submit"
				/>
				<Link to="/">
					<button
						type="button"
						value="Go back"
						className="t-db c-btn c-btn--primary t-mac t-mt btn-cancel"
					>
						Go back
					</button>
				</Link>
			</form>
		</div>
	)
}
