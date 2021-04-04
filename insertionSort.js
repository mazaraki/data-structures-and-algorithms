function insertionSort(array) {
  for(let i = 1; i < array.length; i++){ // start index from 1 -> right side of array
    let key = array[i];
    let j = i - 1;
    
    while(j >= 0 && array[j] > key){
      array[j + 1] = array[j];
      j = j - 1;
    }   
    array[j + 1] = key;
  }
  
  return array;
}
