function solution(N, M) {
  if(N === 1) return 1;

  let result = getUcl(N, M);
  return parseInt(N / result)

}

function getUcl(X, Y) {
  if(Y === 0) return X
  
  return getUcl(Y, X % Y)
}