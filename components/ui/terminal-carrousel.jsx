import { use } from "react";
import { VerticalCarousel, CarouselSlide } from "@/components/ui/carousel";
import { SlideTerminal } from "./SlideTerminal";
import { TerminalContext } from "../terminal-provider";

export function TerminalCarrousel() {
	const { currentLine, nextLine, values } = use(TerminalContext);

	console.log("terminal carousel:", currentLine);
	const slides = values.map((value, index) => (
		<SlideTerminal
			key={index}
			index={index}
			title={value.title}
			text={value.description}
		/>
	));
	return (
		<VerticalCarousel activeIndex={currentLine >= 0 ? currentLine : 0}>
			{slides}
		</VerticalCarousel>
	);
}
