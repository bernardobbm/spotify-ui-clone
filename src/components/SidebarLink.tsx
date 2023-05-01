import { ReactNode } from 'react';

interface SidebarLinkProps {
	children: ReactNode;
	styles?: string;
}

export function SidebarLink({ children, styles }: SidebarLinkProps) {
	return (
		<a href="#" className={`flex gap-2 items-center font-semibold ${styles}`}>
			{children}
		</a>
	);
}
