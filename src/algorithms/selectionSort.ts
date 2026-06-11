export default function selectionSort(array: number[]) {
	const sortedArray: number[] = [...array]

	for (let i = 0; i < sortedArray.length; i++) {
		const first = sortedArray[i]
		let minIndex = i

		for (let n = i + 1; n < sortedArray.length; n++) {
			const target = sortedArray[n]

			if (target < first) {
				minIndex = n
			}
		}

		if (i != minIndex) {
			const temp = sortedArray[i]
			sortedArray[i] = sortedArray[minIndex]
			sortedArray[minIndex] = temp
		}
	}

	return sortedArray
}
