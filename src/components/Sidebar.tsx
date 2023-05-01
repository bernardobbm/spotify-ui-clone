import { Home, Search, Library, DownloadCloud } from 'lucide-react';
import { SidebarLink } from './SidebarLink';

export function Sidebar() {
	return (
		<aside className="w-72 bg-black text-white flex flex-col">
			<div className="flex flex-col flex-1">
				<nav className="flex flex-col p-5 gap-3">
					<SidebarLink styles="py-4">
						<img src="/src/assets/spotify-icon-logo.svg" alt="Logo do Spotify" />
					</SidebarLink>

					<SidebarLink styles="p-1">
						<Home size={25} />
						Home
					</SidebarLink>

					<SidebarLink styles="p-1">
						<Search size={25} />
						Search
					</SidebarLink>

					<SidebarLink styles="p-1">
						<Library size={25} />
						Your Library
					</SidebarLink>
				</nav>

				<nav className="flex flex-col p-5 gap-3">
					<SidebarLink>Create Playlist</SidebarLink>

					<SidebarLink>Liked Songs</SidebarLink>

					<SidebarLink>Your Episodes</SidebarLink>
				</nav>
			</div>

			<SidebarLink styles="p-5 gap-7">
				<DownloadCloud size={25} />
				Install the app
			</SidebarLink>
		</aside>
	);
}
