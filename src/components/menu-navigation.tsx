import { Home, Search, Library } from 'lucide-react';

export function MenuNavigation() {
	return (
		<nav className="flex flex-col p-5 gap-3">
			<a href="#" className="flex gap-2 items-center">
				<h1 className="text-3xl font-bold">Spotify</h1>
			</a>

			<a href="#" className="font-semibold flex gap-2 items-center p-1">
				<Home size={25} />
				Home
			</a>
			<a href="#" className="font-semibold flex gap-2 items-center p-1">
				<Search size={25} />
				Search
			</a>
			<a href="#" className="font-semibold flex gap-2 items-center p-1">
				<Library size={25} />
				Your Library
			</a>
		</nav>
	);
}
