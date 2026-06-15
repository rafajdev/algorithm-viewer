import SidebarHeaderIcon from './SidebarHeaderIcon'

export default function SidebarHeader() {
	return (
		<header className='px-7 pt-5 flex gap-4'>
			<SidebarHeaderIcon />
			<div className='font-["Rajdhani"] flex flex-col'>
				<h1 className='text-white text-xl md:text-2xl font-semibold tracking-tight'>
					ALGORITHM VIEWER
				</h1>
				<h3 className='text-[#00ffd0] font-semibold tracking-widest'>VISUALIZE HOW ALGORITHMS WORK</h3>
			</div>
		</header>
	)
}
