import React, { useState, useEffect, useMemo } from "react"
import { useNavigate, BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { toast } from "react-toastify"

import Pagination from "../Pagination"

function displayusers() {
	return (
		fetch("http://localhost:25055/api/getusers")
			.then((resp) => resp.json())
			// .then((users) => console.log(users))
			.catch((err) => console.error(err))
	)
}

async function insertUsers() {
	let users = await displayusers()
	console.log(users)
	return users
}

let PageSize = 10

export default function Home() {
	console.log("rerender")
	const [users, setUsers] = useState([])
	const [currentPage, setCurrentPage] = useState(1)

	console.log(users.length)

	const navigate = useNavigate()

	const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * PageSize
		const lastPageIndex = firstPageIndex + PageSize
		return users.slice(firstPageIndex, lastPageIndex)
	}, [currentPage])

	useEffect(() => {
		displayusers().then((result) => setUsers(result))
	}, [])

	function handleDelete(id) {
		if (window.confirm("Are you sure you want to delete this contact?")) {
			fetch(`http://localhost:25055/api/remove/${id}`, {
				method: "DELETE",
			})
				// .then((resp) => resp.json())
				.then(() => {
					console.log("Successfully deleted")
					toast.success("Contact deleted successfully")
					setTimeout(async () => {
						let r = await displayusers()
						// .then((result) => console.log(result))
						console.log(r)
						setUsers(r)
						console.log("after setUsers")

						navigate("/")
					}, 500)
				})
				// .then((users) => console.log(users))
				.catch((err) => console.error(err))
		}
	}

	function handleUpdate(id) {
		fetch(`http://localhost:25055/api/remove/${id}`, {
			method: "DELETE",
		})
			// .then((resp) => resp.json())
			.then(() => {
				console.log("Successfully deleted")
				toast.success("Contact deleted successfully")
				setTimeout(async () => {
					let r = await displayusers()
					// .then((result) => console.log(result))
					console.log(r)
					setUsers(r)
					console.log("after setUsers")

					navigate("/")
				}, 500)
			})
			// .then((users) => console.log(users))
			.catch((err) => console.error(err))
	}

	return (
		<div>
			<h1>Home</h1>

			<Link
				to="./addContact"
				style={{ width: "200px", display: "block", textAlign: "center", margin: "0 auto" }}
			>
				<button className="c-btn btn-contact">Add Contact</button>
			</Link>
			<table className="styled-table">
				<thead>
					<tr>
						<th>Person ID</th>
						<th>Fullname</th>
						<th>Email</th>
						<th>Mobile</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{currentTableData.map((u, idx) => (
						<tr>
							<td>{u.person_id}</td>
							<td>{u.fullName}</td>
							<td>{u.email}</td>
							<td>{u.mobileNumber}</td>
							<td>
								<Link to={`/update/${u.person_id}`}>
									<button
										className="c-btn btn btn--positive"
										onClick={() => handleUpdate(u.person_id)}
									>
										Edit
									</button>
								</Link>
								<button
									className="c-btn btn btn--negative"
									onClick={() => handleDelete(u.person_id)}
								>
									Delete
								</button>
								<Link to={`/view/${u.person_id}`}>
									<button className="c-btn btn">View</button>
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<div style={{ width: "440px", margin: "0 auto" }}>
				<Pagination
					className="pagination-bar"
					currentPage={currentPage}
					totalCount={users.length}
					pageSize={PageSize}
					onPageChange={(page) => setCurrentPage(page)}
				/>
			</div>
		</div>
	)
}
