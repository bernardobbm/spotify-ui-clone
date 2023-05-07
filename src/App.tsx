import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Sidebar } from './components/sidebar-components/Sidebar';
import { PlaylistCard } from './components/PlaylistCard';
import { DropdownProfileMenu } from './components/DropdownProfileMenu';

export function App() {
	const playlists = [
		'Liked Songs',
		'Neffex Playlist',
		'K/DA',
		'Liked Songs',
		'Dance/Eletronic Mix',
	];

	return (
		<div className="h-screen flex flex-col relative">
			<div className="flex flex-1">
				<Sidebar />

				<main className="absolute inset-0 bottom-10 left-72 bg-zinc-800 text-white px-10 py-5">
					<div className="flex justify-between">
						<div className="flex items-center gap-3">
							<button className="bg-black/20 rounded-full p-1">
								<ChevronLeft />
							</button>

							<button className="bg-black/20 rounded-full p-1">
								<ChevronRight />
							</button>
						</div>

						<DropdownProfileMenu />
					</div>

					<h1 className="font-bold text-3xl mt-10">Good Morning</h1>

					<div className="grid grid-cols-3 gap-4 mt-5">
						{playlists.map((playlist) => {
							return (
								<PlaylistCard key={playlist + playlist.at}>
									<img
										src="/src/assets/arctic-monkeys-album.jpg"
										alt="Imagem do album da banda Arctic Monkeys"
										width={104}
										height={104}
									/>
									<strong>{playlist}</strong>
								</PlaylistCard>
							);
						})}
					</div>
				</main>
			</div>

			<footer className="h-10 text-white bg-zinc-700">footer</footer>
		</div>
	);
}
