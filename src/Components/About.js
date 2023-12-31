import React, { useContext } from "react";
import LocationContext from "../utils/Contexts/LocationContext";

const About = () => {
	const { lat, lng, cityName } = useContext(LocationContext)
	return (
		<>
			<h1 className="font-bold text-7xl">
				About Page.
			</h1>
			<p>{lat}</p>
			<p>{lng}</p>
			<p>{cityName}</p>
		</>
	)
}

export default About