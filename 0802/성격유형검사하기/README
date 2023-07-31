# 성격 유형 검사하기

## 문제 설명
![Untitled](https://github.com/sohyeonBak/wanted-pre-onboarding-project-01/assets/76677897/c426f4bd-334b-4e13-a3ba-51b611855f62)

## 문제 풀이
* JavaScript

먼저 두개의 유형과 0 값을 가지는 객체를 가진 배열을 작성하고(totla), survey에 들어오는 두개의 성격유형을 가지고 점수를 매길 수 있는 성격유형점수 배열을 만든다.(serveyMap)
<br/>
choices에 성격유형에 해당하는 점수를 성격유형점수 배열을 순회하여 total에 해당하는 값에 해당 점수를 더해준다.
<br/>
total 배열에는 총합이 들어있으며 같은 값을 가질때 사전순으로 빠른 유형으로 값을 지정해 리턴한다.

## 문제

```javascript
function solution(survey, choices) {

  let total = [
      {R: 0, T: 0},
      {C: 0, F: 0},
      {J: 0, M: 0},
      {A: 0, N: 0},
  ];

  let serveysMap = survey.map((item) => {
      let arr = [];
      for(let i = 0; i<7; i++) {
          let obj = {}
          let addCnt = 0;
          let reCnt = 3;
          if(i < 3) {
              obj[item[0]] = reCnt - i;
              arr.push(obj)
          }
          if(i === 3) {
              arr.push({ Z : 0 });
          }
          if (i > 3) {
              obj[item[1]] = addCnt + i - 3;
              arr.push(obj)
          }
      }
      return arr
  })
  
  choices.map((item, idx) => {
      for(const [key, value] of Object.entries(serveysMap[idx][Number(item)-1])) {
          if(key == "R" || key == "T") total[0][key] = (total[0][key] || 0) + value;
          if(key == "C" || key == "F") total[1][key] = (total[1][key] || 0) + value;
          if(key == "J" || key == "M") total[2][key] = (total[2][key] || 0) + value;
          if(key == "A" || key == "N") total[3][key] = (total[3][key] || 0) + value;
      }
      
  })
  
  return total.map((item) => {
      let str = '';
      const [item1, item2] = Object.entries(item);
      
      if(item1[1] >= item2[1]) str += item1[0];
      else str += item2[0];
      return str
      
  }).join("");
}
```

## 출처
카카오 프로그래머스