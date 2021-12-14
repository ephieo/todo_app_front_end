import React from "react";
import TaskList from "../components/TaskList";
import NavBar from "../components/NavBar";
import { MainCont } from "../styled-components/reusables";

export default function IncompleteTasks() {
	const url = `http://localhost:4567/incomplete-tasks`;
	return (
		<MainCont width="100%" >
			<NavBar />
			<TaskList url={url} />
		</MainCont>
	);
}
