import React, { useEffect } from "react"

export default function Header({ categoryList, onFilter }) {
	useEffect(() => {
		console.log(categoryList)
	}, [])

	return (
		<header className="masthead">
			<div className="container">
				<div className="o-flex x--center">
					<div className="fld-chk-lbl">
						<label className="fld-label" style={{ marginRight: "5px" }}>
							Category
						</label>
						<select id="category" onChange={(e) => onFilter(e.target.value)}>
							{categoryList.map((cat, idx) => (
								<option key={idx}>{cat}</option>
							))}
						</select>
					</div>
				</div>
			</div>
		</header>
	)
}
