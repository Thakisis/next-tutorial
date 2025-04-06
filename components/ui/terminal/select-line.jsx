import { useState, useEffect, use } from "react";
import { TerminalContext } from "@/components/terminal-provider";
export const SelectLine = ({ name = "typeScript", children }) => {
	const { values, setValue } = use(TerminalContext);

	const { options, complete, selected } = values?.find(
		(item) => item.name === name
	);

	useEffect(() => {
		const handleKeyDown = (e) => {
			console.log("handleKeyDown", complete);
			if (complete) return;
			const key = e.key;
			if (key !== "ArrowLeft" && key !== "ArrowRight") return;
			console.log("key");

			let dir = 0;
			if (e.key === "ArrowLeft") dir = options.length - 1;
			if (e.key === "ArrowRight") dir = 1;

			setValue({ prop: name, value: (selected + dir) % options.length });
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [complete, name, options, selected, setValue]);
	const opciones = options.map((opt, index) => (
		<span
			key={opt}
			className={` ${
				index === selected ? "text-blue-400 underline" : "text-gray-400"
			}`}
		>
			{opt}
		</span>
	));

	return (
		<div className=" text-white flex items-center ">
			<div className="flex gap-2">
				<span className="text-green-500 w-2">{complete ? "✔" : "?"}</span>
				{children}
			</div>
			<span>?</span>
			<div className="flex gap-1">
				<span className="text-gray-500 ">{complete ? "..." : " » "}</span>
				{opciones[0]}
				<span>/</span>
				{opciones[1]}
			</div>
		</div>
	);
};

export default SelectLine;
