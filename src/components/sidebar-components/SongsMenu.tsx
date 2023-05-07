import { SidebarLink } from './SidebarLink';

export function SongsMenu() {
	return (
		<nav className="flex flex-col p-5">
			<SidebarLink hoverColor={true}>
				<img className="bg-white rounded" src="/src/assets/spotify-create-playlist-icon.svg" />
				Create Playlist
			</SidebarLink>

			<SidebarLink hoverColor={true}>
				<img className="rounded" src="/src/assets/spotify-liked-songs-icon.svg" />
				Liked Songs
			</SidebarLink>

			<SidebarLink hoverColor={true}>
				<img className="rounded" src="/src/assets/spotify-your-episodes-icon.svg" />
				Your Episodes
			</SidebarLink>
		</nav>
	);
}
