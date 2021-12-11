// https://programmers.co.kr/learn/courses/30/lessons/43165

function solution(numbers, target) {
  var answer = 0;

  let resList = [numbers[0], -numbers[0]];
  for(let i=1;i<numbers.length;i++){
    let tempList = [];

    for(let j=0;j<resList.length;j++){
      tempList.push(resList[j] + numbers[i], resList[j] - numbers[i]);
    }
    resList = tempList;
  }

  return resList.filter(value => target === value).length;
}