import React from "react"
import { Link } from "react-router-dom"
import cityList from "../../data/city"
import Navbar from "../../components/Navbar"
import Featured from "../../components/Featured"
import PropertyList from "../../components/PropertyList"
import FeaturedProperties from "../../components/FeaturedProperties"
import MailList from "../../components/mailList"

export default function Home() {
	console.log(cityList[0])
	return (
		<>
			<Navbar mode="home" />
			<div className="o-container">
				<h1>Home</h1>
				<Link to="hotels">Hotels List</Link>
				<div className="featuredContainer">
					<Featured property={cityList[0]} key={1} />
					<Featured property={cityList[1]} key={2} />
					<Featured property={cityList[2]} key={3} />
				</div>

				<h1 className="homeTitle">Browse by property type</h1>
				<PropertyList />

				<h1 className="homeTitle">Homes guests love</h1>
				<FeaturedProperties />
			</div>
			<MailList />
		</>
	)
}
