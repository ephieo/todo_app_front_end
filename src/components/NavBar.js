import React from "react";
import { NavbarCont, TaskTitle } from "./../styled-components/reusables";
import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<NavbarCont>
			<Link to="/" className="route-link">
				<TaskTitle margin="1rem" color="grey">
					HOME
				</TaskTitle>
			</Link>
			<Link to="/complete-tasks" className="route-link">
				<TaskTitle margin="1rem" color="grey">
					COMPLETED TASKS
				</TaskTitle>
			</Link>
			<Link to="/incomplete-tasks" className="route-link">
				<TaskTitle margin="1rem" color="grey">
					INCOMPLETE TASKS
				</TaskTitle>
			</Link>
		</NavbarCont>
	);
}
