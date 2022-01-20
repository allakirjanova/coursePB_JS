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

let i = 0;
let c = 0;
let arr = [];
function solution(a,b){
  if (Array.isArray(a,b)){
        c = a + b;
        arr.push(c)
        console.log(arr)}

        i++;
        if (i < a.length || i < b.length) solution(a,b);
  }
solution([2, 4, 3], [5, 6, 4]); //[8, 0, 7]