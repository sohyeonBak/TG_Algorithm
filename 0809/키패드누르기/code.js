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