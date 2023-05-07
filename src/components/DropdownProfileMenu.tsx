import { ChevronDown, ExternalLink } from 'lucide-react';
import { useRef, useState } from 'react';

export function DropdownProfileMenu() {
	const [menuVisible, setMenuVisible] = useState<boolean>(false);
	const menuProfile = useRef<HTMLDivElement | null>(null);

	function handleMenuClick() {
		if (!menuProfile.current) return;

		setMenuVisible(!menuVisible);

		if (!menuVisible) {
			menuProfile.current.style.display = 'none';
			return;
		}

		menuProfile.current.style.display = 'flex';
	}

	return (
		<>
			<div
				onClick={handleMenuClick}
				className="flex items-center gap-2 bg-black/50 rounded-full p-1 cursor-pointer hover:bg-black/60 transition-colors relative"
			>
				<img
					width={30}
					height={30}
					src=" https://github.com/bernardobbm.png"
					className="bg-slate-500 rounded-full"
				/>
				<strong>user</strong>
				<ChevronDown size={30} />

				<div
					ref={menuProfile}
					className="flex-col w-52 bg-zinc-900 p-4 gap-4 rounded absolute right-0 top-12 cursor-default font-semibold none"
				>
					<a href="#" className="flex justify-between">
						Account
						<ExternalLink />
					</a>
					<a href="#">Profile</a>
					<a href="#">Log out</a>
				</div>
			</div>
		</>
	);
}
