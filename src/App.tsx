import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Sidebar } from './components/sidebar-components/Sidebar';
import { PlaylistCard } from './components/PlaylistCard';
import { DropdownProfileMenu } from './components/DropdownProfileMenu';
import { Footer } from './components/Footer';

export function App() {
	const playlists = [
		'Liked Songs',
		'Neffex Playlist',
		'K/DA',
		'More listened',
		'Dance/Eletronic Mix',
	];

	const albums = ['am', 'am', 'am', 'am', 'am'];

	return (
		<div className="h-screen flex flex-col relative">
			<div className="flex flex-1">
				<Sidebar />

				<main className="absolute inset-0 left-72 bg-zinc-900 text-white px-10 py-5 overflow-auto">
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
										alt="Imagem do album AM da banda Arctic Monkeys"
										width={104}
										height={104}
									/>
									<strong>{playlist}</strong>
								</PlaylistCard>
							);
						})}
					</div>

					<h2 className="font-bold text-2xl mt-10">Made for Bernardo Borges</h2>

					<div className="grid grid-cols-5 gap-4 mt-4 mb-24">
						{albums.map((album) => {
							return (
								<a
									href="#"
									className="flex flex-col bg-white/5 p-2 rounded-md justify-center hover:bg-white/10 transition-colors gap-2"
									key={album + album.at}
								>
									<img
										src="/src/assets/arctic-monkeys-album.jpg"
										alt="Imagem do album AM da banda Arctic Monkeys"
										className="w-full"
										width={104}
										height={104}
									/>
									<strong className="font-semibold">AM</strong>
									<span className="text-sm text-zinc-400">Arctic Monkeys</span>
								</a>
							);
						})}
					</div>
				</main>
			</div>

			<Footer />
		</div>
	);
}
