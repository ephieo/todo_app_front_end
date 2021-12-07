import React from "react";
import * as requests from "./utils/utils";
import { render } from "@testing-library/react";
import TaskList from "./components/TaskList";
import { BrowserRouter } from "react-router-dom";

describe("TaskList", () => {
	const fakeTasks = [
		{
			id: 9,
			task_name: "Get ready for my IPM",
			description: "drink loads of green tea ",
			completed: true,
			created_at: "2021-11-24T10:07:04.696Z",
		},
	];
	it("shows renders tasks", () => {
		jest.spyOn(requests, "fetchData").mockResolvedValue(fakeTasks);
		render(
			<BrowserRouter>
				<TaskList />
			</BrowserRouter>
		);
	});
});
