import { Home, Search, Library } from 'lucide-react';

import { SidebarLink } from './SidebarLink';

export function NavigationMenu() {
	return (
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
	);
}
