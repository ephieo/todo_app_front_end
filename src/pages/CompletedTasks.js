import React from "react";
import TaskList from "../components/TaskList";
import NavBar from "../components/NavBar";
import { MainCont } from "../styled-components/reusables";

export default function CompletedTasks() {
	const url = `http://localhost:4567/complete-tasks`;
	return (
		<MainCont width="100%" marginTop="30rem">
			<NavBar />
			<TaskList url={url} />
		</MainCont>
	);
}
