import { MenuNavigation } from './components/menu-navigation';

export function App() {
	return (
		<div className="h-screen flex flex-col">
			<div className="flex flex-1">
				<aside className="w-72 bg-black text-white">
					<MenuNavigation />
				</aside>
				<main>main</main>
			</div>

			<footer className="h-10 text-white bg-zinc-700">footer</footer>
		</div>
	);
}
