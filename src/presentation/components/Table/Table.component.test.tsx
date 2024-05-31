import { render, screen } from "@testing-library/react";

import Table from "./Table.component";

describe("Table component", () => {
	const columns = [
		{ id: "id", label: "ID" },
		{ id: "name", label: "Name" },
		{ id: "age", label: "Age" },
	];

	const data = [
		{ id: 1, name: "John Doe", age: 25 },
		{ id: 2, name: "Jane Smith", age: 30 },
	];

	it("renders the table with correct columns and data", () => {
		render(<Table data={data} columns={columns} />);

		// Check column headers
		expect(screen.getByText("ID")).toBeInTheDocument();
		expect(screen.getByText("Name")).toBeInTheDocument();
		expect(screen.getByText("Age")).toBeInTheDocument();

		// Check data rows
		expect(screen.getByText("1")).toBeInTheDocument();
		expect(screen.getByText("John Doe")).toBeInTheDocument();
		expect(screen.getByText("25")).toBeInTheDocument();
		expect(screen.getByText("2")).toBeInTheDocument();
		expect(screen.getByText("Jane Smith")).toBeInTheDocument();
		expect(screen.getByText("30")).toBeInTheDocument();
	});

	it("applies the compact style when compact prop is true", () => {
		render(<Table data={data} columns={columns} compact={true} />);

		// Check if compact style is applied to table cells
		const tableCells = screen.getAllByRole("cell");
		tableCells.forEach((cell) => {
			expect(cell).toHaveClass("text-sm");
		});
	});
});
