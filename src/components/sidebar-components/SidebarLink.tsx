import { ReactNode } from 'react';

interface SidebarLinkProps {
	children: ReactNode;
	link?: string;
	styles?: string;
	hoverColor?: boolean;
}

export function SidebarLink({
	children,
	link = '#',
	styles,
	hoverColor = false,
}: SidebarLinkProps) {
	styles += hoverColor ? ' hover:bg-zinc-800' : '';

	return (
		<a href={link} className={`flex gap-2 p-2 items-center font-semibold rounded-md ${styles}`}>
			{children}
		</a>
	);
}
