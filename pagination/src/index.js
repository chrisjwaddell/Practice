import React, { useState, useEffect, useMemo } from "react"
import { createRoot } from "react-dom/client"
// import { usePagination, DOTS } from "./usePagination"
import Pagination from "./Pagination"

// from
// https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/
// see also
// https://www.youtube.com/watch?v=jmNHcW_oszg
function displayusers() {
	return (
		fetch("http://localhost:25055/getusers")
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

const App = () => {
	const users2 = ["a", "b"]
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
		<div className="o-container">
			<table className="styled-table">
				<thead>
					<tr>
						<th>Fullname</th>
						<th>Email</th>
						<th>Mobile</th>
					</tr>
				</thead>
				<tbody>
					{currentTableData.map((u) => (
						<tr>
							<td>{u.fullName}</td>
							<td>{u.email}</td>
							<td>{u.mobileNumber}</td>
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

const root = createRoot(document.getElementById("root"))
root.render(<App />)
