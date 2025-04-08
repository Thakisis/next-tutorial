"use client";

import React, { useState } from "react";

export function CarouselSlide({ children }) {
	return <div className="w-full h-full">{children}</div>;
}

export function VerticalCarousel({ children, activeIndex = 0 }) {
	const slides = React.Children.toArray(children);
	console.log("carousel:", activeIndex);
	return (
		<div className="flex flex-col items-center w-full mx-auto">
			<div className="relative w-full h-[400px] overflow-hidden">
				<div
					className="transition-transform duration-300 ease-in-out h-full"
					style={{ transform: `translateY(-${activeIndex * 100}%)` }}
				>
					{React.Children.map(children, (child, index) => (
						<div
							key={index}
							className="absolute top-0 left-0 w-full h-full transition-opacity duration-300"
							style={{
								transform: `translateY(${index * 100}%)`,
								opacity: activeIndex === index ? 1 : 0.3,
								pointerEvents: activeIndex === index ? "auto" : "none",
							}}
						>
							{child}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
