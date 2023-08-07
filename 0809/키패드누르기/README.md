# 키패드누르기

## 문제 설명
![image](https://github.com/sohyeonBak/TG_Algorithm/assets/76677897/59944376-5be7-4b54-9cb0-84f66d64b0da)

## 문제 풀이
* JavaScript
* 풀이 시간: 40분

키패드를 좌표 배열을 가진 객체로 만들고(keypad), 숫자를 돌면서 3으로 나눴을 경우 1로 떨어지는 수는 "L"을 기록하고, 0으로 떨어지고 0값이 아닌 수는 "R"로 기록한다.
그리고 현재 left hand와 right hand가 어떤 수에 위치하는지 각각 저장한다.
<br/>
중간에 위치한 수일 경우 함수를 만들어(distance) 현재 left hand 수의 좌표와 현재 수의 좌표를 x, y로 각각 비교해 합한 값과 right hand 수의 좌표와 현재 수의 좌표를 x, y로 각각 비교해 합한 값을 비교해 더 작은 값을 가진 수로 기록한다.
값이 같은 경우 hand로 들어오는 "left", "right"를 가지고 "left"인 경우 "L"로 저장, "right"인 경우는 "R"로 저장한다.

## 문제
```javascript
function solution(numbers, hand) {
  let keypad = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        "*": [3, 0], 0: [3, 1], "#": [3, 2]
    };
    let lh = "*";
    let rh = "#";
    let answer = '';
    
    const distance = (num, lh, rh, keypad, hand) => {
        let distL = Math.abs(keypad[lh][0] - keypad[num][0]) + Math.abs(keypad[lh][1] - keypad[num][1]);
        let distR = Math.abs(keypad[rh][0] - keypad[num][0]) + Math.abs(keypad[rh][1] - keypad[num][1]);
        if(distL === distR) {
            return hand === "left" ? answer += "L" : answer += "R";
        }
        return distL < distR ? answer += "L" : answer += "R";
    }
    
    for (const num of numbers) {
        if(num % 3 === 1) {
            answer += "L";
            lh = num;
        } else if(num % 3 === 0 && num !== 0) {
            answer += "R";
            rh = num;
        } else {
            distance(num, lh, rh, keypad, hand);
            answer[answer.length - 1] === "L" ? lh = num : rh = num
        }
    }
    
    
    return answer;
  }
```
