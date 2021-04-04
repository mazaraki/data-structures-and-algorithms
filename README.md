# data-structures-and-algorithms

## Search algorithms
* Linear Search

## Sorting algorithms
**[Bubble Sort](https://github.com/mazaraki/data-structures-and-algorithms/blob/main/bubblesort.js)**<br />
  The simplest sorting algorithm. It works by *repeatedly swapping the adjacent elements* if they are in the wrong order. It starts at the beginning of an unsorted array and 'bubbles up' unsorted values towards the end, until the array is completely sorted.<br />
  &plus; Simple, Elements are swapped in place without additional temporary storage <br />
  &minus; Multiple iterations, Not efficient with a list with many items, Quadratic time complexity (O(n^2))
  
**[Selection Sort](https://github.com/mazaraki/data-structures-and-algorithms/blob/main/selectionSort.js)**<br />
  An *[in-place, unstable, comparison algorithm.](https://stackabuse.com/selection-sort-in-javascript/)*
  It works by starting in the first position, assuming this holds the element with the smallest (or biggest) value. It *selects the minimum value* in a list and *swaps it with the first value* in the list. Then, it starts at the second position, selects the element of the array with the smallest value and it swaps with the second element. It goes on until the list is sorted.<br />
  &plus; Simple, Good performance on a small list <br />
  &minus; Pure performance when dealing with a big list, Quadratic time complexity (O(n^2))
  
**[Insertion Sort](https://github.com/mazaraki/data-structures-and-algorithms/blob/main/insertionSort.js)**<br />
   *[A highly intuitive, stable, in-place, and of comparison-type.](https://stackabuse.com/insertion-sort-in-javascript/)* The list is divided into two parts, the left, which is sorted, and the right (unsorted). Initially, the left (sorted) is empty and the right is the entire input list. The element with the minimun value is selected from the unsorted list and it is mooved to the left side (sorted). The boundary of the unsorted list is moved each time to the right by removing one element.<br />
   &plus; Simple, Performance advantage over complicated algorithms in some cases
   &minus; It has O(n^2) time complexity. 
   
**[Quick Sort]()**<br />
  
  
    
  



### Sources
* https://dev.to/surajondev/algorithms-every-programmer-should-know-part-1-searching-algorithm-1hd3
* https://www.freecodecamp.org/learn/coding-interview-prep/algorithms
* https://www.geeksforgeeks.org/
* https://stackabuse.com/selection-sort-in-javascript/
