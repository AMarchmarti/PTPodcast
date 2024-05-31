import { render } from "@testing-library/react";
import Detail from "./Detail.component";

describe("Detail component", () => {
	const props = {
		title: "Test Title",
		subtitle: "Test Subtitle",
		image: "test-image.jpg",
		description: "Test Description",
	};

	it("renders the detail component with correct title, subtitle, image, and description", () => {
		const { getByText, getByAltText } = render(<Detail {...props} />);
		expect(getByText(props.title)).toBeInTheDocument();
		expect(getByText(props.subtitle)).toBeInTheDocument();
		expect(getByAltText(props.title)).toHaveAttribute("src", props.image);
		expect(getByText("Description:")).toBeInTheDocument();
		expect(getByText(props.description)).toBeInTheDocument();
	});
});
