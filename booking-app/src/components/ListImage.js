import React from "react"
import propTypes from "prop-types"

function ListImage({ name, src }) {
	return (
		<div className="listImage">
			<img src={src} alt={name} />
			<h4>{name}</h4>
		</div>
	)
}

ListImage.propTypes = {
	name: propTypes.string.isRequired,
	src: propTypes.string.isRequired,
}

export default ListImage
