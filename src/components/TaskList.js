import React from "react";
import { useState, useEffect } from "react";
import { fetchData, sortDateTime } from "./../utils/utils";
import AddTaskButton from "./../components/AddTaskButton";
import {
	MainCont,
	TaskBox,
	DateText,
	Description,
	TaskTitle,
	TaskCont,
	CheckBox,
	Icon,
} from "../styled-components/reusables";

import tick from "./../images/tick.svg";

export default function TaskList({ url }) {
	const [tasks, setTasks] = useState(null);

	useEffect(() => {
		resolveTaskData();
	}, []);

	function resolveTaskData() {
		fetchData(`${url}`)
			.then((result) => setTasks(result))
			.catch((error) => error);
	}

	return (
		<>
			<AddTaskButton />
			<MainCont width="80vw" paddingTop="5rem">
				{!(tasks instanceof TypeError) && tasks != null ? (
					tasks.map((e) => {
						return (
							<TaskCont key={e.id}>
								<TaskBox>
									<TaskTitle>TASK : {e.task_name}</TaskTitle>
									<Description>Description : {e.description}</Description>
									<DateText>DATE : {sortDateTime(e.created_at)[0]}</DateText>
									<DateText>TIME : {sortDateTime(e.created_at)[1]}</DateText>
								</TaskBox>
								<CheckBox
									background={e.completed ? "#FF4703" : "#dbeccd"}
									className="checkbox">
									<Icon src={tick} alt="checkbox icon" />
								</CheckBox>
							</TaskCont>
						);
					})
				) : (
					<h1>No tasks received yet ...</h1>
				)}
			</MainCont>
		</>
	);
}
