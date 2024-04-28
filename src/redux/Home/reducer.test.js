import homeReducer from "./reducer";
import { incrementAction, decrementAction } from "./action";
import { initialState } from "./reducer";

describe("homeReducer", () => {
	it("should return the initial state", () => {
		expect(homeReducer(undefined, {})).toEqual(initialState);
	});

	it("should handle INCREMENT", () => {
		expect(homeReducer(initialState, incrementAction())).toEqual({
			counter: 1,
		});
	});

	it("should handle DECREMENT when counter > 0", () => {
		const state = { counter: 1 };
		expect(homeReducer(state, decrementAction())).toEqual({
			counter: 0,
		});
	});

	it("should not decrement when counter is 0", () => {
		const state = { counter: 0 };
		expect(homeReducer(state, decrementAction())).toEqual({
			counter: 0,
		});
	});
});
