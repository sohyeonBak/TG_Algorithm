function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let after_Bridge = truck_weights.length;
  let before_Bridge = 0;
  let seconds = 1;
  let on_Bridge = [{truck : truck_weights.shift(), time: bridge_length-1}];
  
  
  while(before_Bridge!==after_Bridge){
      
      if(on_Bridge[0].time===0){
          before_Bridge += 1;
          on_Bridge.shift();
      }
   
      seconds += 1
      let currentWeight = 0;
      on_Bridge = on_Bridge.map((currenttruck)=>{
          const {truck, time} = currenttruck;
          currentWeight = currentWeight + truck;
          return {...currenttruck, time: time-1}
      })
      
      if(currentWeight + truck_weights[0] <= weight){
          const truck = {truck: truck_weights.shift(), time: bridge_length-1}
          on_Bridge.push(truck)
      }
  }
  
  answer = seconds
  return answer; 
}