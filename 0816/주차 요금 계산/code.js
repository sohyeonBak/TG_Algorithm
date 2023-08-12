function solution(fees, records) {
  let answer = [];
  let carFeeCnt = {};
  let allFeeObj = {};
  
  records.forEach((record) => {
      const [time, carNum, type] = record.split(" ");
      
      let calTime = time.split(":").map((t) => parseInt(t));
      let t = (calTime[0] * 60) + calTime[1];
      
      if(carFeeCnt[carNum]) {
          if(type === "IN") {
              carFeeCnt[carNum] = { time : t, type };
          } else {
              let calFee = t - carFeeCnt[carNum].time;
              carFeeCnt[carNum] = { time: calFee, type };
              if(allFeeObj[carNum]) {
                  allFeeObj[carNum].push(calFee)
              }else{
                  allFeeObj[carNum] = [calFee]
              }
          }
      } else {
          carFeeCnt[carNum] = { time: t, type }
      }
  })
  
  
  for(const [key, value] of Object.entries(carFeeCnt)) {
      if(value.type === "IN") {
          let t = 1439 - value.time
          if(allFeeObj[String(key)]) {
              allFeeObj[String(key)].push(t);
          } else {
              allFeeObj[String(key)] = [t];
          }
      }
  }
  
  for(const [key, value] of Object.entries(allFeeObj)) {
      let sum = value.reduce((a, b) => a + b);
      answer.push([key, calculatorFees(fees, sum)])
  }
  
  return answer.sort((a, b) => a[0] - b[0]).map((item) => item[1])
}

const calculatorFees = (fees, sumFee) => {
  let totalFee = fees[1];
  
  if(fees[0] <= sumFee) {
      totalFee += (Math.ceil((sumFee - fees[0]) / fees[2]) * fees[3])  
  } 
  return totalFee
}