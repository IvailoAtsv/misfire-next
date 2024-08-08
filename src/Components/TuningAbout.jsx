import React, { ReactNode } from "react";
import { FaAward } from "react-icons/fa";
import ServiceCard from "./ServiceCard";

const stories = [
	{
		icon: <FaAward />,
		title: "Top Rank On Fiverr",
	},
	{
		icon: <FaAward />,
		title: "200+ 5 star Review",
	},
	{
		icon: <FaAward />,
		title: "Top Rank on Dribbble",
	},
	{
		icon: <FaAward />,
		title: "Top Seller on Upwork",
	},
];


const StoryItem = (item) => {
	const { title, icon } = item;
	return (
		<div className="flex items-center justify-center md:justify-start">
			{icon}
			<h6 className="font-bold">{title}</h6>
		</div>
	);
};


const ShapeOne = () => (
	<>
		<svg
			className="absolute blur-md -top-[10%] -left-[10%] -z-[1] text-gray-50 dark:text-[#1E2735]"
			width="499"
			height="499"
			viewBox="0 0 600 600"
			fill="#A30A15"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle
				cx="249.5"
				cy="249.5"
				r="249.5"
				fill="#A30A15"
				fillOpacity="1"
			/>
		</svg>
		{/* <img
			src="/img2.webp"
			alt=""
			className="w-auto rounded-md h-auto object-contain max-h-[500px]"
		/> */}
	</>
);

const ShapeTwo = () => (
	<svg
		className="absolute blur-md top-[75%] right-[0 -z-[1] text-gray-50 dark:text-[#1E2735]"
		width="134"
		height="133"
		viewBox="0 0 134 133"
		fill="#A30A15"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M66.9999 133C104.003 133 134 103.227 134 66.5C134 29.773 104.003 0 66.9999 0C29.9968 0 0 29.773 0 66.5C0 103.227 29.9968 133 66.9999 133Z"
			fill="#A30A15"
			fillOpacity="1"
		/>
	</svg>
);

const ShapeThree = () => (
	<svg
		className="absolute blur-md top-[15%] right-[10%] -z-[1] text-gray-50 dark:text-[#1E2735]"
		width="223"
		height="262"
		viewBox="0 0 223 262"
		fill="#A30A15"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M212.555 100.254C224.477 169.763 239.522 246.47 170.132 258.373C100.741 270.275 36.3657 251.51 24.443 182C12.5203 112.491 -30.8157 14.839 38.5748 2.93669C107.965 -8.96565 200.632 30.7447 212.555 100.254Z"
			fill="#A30A15"
			fillOpacity="0.8"
		/>
	</svg>
);

const ShapeFour = () => (
	<svg
		className="absolute blur-md bottom-[22%] right-[15%] -z-[1] text-gray-50 dark:text-[#1E2735]"
		width="155"
		height="166"
		viewBox="0 0 155 166"
		fill="#A30A15"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M141.003 54.264C153.758 98.3055 169.054 146.771 125.088 159.504C81.1214 172.237 38.1659 164.793 25.4108 120.751C12.6556 76.7097 -22.4405 16.769 21.5258 4.03561C65.4921 -8.69781 128.248 10.2226 141.003 54.264Z"
			fill="#A30A15"
			fillOpacity="0.8"
		/>
	</svg>
);

const TuningAbout = () => {
	return (
		<section className="mx-auto min-h-[60vh] pt-14 md:pt-24 pb-14 lg:pb-0 bg-background text-zinc-900 dark:text-white relative  z-[1]">
			<ShapeThree />
			<ShapeFour />
			<div className="container gap-4 px-4">
				<div className="grid grid-cols-12 justify-between">
					<div className="col-span-12 md:col-span-5">
						<div className="relative">
							{/* <ShapeOne /> */}
							<ShapeTwo />
						</div>
					</div>
					<div className="col-span-12 mt-16 justify-center md:col-span-12 md:mr-4">
						<div>
							<h2 className="text-2xl text-center leading-tight font-bold md:text-5xl mt-4">
								Защо тунинга е важен?
							</h2>
							<p className="text-base text-center sm:text-lg leading-relaxed opacity-80 my-6 lg:pr-12">
								Тунингът подобрява производителността, увеличава горивната ефективност, подобрява шофьорското изживяване, увеличава мощността на двигателя, което води до по-отзивчив и приятен автомобил.</p>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-2 md:flex-row justify-center items-center">
					<ServiceCard blur={true} label="Производителност" src="/fast.svg" />
					<ServiceCard blur label="Горивна ефективност" src="/fuel.svg" />
					<ServiceCard blur={true} label="По-добро шофьорското изживяване" src="/driving.svg" />
				</div>
			</div>
		</section>
	);
};
export default TuningAbout