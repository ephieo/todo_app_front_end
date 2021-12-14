import * as requests from "./utils/utils";

describe("Utils", () => {
	let url = `http://localhost:1234/`;

	it("takes in a date and returns the time and date in an array", () => {
		let date = "2021-11-16T00:37:01.581Z";

		expect(requests.sortDateTime(date)[0]).toBe("2021-11-16");
		expect(requests.sortDateTime(date)[1]).toBe("00:37:01");
	});

	it("returns a url with the taskname and description interpolated into the string", () => {
		let taskname = "Hello";
		let description = "World!";
		let correct_url =
			"http://localhost:1234/?task_name=Hello&description=World!&completed=false";

		expect(requests.paramsUrl(url, taskname, description)).toBe(correct_url);
	});

	describe("fetchData", () => {
		const initialFetch = global.fetch;

		beforeEach(() => {
			global.fetch = jest.fn();
		});

		afterEach(() => {
			global.fetch = initialFetch;
		});

		const mockResult = JSON.stringify({ status: 200 });

		it("requests the correct endpoit", () => {
			global.fetch.mockResolvedValue(mockResult);

			requests.fetchData(url);

			expect(global.fetch).toHaveBeenCalledWith(url);
		});

		it("checks that if the response is successful a json object is returned", async () => {
			let mockData = {
				status: 200,
				data: [{ id: 1, task_name: "buy pink lady apples " }],
			};
			function fetchResponseOk(response) {
				return {
					status: 200,
					json: () => Promise.resolve(response),
				};
			}

			global.fetch.mockResolvedValue(fetchResponseOk(mockData));

			const result = await requests.fetchData(url);

			expect(result.status).toBe(200);
		});
	});
});
