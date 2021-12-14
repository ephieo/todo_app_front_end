import React from "react";
import * as requests from "./utils/utils";
import { render, screen } from "@testing-library/react";
import TaskList from "./components/TaskList";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

describe("TaskList", () => {
	const fakeTasks = [
		{
			id: 9,
			task_name: "Book tickets to see Spiderman",
			description: "at the Odeon",
			completed: true,
			created_at: "2021-11-24T10:07:04.696Z",
		},
	];
	beforeEach(() => {
		jest.spyOn(requests, "fetchData").mockResolvedValue(fakeTasks);
	});
	it("a request is made with the right parameter", async () => {
		let url = `http://localhost:4567/all-tasks`;

		await act(async () => {
			render(
				<BrowserRouter>
					<TaskList url={url} />
				</BrowserRouter>
			);
		});

		expect(requests.fetchData).toHaveBeenCalledWith(url);
	});
	it("a task box has been rendered", async () => {
		await act(async () => {
			render(
				<BrowserRouter>
					<TaskList />
				</BrowserRouter>
			);
		});

		expect(screen.getAllByText(/TASK/i));
		expect(screen.getAllByText(/Spiderman/i));
		expect(screen.getAllByText(/at the Odeon/i));
		expect(screen.getAllByText(/10:07:04/i));
	});
	it("The Add task button is rendered on the screen", async () => {
		await act(async () => {
			render(
				<BrowserRouter>
					<TaskList />
				</BrowserRouter>
			);
		});

		expect(screen.getAllByText(/ADD NEW TASK/i));
	});
});
