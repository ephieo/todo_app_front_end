import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TodoList from "./pages/TodoList";
import IncompleteTasks from "./pages/IncompleteTasks";
import CompletedTasks from "./pages/CompletedTasks";
import AddTaskForm from "./../src/pages/AddTasksForm";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/add-tasks">
						<AddTaskForm />
					</Route>
					<Route path="/incomplete-tasks">
						<IncompleteTasks />
					</Route>
					<Route path="/complete-tasks">
						<CompletedTasks />
					</Route>
					<Route exact path="/">
						<TodoList />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
