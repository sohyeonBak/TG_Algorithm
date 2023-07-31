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