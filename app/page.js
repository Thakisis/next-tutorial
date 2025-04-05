import { Terminal } from "@/components/magicui/terminal";

export default function Home() {
	return (
		<div className="">
			<main className="container  m-auto flex flex-col">
				<header className="flex justify-center items-center p-5">
					<h1 className="text-4xl font-bold">Create Next App</h1>
				</header>
				<section className="">
					<h2 className="text-xl"> Creando el proyecto</h2>
					<p className="">
						Para empezar vamos a necesitar instalar Node.js que viene con npm,
						pero yo prefiro usar pnpm para instalar las dependencias.
					</p>
					<p>
						<code>npm install -g pnpm</code>
					</p>
				</section>
			</main>
			<footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
		</div>
	);
}
