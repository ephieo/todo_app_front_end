import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TodoList from "./pages/TodoList";
import IncompleteTasks from "./pages/IncompleteTasks";
import CompletedTasks from "./pages/CompletedTasks";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/incomplete">
						<IncompleteTasks />
					</Route>
					<Route path="/complete">
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
