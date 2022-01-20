// function solution(a, b) {
//     //....
//     return [];
// }



// console.log(solution([2, 4, 3], [5, 6, 4])); // [8, 0, 7]
// console.log(solution([1, 4, 5], [4, 4, 2])); // [5, 8, 7]
// console.log(solution([1, 1, 1], [])); // [1, 1, 1]
// console.log(solution([], [9, 9, 9])); // [9, 9, 9]
// console.log(solution([9,9,9], [9,9,9])); // [1, 9, 9, 8]
// console.log(solution([], [])); // []
// console.log(solution([], [0])); // [0]
// console.log(solution([0], [0])); // [0]
// console.log(solution([1,1,1,1,1,1,1,1], [1, 0])); // [1, 1, 1, 1, 1, 1, 2, 1]
// console.log(solution([9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],[1]));
// // // [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let arr = [];
function solution(a,b){
  let summ = 0;
  for(let i = 0, k = 0; i < a.length, k < b.length; i++, k++){
    summ = a[i] + b[k];
    if(summ >= 10){
      summ = Number(summ.toString().slice(1));
      // console.log(arr[arr.length-1] + 1);
      arr[arr.length-1] =  arr[arr.length-1] + 1;        
    }
    arr.push(summ)
  }
  console.log(arr);    
  }
solution([2, 4, 3], [5, 6, 4]); //[8, 0, 7]
