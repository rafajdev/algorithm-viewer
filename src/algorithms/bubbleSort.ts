export default function bubbleSort(array: number[]) {
   const sortedArray: number[] = [...array]

   for (let i = 0; i < sortedArray.length; i++) {
      for (let n = 0; n < sortedArray.length - 1 - i; n++) {
         const firstNumber = sortedArray[n]
         const secondNumber = sortedArray[n + 1]

         if (firstNumber > secondNumber) {
            sortedArray[n] = secondNumber
            sortedArray[n + 1] = firstNumber
         }
      }
   }

   return sortedArray
}