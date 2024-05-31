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
		<div className="flex h-min flex-col gap-4 rounded-lg border  p-4 shadow-md">
			<div className="flex items-center justify-center p-4">
				<img
					className="h-48 rounded-md object-cover object-center shadow-md"
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
