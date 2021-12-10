import React from "react";
import TaskList from "../components/TaskList";
import NavBar from "../components/NavBar";
import { MainCont } from "../styled-components/reusables";

export default function TodoList() {
	const url = `http://localhost:4567/all-tasks`;
	return (
		<MainCont width="100%">
			<NavBar />
			<TaskList url={url} />
		</MainCont>
	);
}
