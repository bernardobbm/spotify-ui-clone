import { ReactNode } from 'react';

interface PlaylistCardProps {
	children: ReactNode;
	link?: string;
}

export function PlaylistCard({ children, link = '#' }: PlaylistCardProps) {
	return (
		<a
			href={link}
			className="flex items-center bg-white/10 rounded overflow-hidden gap-4 hover:bg-white/20 transition-colors"
		>
			{children}
		</a>
	);
}
