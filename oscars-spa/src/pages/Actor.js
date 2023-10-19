import React, { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import ActorsList from "../data/actors"

export default function Actor() {
	const { actorurl } = useParams()

	const actor = ActorsList.filter((person) => person.url === actorurl)

	return (
		<div className="actors_container">
			<div>
				<Link className="back c-btn" to="/actors">
					Back
				</Link>
			</div>
			<h2>{actor[0].name}</h2>
			<div style={{ marginLeft: "20px", marginRight: "20px" }}>
				<div className="o-flex x--center o-flex-column">
					<img src={actor[0].imgSrc} alt={actor[0].name} />
					<p className="tc">{actor[0].description}</p>
				</div>
			</div>
		</div>
	)
}
