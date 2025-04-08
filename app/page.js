"use client";

import { terminalHome } from "@/contants/terminal";
import { Terminal } from "@/components/ui/terminal";
import { TerminalProvider } from "@/components/terminal-provider";
import { TerminalCarrousel } from "@/components/ui/terminal-carrousel";

export default function Home() {
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
					<div className="w-full flex  m-4 gap-4">
						<TerminalProvider defaultvalues={terminalHome}>
							<div className="w-1/2  ">
								<Terminal className="w-full" />
							</div>
							<div className="w-1/2  p-4 ">
								<TerminalCarrousel />
							</div>
						</TerminalProvider>
					</div>
				</section>
			</main>
			<footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
		</div>
	);
}
