import React from "react"
import propTypes from "prop-types"

function Featured({ property }) {
	// console.log("Featured")
	// console.log(Object.prototype.toString.call(property))
	const { city, properties, src } = property
	// console.log(city, properties, src)

	return (
		<div className="featured">
			<img src={src} alt={city} />
			<h2 className="featured__city">{city}</h2>
			<h4 className="featured__properties">{`${properties} properties`}</h4>
		</div>
	)
}

Featured.propTypes = {
	property: propTypes.object.isRequired,
}

export default Featured
