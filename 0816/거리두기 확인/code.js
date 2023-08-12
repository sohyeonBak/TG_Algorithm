function solution(places) {
  let answer = Array.from({length:places.length}, ()=>0);
  
  places.forEach((place, idx)=>{
      let dx = [-1, 0, 1, 0];
      let dy = [0, 1, 0, -1];
      
      for(let i = 0; i<place.length; i++){
          for(let j = 0; j<place.length; j++){
              if(place[i][j]==="P"){
                  for(let k = 0; k<4; k++){
                      let nx = i + dx[k];
                      let ny = j + dy[k];
                      if(nx>=0 && nx<place.length && ny>=0 && ny<place.length && place[nx][ny]==="P"){
                          answer[idx]++
                      }
                  }
              }
              
              if(place[i][j]==="O"){
                  let cnt = 0
                  for(let k = 0; k<4; k++){
                      let nx = i + dx[k];
                      let ny = j + dy[k];
                      if(nx>=0 && nx<place.length && ny>=0 && ny<place.length && place[nx][ny]==="P"){
                          cnt++
                      }
                  }
                  
                  if(cnt > 1){
                      answer[idx]++
                  }
              }
          }
      }
  })
  answer = answer.map(v=>v>0?0:1)

  return answer;
}