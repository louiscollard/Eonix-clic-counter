// redux/home/actions.test.js
import { incrementAction, decrementAction } from "./action";
import { INCREMENT, DECREMENT } from "./constant";

describe("incrementAction", () => {
	it("should create an action to increment the counter", () => {
		const expectedAction = {
			type: INCREMENT,
		};
		expect(incrementAction()).toEqual(expectedAction);
	});
});

describe("decrementAction", () => {
	it("should create an action to decrement the counter", () => {
		const expectedAction = {
			type: DECREMENT,
		};
		expect(decrementAction()).toEqual(expectedAction);
	});
});
