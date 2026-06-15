export default function binarySearch(array: number[], target: number) {
   let left = 0
   let right = array.length - 1

   while(left <= right) {
      const middle = Math.floor((left + right) / 2 )

      if(array[middle] > target) {
         right = middle - 1
      } else if(array[middle] < target) {
         left = middle + 1
      } else {
         return middle
      }
   }

   return null
}