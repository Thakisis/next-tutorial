import { use } from "react";
import { TerminalContext } from "@/components/terminal-provider";
function InputLine({ children, name }) {
	const { values, setValue } = use(TerminalContext);

	const { complete, selected, placeholder } = values?.find(
		(item) => item.name === name
	);

	const input = complete ? (
		<span>{selected}</span>
	) : (
		<input
			className="ring-0 border-none outline-none"
			autoFocus
			placeholder="my-app"
			max-length="20"
			value={selected === placeholder ? "" : selected}
			onChange={(e) => {
				setValue({ prop: name, value: e.target.value, complete: false });
			}}
		/>
	);
	return (
		<div className="flex gap-2">
			<span className="text-green-500 w-2">{complete ? "✔" : "?"}</span>
			{children}
			<span className="text-gray-500 ">{complete ? "..." : "»"}</span>
			{input}
		</div>
	);
}

export default InputLine;
