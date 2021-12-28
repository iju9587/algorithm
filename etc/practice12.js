function solution(n, times) {
  let maxTime = Math.max(...times);
  let startMin = 1;
  let endMin = maxTime * n;
  let result = maxTime * n;

  while(startMin <= endMin){
    let mid = parseInt( ( startMin + endMin ) / 2);
    let execTimes = times.map(val => parseInt(mid / val));

    let count = 0;
    for(let i=0; i< execTimes.length; i++){
      count += execTimes[i];
      if(count >= n){
        result = Math.min(mid, result);
        break;
      }
    }

    if (count >= n) {
      endMin = mid - 1;
    }else {
      startMin = mid + 1;
    }

  }
  return result;
}