"use client";
import { useState } from "react";

import { Terminal, Line } from "@/components/ui/terminal";
import { TerminalProvider } from "@/components/terminal-provider";
const steps = [];
export default function Home() {
	const [stage, setStage] = useState(0);
	return (
		<div className="">
			<main className="container  m-auto flex flex-col ">
				<header className="flex justify-center items-center p-5">
					<h1 className="text-4xl font-bold">Create Next App</h1>
				</header>
				<section className="">
					<h2 className="text-xl"> Creando el proyecto</h2>
					<p className="">
						Para empezar vamos a necesitar instalar Node.js que viene con npm,
						pero yo prefiro usar pnpm para instalar las dependencias.
					</p>
					<p className="p-4">
						<code className="terminal">npm install -g pnpm</code>
					</p>
					<p>
						ahora que tenemos pnpm podemos crear el proyecto con{" "}
						<code className="terminal">pnpm create next-app</code>{" "}
					</p>
					<div className="w-1/2 bg-red-500 m-4">
						<TerminalProvider
							defaultvalues={[
								{
									name: "appname",
									selected: "my-app",
									placeholder: "my-app",
									complete: false,
									order: 1,
								},
								{
									name: "typescript",
									options: ["No", "Yes"],
									selected: 0,

									order: 2,
									complete: false,
								},
								{
									name: "eslint",
									options: ["No", "Yes"],
									selected: 1,
									order: 3,
									complete: false,
								},
								{
									name: "tailwind",
									options: ["No", "Yes"],
									selected: 1,
									order: 4,
									complete: false,
								},
								{
									name: "src",
									options: ["No", "Yes"],
									selected: 1,
									order: 5,
									complete: false,
								},
								{
									name: "approuter",
									options: ["No", "Yes"],
									selected: 1,
									order: 6,
									complete: false,
								},
								{
									name: "turbopack",
									options: ["No", "Yes"],
									selected: 1,
									order: 7,
									complete: false,
								},
								{
									name: "importalias",
									options: ["No", "Yes"],
									selected: 0,
									order: 8,
									complete: false,
								},
							]}
						>
							<Terminal className="w-full">
								<Line type="typewriter" prompt>
									pnpm create next-app
								</Line>
								<Line type="input" name="appname">
									<span>What is your project named? </span>
								</Line>

								<Line type="select" name="typescript">
									<span>Would you like to use</span>
									<span className="text-blue-400">TypeScript</span>
								</Line>
								<Line type="select" name="eslint">
									<span className="text-sm">Would you like to use</span>
									<span className="text-blue-400">ESLint</span>
								</Line>
								<Line type="select" name="tailwind">
									<span>Would you like to use</span>
									<span className="text-blue-400">Tailwind CSS</span>
								</Line>
								<Line type="select" name="src">
									<span>Would you like your code inside a </span>
									<span className="text-blue-400">`src/' directory</span>
								</Line>
								<Line type="select" name="approuter">
									<span>Would you like to use </span>
									<span className="text-blue-400">App Router</span>
								</Line>
								<Line type="select" name="turbopack">
									<span>Would you like to use </span>
									<span className="text-blue-400">App Router</span>
								</Line>
								<Line type="select" name="importalias">
									<span>Would you like to customize the</span>
									<span className="Turbopack">import alias</span>
									<span>{"(`@/*` by default)?"}</span>
								</Line>

								<Line type="typewriter" prompt>
									pnpm create next-app
								</Line>
								<Line
									type="input"
									text="What is your project named? ... my-app"
								>
									texto
								</Line>
							</Terminal>
						</TerminalProvider>
					</div>
				</section>
			</main>
			<footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
		</div>
	);
}
