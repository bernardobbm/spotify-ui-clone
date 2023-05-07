import { SidebarLink } from './SidebarLink';

export function PlaylistMenu() {
	return (
		<nav className="flex flex-col p-5">
			<SidebarLink hoverColor={true}>FAV</SidebarLink>
			<SidebarLink hoverColor={true}>Daily Mix1</SidebarLink>
			<SidebarLink hoverColor={true}>Discovery Weekly</SidebarLink>
			<SidebarLink hoverColor={true}>Malayalam</SidebarLink>
			<SidebarLink hoverColor={true}>Dance/Eletronix Mix</SidebarLink>
			<SidebarLink hoverColor={true}>EDM/Popular</SidebarLink>
		</nav>
	);
}
