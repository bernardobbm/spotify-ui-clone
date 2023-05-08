import {
	Maximize2,
	Laptop2,
	LayoutList,
	Mic2,
	Volume,
	Play,
	Repeat,
	Shuffle,
	SkipBack,
	SkipForward,
} from 'lucide-react';

export function Footer() {
	return (
		<footer className="fixed bottom-0 border-t bg-zinc-800 border-zinc-700 flex items-center justify-between w-full px-6 py-4 text-white">
			<div className="flex items-center gap-2">
				<img
					src="/src/assets/arctic-monkeys-album.jpg"
					alt="Imagem do album AM da banda Arctic Monkeys"
					className="rounded"
					width={56}
					height={56}
				/>

				<div className="flex flex-col gap-1">
					<strong className="font-normal">I wanna be yours</strong>
					<span className="text-xs text-zinc-400">Arctic Monkeys</span>
				</div>
			</div>

			<div className="flex flex-col items-center gap-2">
				<div className="flex items-center gap-6">
					<Shuffle fill="white" size={20} className="text-zinc-200" />
					<SkipBack fill="white" size={20} className="text-zinc-200" />

					<button className="w-10 h-10 flex items-center justify-center pl-1 rouded-full bg-white text-black rounded-full">
						<Play fill="black" size={20} className="text-zinc-200" />
					</button>

					<SkipForward fill="white" size={20} className="text-zinc-200" />
					<Repeat size={20} className="text-zinc-200" />
				</div>

				<div className="flex items-center gap-2">
					<span className="text-xs text-zinc-500">0:31</span>
					<div className="h-1 rounded-full w-96 bg-zinc-600">
						<div className="h-1 rounded-full w-40 bg-zinc-200"></div>
					</div>
					<span className="text-xs text-zinc-500">2:24</span>
				</div>
			</div>

			<div className="flex items-center gap-2">
				<Mic2 size={20} />
				<LayoutList size={20} />
				<Laptop2 size={20} />

				<div className="flex items-center gap-4">
					<Volume size={20} />

					<div className="h-1 rounded-full w-24 bg-zinc-600">
						<div className="h-1 rounded-full w-10 bg-zinc-200"></div>
					</div>

					<Maximize2 size={20} />
				</div>
			</div>
		</footer>
	);
}
