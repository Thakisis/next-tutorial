"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useMemo, Children, use, useEffect } from "react";
import { TerminalContext } from "@/components/terminal-provider";
import AnimatedLine from "./animated-line";
import SelectLine from "./select-line";
import InputLine from "./input-line";
export const AnimatedSpan = ({ children, delay = 0, className, ...props }) => (
	<motion.div
		initial={{ opacity: 0, y: -5 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.3, delay: delay / 1000 }}
		className={cn("grid text-sm font-normal tracking-tight", className)}
		{...props}
	>
		{children}
	</motion.div>
);

export const Terminal = ({ children, className }) => {
	const { currentLine, nextLine } = use(TerminalContext);

	const height = children.length * 34;
	const allChildren = Children.map(children, (child, index) => {
		if (index > currentLine) return null;
		if (currentLine !== index && child.props.type === "typewriter")
			return (
				<div className="flex text-sm font-normal tracking-tight">
					<DoneLine path={child.props.path}>{child.props.children}</DoneLine>
				</div>
			);

		if (child.props.type === "typewriter") {
			return (
				<div className="flex  text-sm font-normal tracking-tight">
					<span className="prompt">PS C:\proyectos{child.props.path}</span>
					<AnimatedLine key={index}>{child.props.children}</AnimatedLine>
				</div>
			);
		}
		if (child.props.type === "select") {
			return (
				<div className="flex  text-sm font-normal tracking-tight">
					<SelectLine key={index} {...child.props} />
				</div>
			);
		}
		if (child.props.type === "input") {
			return (
				<div className="flex  text-sm font-normal tracking-tight">
					<InputLine key={index} {...child.props} />
				</div>
			);
		}
	});

	const currenChildren = allChildren.slice(0, currentLine + 1);

	console.log("terminal:", currentLine);

	useEffect(() => {
		const detectEnter = (e) => {
			if (e.key === "Enter") {
				nextLine();
			}
		};

		window.addEventListener("keydown", detectEnter);
		return () => window.removeEventListener("keydown", detectEnter);
	}, [nextLine]);

	return (
		<div
			className={cn(
				"z-0 h-full  w-full  rounded-xl border border-border bg-background overflow-hidden",
				className
			)}
		>
			<div className="flex flex-col gap-y-2 border-b border-border p-4 bg-gray-900">
				<div className="flex flex-row gap-x-2  ">
					<div className="h-2 w-2 rounded-full bg-red-500"></div>
					<div className="h-2 w-2 rounded-full bg-yellow-500"></div>
					<div className="h-2 w-2 rounded-full bg-green-500"></div>
				</div>
			</div>
			<pre className="p-4 relative " style={{ height: `${height}px` }}>
				{currentLine === -1 && <InitTerminal />}
				<code className="grid gap-y-1 bg-red overflow-auto  ">
					{currenChildren}
				</code>
			</pre>
		</div>
	);
};

export const Line = ({ children }) => {
	return children;
};

const DoneLine = ({ children, path }) => {
	return (
		<>
			<span className="prompt">PS C:\proyectos{path}</span>
			<span>{children}</span>
		</>
	);
};

const InitTerminal = () => {
	return (
		<div
			className="absolute inset-0 z-99  items-center justify-center bg-black text-gray-400"
			style={{ display: "flex" }}
		>
			presione Enter para abrir un nuevo terminal
		</div>
	);
};
