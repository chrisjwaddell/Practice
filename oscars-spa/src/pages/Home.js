import React from "react"
import PropTypes from "prop-types"

function Home() {
	return (
		<div className="main-content">
			<div className="container">
				<h2>title</h2>
				<div className="home-image" style={{ height: "500px" }} />
				<div
					className="thumbnail-container o-flex o-flex-row x--around y--center"
					style={{ height: "100px" }}
				>
					<div className="home-thumbnail-1" />
					<div className="home-thumbnail-2" />
					<div className="home-thumbnail-3" />
				</div>
			</div>
		</div>
	)
}

// Home.propTypes = {
// 	title: PropTypes.string.isRequired,
// }

export default Home
