import React, { FC } from "react";

interface TableColumn {
	id: string;
	label: string;
}

interface TableProps<T> {
	data: T[] | null;
	columns: TableColumn[];
	onRowClick?: (row: T) => void;
	compact?: boolean;
	mini?: boolean;
	lastColumnWidth?: string;
	noRightLastColumn?: boolean;
	mobileHidden?: boolean;
	pointer?: boolean;
}

const Table: FC<TableProps<any>> = ({
	data,
	columns,
	onRowClick,
	compact,
	mini,
	lastColumnWidth,
	noRightLastColumn = false,
	mobileHidden = false,
	pointer = false,
}) => {
	const tableStyle = `${!mini && "w-[600px]"} w-full sm:min-w-full divide-y divide-slate-200 dark:divide-cyan-800 table-auto`;
	const lastColumnStyle = `md:flex md:justify-end w-[${lastColumnWidth}]`;

	const tdStyle = compact
		? "text-sm text-slate-600 dark:text-slate-300 whitespace-nowrap w-auto py-1 pr-2 max-w-[200px] truncate min-w-[100px]"
		: `text-sm text-slate-600 dark:text-slate-300 whitespace-nowrap w-auto max-w-[200px] truncate ${!mini && "min-w-[100px] pr-2"} py-3 `;
	return (
		<div
			className={
				"w-full" +
				(mobileHidden ? "hidden sm:block" : "") +
				" " +
				"overflow-x-auto touch-auto"
			}
		>
			<table className={tableStyle}>
				<thead>
					<tr>
						{columns.map((column, index) => {
							if (
								index + 1 === columns.length &&
								noRightLastColumn === false
							) {
								return (
									<th
										key={column.id}
										scope="col"
										className="w-auto py-3 text-left text-sm font-medium text-slate-700 dark:text-slate-200 "
									>
										<div className={lastColumnStyle}>
											{column.label}
										</div>
									</th>
								);
							}
							return (
								<th
									key={column.id}
									scope="col"
									className="w-auto py-3 text-left text-sm font-medium text-slate-700 dark:text-slate-200 "
								>
									{column.label}
								</th>
							);
						})}
					</tr>
				</thead>
				<tbody className="divide-y divide-slate-200 bg-white dark:divide-cyan-800 dark:bg-cyan-950">
					{data?.map((row, rowIndex) => (
						<tr
							key={rowIndex}
							className={`duration-75 hover:bg-slate-50 dark:hover:bg-cyan-900 ${pointer && "cursor-pointer"}`}
							onClick={() => onRowClick && onRowClick(row)}
						>
							{columns.map((column, index) => {
								if (
									index + 1 === columns.length &&
									noRightLastColumn === false
								) {
									return (
										<td
											key={column.id}
											className={tdStyle}
											title={
												typeof row[column.id] ===
												"string"
													? row[column.id]
													: undefined
											}
										>
											<div className="md:flex md:justify-end">
												{typeof row[column.id] ===
													"object" &&
												!React.isValidElement(
													row[column.id],
												)
													? "[Object Object]"
													: row[column.id]}
											</div>
										</td>
									);
								}
								return (
									<td
										key={column.id}
										className={tdStyle}
										title={
											typeof row[column.id] === "string"
												? row[column.id]
												: undefined
										}
									>
										{typeof row[column.id] === "object" &&
										!React.isValidElement(row[column.id])
											? "[Object Object]"
											: row[column.id]}
									</td>
								);
							})}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
