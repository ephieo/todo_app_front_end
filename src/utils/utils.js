export function fetchData(url) {
	return fetch(url)
		.then((result) => result.json())
		.catch((error) => error);
}

export function postData(url, taskname, description) {
	console.log(taskname);
	console.log(description);
	return fetch(url, {
		method: "POST",
		headers: { "content-type": "application/JSON" },
		body: JSON.stringify({
			task_name: taskname,
			description: description,
			completed: false,
		}),
	})
		.then((result) => result.json())
		.catch((error) => error);
}

export function sortDateTime(date) {
	let dateTime = [];
	let newDate = date.split("T").shift();
	let newTime = date.split("T")[1].split(".")[0];
	dateTime.push(newDate);
	dateTime.push(newTime);
	return dateTime;
}
