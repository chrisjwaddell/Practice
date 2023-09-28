import React, { useState, useEffect, useMemo } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

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
	const [users, setUsers] = useState([])
	const [currentPage, setCurrentPage] = useState(1)

	const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * PageSize
		const lastPageIndex = firstPageIndex + PageSize
		return users.slice(firstPageIndex, lastPageIndex)
	}, [currentPage])

	useEffect(() => {
		displayusers().then((result) => setUsers(result))
	}, [])

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
									<button className="c-btn btn btn--positive">Edit</button>
								</Link>
								<button className="c-btn btn btn--negative">Delete</button>
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
