import React from "react";

export type DetailProps = {
	title: string;
	subtitle: string;
	image: string;
	description: string;
};

const Detail: React.FC<DetailProps> = ({
	title,
	subtitle,
	image,
	description,
}) => {
	return (
		<div className="flex flex-col border rounded-lg p-4 shadow-md w-1/6 gap-4">
			<div className="flex items-center justify-center p-4">
				<img
					className="h-48 object-cover object-center rounded-md shadow-md"
					src={image}
					alt={title}
				/>
			</div>
			<hr />
			<div>
				<h2>
					<b>{title}</b>
				</h2>
				<span>{subtitle} </span>
			</div>
			<hr />
			<div>
				<p>
					<b>Description:</b>
				</p>
				<span>{description}</span>
			</div>
		</div>
	);
};

export default Detail;
