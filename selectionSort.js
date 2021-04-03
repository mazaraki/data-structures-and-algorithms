function selectionSort(array) {
  
  for(let i = 0; i < array.length; i++){
    let min = i; // assume first item in the list holds the minimum value
    for(let j = i + 1; j < array.length; j++){
      if(array[min] > array[j]) 
        min = j;
      
      if(min !== i){ // swap the elements
        let temp = array[i];
        array[i] = array[min];
        array[min] = temp;
      }
    }
  }
  return array;
}
