'use strict';
// A utility function to swap two elements
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

/* This function takes last element as pivot, places
 the pivot element at its correct position in sorted
 array, and places all smaller (smaller than pivot)
 to left of pivot and all greater elements to right
 of pivot */
function partition(arr, low, high) {

  // pivot
  let pivot = arr[high];

  // Index of smaller element and
  // indicates the right position
  // of pivot found so far
  let i = (low - 1);

  for (let j = low; j <= high - 1; j++) {

    // If current element is smaller 
    // than the pivot
    if (arr[j] < pivot) {

      // Increment index of 
      // smaller element
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, high);
  return (i + 1);
}

/* The main function that implements QuickSort
        arr[] --> Array to be sorted,
        low --> Starting index,
        high --> Ending index
*/
function quickSort(arr, low, high) {
  if (low < high) {

    // pi is partitioning index, arr[p]
    // is now at right place 
    let pi = partition(arr, low, high);

    // Separately sort elements before
    // partition and after partition
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
}

// Driver program to test above functions
let arr = [8, 4, 23, 42, 16, 15];
quickSort(arr, 0, arr.length - 1);
console.log(arr);

// Output: [1, 5, 7, 8, 9, 10]

let arr1 = [20, 18, 12, 8, 5, -2];
quickSort(arr1, 0, arr1.length - 1);
console.log(arr1);

// Output: [-2, 5, 8, 12, 18, 20]

let arr2 = [5, 12, 7, 5, 5, 7];
quickSort(arr2, 0, arr2.length - 1);
console.log(arr2);

// Output: [5, 5, 5, 7, 7, 12]

let arr3 = [2, 3, 5, 7, 13, 11];
quickSort(arr3, 0, arr3.length - 1);
console.log(arr3);

// Output: [2, 3, 5, 7, 11, 13]

module.exports = quickSort;