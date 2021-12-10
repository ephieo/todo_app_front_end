import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Label, Input, SubmitInput } from "../styled-components/form";
import { postData, paramsUrl } from "../utils/utils";
import { MainCont } from "../styled-components/reusables";
import NavBar from "../components/NavBar";

export default function AddTasksForm() {
	const [taskname, setTaskName] = useState("");
	const [description, setDescription] = useState("");

	let history = useHistory();

	const url = paramsUrl(
		`http://localhost:4567/create-tasks`,
		taskname,
		description
	);

	function resolveFormData(url, taskname, description) {
		postData(`${url}`, taskname, description)
			.then((result) => result.json())
			.then((data) => console.log(data))
			.catch((error) => error);
		history.push("/");
	}

	return (
		<MainCont marginTop="0">
			<NavBar />
			<Form
				onSubmit={(e) => {
					e.preventDefault();
					resolveFormData(url, taskname, description);
				}}>
				<Label htmlFor="task-name">Task Name:</Label>
				<Input
					type="text"
					name="task-name"
					value={taskname}
					onChange={(e) => {
						setTaskName(e.target.value);
					}}></Input>
				<Label htmlFor="description">Task Description:</Label>
				<Input
					type="text"
					name="description"
					value={description}
					onChange={(e) => {
						setDescription(e.target.value);
					}}></Input>
				<SubmitInput type="submit" value="SUBMIT" />
			</Form>
		</MainCont>
	);
}
