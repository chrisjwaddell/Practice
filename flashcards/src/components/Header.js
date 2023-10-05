import React, { useEffect } from "react"

export default function Header({ categoryList, onFilter }) {
	useEffect(() => {
		console.log("Header - categoryList")
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
						<select id="category">
							{categoryList.map((cat, idx) => (
								<option
									key={cat.id}
									id={cat.id}
									onClick={(e) => onFilter(e.target.id)}
								>
									{cat.name}
								</option>
							))}
						</select>
					</div>
				</div>
			</div>
		</header>
	)
}
