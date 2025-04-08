import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import StringText from "./terminal/StringText";
export function SlideTerminal({ title, text }) {
	const renderers = {
		p: (content) => <p>{content}</p>,
	};

	return (
		<Card className="h-full w-full">
			<CardHeader>
				<CardTitle>{title}</CardTitle>
			</CardHeader>
			<CardContent className="flex  gap-4 flex-col">
				<StringText text={text} tags={renderers} />
			</CardContent>
		</Card>
	);
}
