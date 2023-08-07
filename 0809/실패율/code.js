function solution(N, stages) {
  let answer = [];
  let rate = [];
  let suc=0
  let doing=0
  
  for(let j = 1; j<N+1; j++){
    for(let i = 0; i<stages.length; i++) {
      if(stages[i]>=j){
          suc++
        }
      if(stages[i]===j){
          doing++
        }
      }
      rate.push(doing/suc)
      answer.push(j-1)
      suc=0
      doing=0
  }


  answer.sort((a,b)=>rate[b]===rate[a]? a-b : rate[b]-rate[a]); 
  answer = answer.map(v=>v+1)

  return answer;

}