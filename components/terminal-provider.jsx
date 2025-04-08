import React, { act, createContext, useState } from "react";

const TerminalContext = createContext("terminal");

export const TerminalProvider = ({ children, defaultvalues }) => {
	const [values, setValues] = useState(defaultvalues);
	const [currentLine, setCurrentLine] = useState(-1);
	const setValue = ({ prop, value }) => {
		setValues((prev) =>
			prev.map((item) =>
				item.name === prop ? { ...item, selected: value } : item
			)
		);
	};
	const nextLine = () => {
		if (currentLine >= values.length - 1) return;

		if (currentLine >= 1) {
			const actLine = values.find((item) => item.order === currentLine);

			const newValues = values.map((item) =>
				item.order === currentLine ? { ...item, complete: true } : item
			);
			setValues(newValues);
		}
		setCurrentLine((prev) => prev + 1);
	};

	return (
		<TerminalContext.Provider
			value={{
				values,
				setValue,
				currentLine,
				nextLine,
			}}
		>
			{children}
		</TerminalContext.Provider>
	);
};

export { TerminalContext };
