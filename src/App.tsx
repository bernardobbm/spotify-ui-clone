import { Sidebar } from './components/sidebar-components/Sidebar';

export function App() {
	return (
		<div className="h-screen flex flex-col">
			<div className="flex flex-1">
				<Sidebar />
				<main>main</main>
			</div>

			<footer className="h-10 text-white bg-zinc-700">footer</footer>
		</div>
	);
}
