import { Home, Search, Library } from 'lucide-react';

import { SidebarLink } from './SidebarLink';

export function NavigationMenu() {
	return (
		<nav className="flex flex-col px-5 py-3">
			<SidebarLink styles="py-4 mb-6">
				<img src="/src/assets/spotify-icon-logo.svg" alt="Logo do Spotify" />
			</SidebarLink>

			<div className="flex flex-col gap-2">
				<SidebarLink hoverColor={true}>
					<Home size={25} />
					Home
				</SidebarLink>

				<SidebarLink hoverColor={true}>
					<Search size={25} />
					Search
				</SidebarLink>

				<SidebarLink hoverColor={true}>
					<Library size={25} />
					Your Library
				</SidebarLink>
			</div>
		</nav>
	);
}
