#실패율

## 문제 설명
![image](https://github.com/sohyeonBak/TG_Algorithm/assets/76677897/1686cf90-1ae2-44e8-b02b-23501da49e7c)

## 문제 풀이
* JavaScript
* 풀이시간: 20분

stages와 전체 스테이지 개수를 돌면서 성공한 개수(suc)와 현재 스테이지(doing)를 구하고 실패율을 계산한 값을 rate 배열에 넣고, 인덱스 값을 answer 배열에 차례로 넣었다.
<br/>
answer 배열을 정렬하면서 실패율을 계산한 값이 같을때 인덱스를 비교하고 그렇지 않을때는 실패율을 비교해 정렬해 리턴한다.

## 문제
```javascript
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
```