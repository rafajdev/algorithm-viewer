import { useState } from 'react'
import Sidebar from '../components/Layout/Sidebar/Sidebar'

export default function AlgorithmVisualizer() {
	const [isOpen, setIsOpen] = useState<boolean>(true)

	return (
		<main
			className='
      bg-[#0d0d14] w-dvw h-dvh 
      bg-[linear-gradient(to_right,transparent_calc(100%-1px),#102026_calc(100%-1px)),linear-gradient(to_top,transparent_calc(100%-1px),#102026_calc(100%-1px))]
      bg-size-[40px_40px]

      flex
      '
		>
			<Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
			<p className='text-white'>Algorithm Viewer</p>
		</main>
	)
}
