import { ArrowDownCircle } from 'lucide-react';

import { SidebarLink } from './SidebarLink';
import { NavigationMenu } from './NavigationMenu';
import { SongsMenu } from './SongsMenu';
import { PlaylistMenu } from './PlaylistsMenu';

export function Sidebar() {
	return (
		<aside className="w-72 bg-black text-white flex flex-col h-screen overflow-auto bottom-10">
			<div className="flex flex-col flex-1">
				<NavigationMenu />
				<SongsMenu />
				<PlaylistMenu />
			</div>

			<SidebarLink styles="px-7 py-5 gap-5 mb-24">
				<ArrowDownCircle size={25} />
				Install the app
			</SidebarLink>
		</aside>
	);
}
