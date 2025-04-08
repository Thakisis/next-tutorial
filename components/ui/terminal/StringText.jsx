import React from "react";

export default function StringText({ text, tags = {} }) {
	// Crear un patrón dinámico de regex como: /<(blue|green)>(.*?)<\/\1>/gs
	const tagNames = Object.keys(tags);
	console.log("tagNames:", tagNames);

	if (tagNames.length === 0) return <span>{text}</span>;

	const tagPattern = tagNames.join("|");
	const regex = new RegExp(`<(${tagPattern})>(.*?)<\/\\1>`, "gs");

	const parts = [];
	let lastIndex = 0;
	let key = 0;

	let match;
	console.log("before match");
	while ((match = regex.exec(text)) !== null) {
		console.log("regex match");
		const before = text.slice(lastIndex, match.index);
		const tag = match[1];
		const content = match[2];

		// Añadir el texto antes de la etiqueta
		if (before) {
			parts.push(<span key={key++}>{before}</span>);
		}

		// Aplicar el renderizador específico para la etiqueta
		const renderer = tags[tag];
		if (renderer) {
			parts.push(
				<React.Fragment key={key++}>{renderer(content)}</React.Fragment>
			);
		}

		lastIndex = regex.lastIndex;
	}

	// Añadir el texto restante después de la última coincidencia
	const remaining = text.slice(lastIndex);
	if (remaining) {
		parts.push(<span key={key++}>{remaining}</span>);
	}

	return <>{parts}</>;
}
