import { Menu } from 'lucide-react'

interface NavbarButtonProps {
	isOpen: boolean
	onClick: () => void
}

export default function NavbarButton(props: NavbarButtonProps) {
	return (
		<button
			className={`bg-[#102026] absolute top-4 right-0 transition-transform duration-300 md:hidden rounded-full p-3 ${props.isOpen ? 'translate-x-1/2' : 'translate-x-[125%]'}`}
			onClick={props.onClick}
		>
			<Menu size={24} strokeWidth={2} color='white' />
		</button>
	)
}
