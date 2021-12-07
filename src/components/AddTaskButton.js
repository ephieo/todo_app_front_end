import React from "react";
import { AddTaskBox, TaskTitle } from "./../styled-components/reusables";
import { Link } from "react-router-dom";

export default function AddTaskButton() {
	return (
		<Link className="route-link" to="/add-tasks">
			<AddTaskBox>
				<TaskTitle lSpacing="5px">ADD NEW TASK</TaskTitle>
			</AddTaskBox>
		</Link>
	);
}
