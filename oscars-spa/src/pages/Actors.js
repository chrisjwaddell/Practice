import React, { useEffect } from "react"
import { Route, Link, Outlet } from "react-router-dom"
import ActorsList from "../data/actors"
import Actor from "./Actor"

export default function Actors() {
	return (
		<div className="actors_container">
			<h2>Best Actors</h2>
			<div className="o-flex x--center y--top o-flex-wrap">
				{ActorsList.map((actor) => {
					return (
						<div className="actor-container" key={actor.url}>
							<Link to={`./${actor.url}`}>
								<h4>{actor.name}</h4>
								<img
									src={actor.imgSrc}
									alt={actor.name}
									width="250px"
									height="250px"
								/>
							</Link>
						</div>
					)
				})}
			</div>

			<Outlet />
		</div>
	)
}
