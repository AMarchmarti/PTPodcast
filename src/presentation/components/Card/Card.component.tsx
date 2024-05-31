import React from "react";

export type CardProps = {
	title: string;
	subtitle: string;
	image: string;
};

const Card: React.FC<CardProps> = ({ title, subtitle, image }) => {
	return (
		<li className="flex size-full cursor-pointer flex-col transition-transform duration-300 hover:scale-105">
			<div className="mx-4 mt-16 size-full max-w-2xl rounded-lg border bg-white text-gray-900 shadow-md sm:mx-auto sm:max-w-sm md:mx-auto md:max-w-sm lg:mx-auto lg:max-w-sm xl:mx-auto xl:max-w-sm">
				<div className="relative mx-auto -mt-16 size-32 overflow-hidden rounded-full border-4 border-white">
					<img
						className="h-32 object-cover object-center"
						src={image}
						alt={title}
					/>
				</div>
				<div className="mt-2 p-2 text-center">
					<h2 className="font-semibold">{title}</h2>
					<p className="text-gray-500">{subtitle}</p>
				</div>
			</div>
		</li>
	);
};

export default Card;
