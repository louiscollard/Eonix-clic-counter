import { makeSelectHomeContainerCounter } from "./selector";

describe("makeSelectHomeContainerCounter", () => {
	it("should select the home container counter", () => {
		const counterSelector = makeSelectHomeContainerCounter();
		const mockedState = {
			homeContainer: {
				counter: 5,
			},
		};
		expect(counterSelector(mockedState)).toEqual(5);
	});
});
