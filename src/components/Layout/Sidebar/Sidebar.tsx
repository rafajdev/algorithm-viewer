interface SidebarProps {
	isOpen: boolean
	setIsOpen: (value: boolean) => void
}

export default function Sidebar(props: SidebarProps) {
	return (
		<>
			{props.isOpen && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={()=>props.setIsOpen(false)}></div>}
			<nav
				className={`bg-[#12121a] fixed top-0 left-0 w-64 z-50 transition-transform duration-300 md:relative md:translate-x-0 ${props.isOpen ? 'translate-x-0' : '-translate-x-full'}`}
			>
				<p className='text-white'>Sidebar</p>
			</nav>
		</>
	)
}
