import { render } from "@testing-library/react";

import Card from "./Card.component";

describe("Card component", () => {
	const props = {
		title: "Test Title",
		subtitle: "Test Subtitle",
		image: "test-image.jpg",
	};

	it("renders the card with correct title and subtitle", () => {
		const { getByText } = render(<Card {...props} />);
		expect(getByText(props.title)).toBeInTheDocument();
		expect(getByText(props.subtitle)).toBeInTheDocument();
	});

	it("renders the card with correct image", () => {
		const { getByAltText } = render(<Card {...props} />);
		expect(getByAltText(props.title)).toHaveAttribute("src", props.image);
	});
});
