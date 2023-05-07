import { SidebarLink } from './SidebarLink';

export function PlaylistMenu() {
	return (
		<nav className="flex flex-col p-5 gap-3 overflow-x-auto">
			<SidebarLink>FAV</SidebarLink>
			<SidebarLink>Daily Mix1</SidebarLink>
			<SidebarLink>Discovery Weekly</SidebarLink>
			<SidebarLink>Malayalam</SidebarLink>
			<SidebarLink>Dance/Eletronix Mix</SidebarLink>
			<SidebarLink>EDM/Popular</SidebarLink>
		</nav>
	);
}
