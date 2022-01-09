//https://programmers.co.kr/learn/courses/30/lessons/64065

function solution(s) {
  // 맨처음과 마지막은 정규식을 위해서 제거
  const contentString = s.slice(1, s.length - 1);

  // 괄호에 감싸진 값들을 가져오는 정규식
  const reg = /\{(.*?)\}/g;
  const splitStringList = contentString.match(reg);

  // 정규식을 통해 얻은 괄호의 값들을 리스트로 변환
  const stringDict = {};
  for(let i=0; i< splitStringList.length;i++){
    let list = splitStringList[i].slice(1, splitStringList[i].length - 1).split(',');

    // 괄호안의 숫자 개수를 오브젝트에 저장. (가장 많이 나온 숫자가 튜플의 가장 첫 번째 순서임을 구하기 위해서)
    for(let j=0; j< list.length;j++){
      if(!stringDict.hasOwnProperty(list[j])){
        stringDict[list[j]] = 0;
      }
      stringDict[list[j]]++;
    }
  }

  // 가장 많이 나온 원소에 따라 정렬
  const items = Object.keys(stringDict).sort().map(function(key){
    return [key, stringDict[key]];
  });

  // 키 값만 추출 ( String -> Number 변환)
  return items.sort((a,b) => b[1] - a[1]).map(val => Number(val[0]));
}
