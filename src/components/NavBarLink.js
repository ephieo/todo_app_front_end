import React from "react";
import { TaskTitle } from "./../styled-components/reusables";
import { Link } from "react-router-dom";

export default function NavBarLink({ param, text }) {
	return (
		<Link to={param} className="route-link">
			<TaskTitle margin="1rem" color="grey">
				{text}
			</TaskTitle>
		</Link>
	);
}
