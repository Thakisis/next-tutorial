"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useEffect, useRef, useState, use } from "react";
import { TerminalContext } from "@/components/terminal-provider";
const AnimatedLine = ({
	children,
	className,
	duration = 60,
	delay = 0,
	cursorColor = "#fff",
	cursorWidth = "2px",
	cursorHeight = "1em",

	as: Component = "span",
	...props
}) => {
	if (typeof children !== "string") {
		throw new Error("AnimatedLine: children must be a string. Received:");
	}

	const MotionComponent = motion.create(Component, {
		forwardMotionProps: true,
	});

	// Track displayed characters
	const [displayedText, setDisplayedText] = useState("");
	const [started, setStarted] = useState(false);
	const [isComplete, setIsComplete] = useState(false);

	const elementRef = useRef(null);

	// Start animation after delay
	useEffect(() => {
		const startTimeout = setTimeout(() => {
			setStarted(true);
		}, delay);
		return () => clearTimeout(startTimeout);
	}, [delay]);

	// Handle typing animation
	useEffect(() => {
		if (!started) return;

		let i = 0;
		const typingEffect = setInterval(() => {
			if (i < children.length) {
				const nextChar = children[i];
				setDisplayedText((prev) => prev + nextChar);
				i++;
			} else {
				clearInterval(typingEffect);
				setIsComplete(true);
			}
		}, duration);

		return () => {
			clearInterval(typingEffect);
		};
	}, [children, duration, started]);

	// Render the characters - one by one without fade animation
	// We'll add new characters instead of re-rendering everything
	const renderText = () => {
		return displayedText
			.split("")
			.map((char, idx) => <span key={`c-${idx}`}>{char}</span>);
	};

	return (
		<MotionComponent ref={elementRef} className={cn(className)} {...props}>
			{renderText()}

			{started && (
				<motion.span
					style={{
						display: "inline-block",
						width: cursorWidth,
						height: cursorHeight,
						backgroundColor: cursorColor,
						marginLeft: "2px",
						verticalAlign: "middle",
					}}
					animate={isComplete ? { opacity: [1, 0, 1] } : { opacity: 1 }}
					transition={
						isComplete
							? {
									duration: 1,
									repeat: Infinity,
									repeatType: "loop",
									times: [0, 0.5, 1],
							  }
							: {}
					}
				/>
			)}
		</MotionComponent>
	);
};
export default AnimatedLine;
