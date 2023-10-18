import React from "react"
import ActorsList from "../data/actors"

export default function Actors() {
	return (
		<div className="actors_container">
			<h2>Best Actors</h2>
			<div className="o-flex x--center y--top o-flex-wrap">
				{ActorsList.map((actor) => {
					return (
						<div className="actor-container">
							<h4>{actor.name}</h4>
							<img
								src={actor.img_src}
								alt={actor.name}
								width="250px"
								height="250px"
							/>
						</div>
					)
				})}
			</div>
		</div>
	)
}
