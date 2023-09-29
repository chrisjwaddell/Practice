import React, { useState, useEffect } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"

export default function View() {
	const [state, setState] = useState({})
	const { firstname, lastname, email, mobile } = state

	// const navigate = useNavigate()

	const { id } = useParams()

	useEffect(() => {
		fetch(`http://localhost:25055/api/getuser/${id}`, {
			method: "GET",
		})
			.then((resp) => resp.json())
			.then((u) => {
				console.log("In /update")
				console.log(u)
				setState({
					firstname: u[0].firstName,
					lastname: u[0].lastName,
					email: u[0].email,
					mobile: u[0].mobileNumber,
				})
			})
			// .then((users) => console.log(users))
			.catch((err) => console.error(err))
	}, [id])

	return (
		<div className="addedit">
			<form className="addedit__form">
				<h2 className="tc c-black">Contact Details</h2>
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
						value={firstname || ""}
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
						value={lastname || ""}
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
						value={email || ""}
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
						value={mobile || ""}
					/>
				</div>

				<Link to="/">
					<button
						type="button"
						value="Go back"
						className="t-db c-btn c-btn--primary t-mac t-mt btn-cancel"
					>
						Close
					</button>
				</Link>
			</form>
		</div>
	)
}
