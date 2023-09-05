function solution(triangle) {
  let answer = 0;
  let tmp = triangle.reverse();
  let lastLeng = triangle.length;
  
  for(let i = 0; i < lastLeng; i++) {
      let lt = 0;
      let curLeng = triangle[i].length;
      for(let rt = 1; rt < curLeng; rt++) {
          if(triangle[i][lt] < triangle[i][rt]) {
              triangle[i+1][lt] = triangle[i+1][lt] + triangle[i][rt]
          }
          if(triangle[i][lt] > triangle[i][rt]) {
              triangle[i+1][lt] = triangle[i+1][lt] + triangle[i][lt]
          }
          lt++
      }
      answer = triangle[i]
  }
  
  return answer[0];
}