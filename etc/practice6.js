// https://programmers.co.kr/learn/courses/30/lessons/72411

function solution(orders, course) {
  // 주문된 메뉴에 따른 메뉴 글자수와 주문 수를 저장할 변수
  let orderDict = {};


  for(let i=0, len=orders.length; i< len; i++){
    for(let j=0, jlen=course.length;j<=jlen;j++){
      // 사람이 주문한 메뉴에서 나올 수 있는 메뉴 찾기 (조합이용)
      let combinations = getCombination(orders[i], course[j]);

      // 조합별로 주문된 개수 카운트 증가
      combinations.map(combination => {
        // 조합을 구한 것이기 때문에, 순서를 정렬해준다.
        combination = combination.split("").sort().join("");
        if(!orderDict.hasOwnProperty(combination)){
          orderDict[combination] = {
            CombinationLength: combination.length,
            CombinationOrderCount: 0
          };
        }
        orderDict[combination]['CombinationOrderCount']++;
      });
    }
  }

  const resList = [];
  for(let i=0; i < course.length; i++){
    // 가장 많이 주문된 조합을 담을 변수
    let maxCombinationList = [];
    // 최소 2개이상 주문된 조합만 가능함
    let orderMaxCount = 2;

    for( const [menu, order] of Object.entries(orderDict)){
      if(order.CombinationLength === course[i]){
        // 주문 개수가 제일 많은 조합을 찾는다면, 가장 많이 주문된 조합을 가지고 있는 변수와 최대 주문개수 초기화
        if(order.CombinationOrderCount > orderMaxCount){
          orderMaxCount = order.CombinationOrderCount;
          maxCombinationList = [menu];
        // 최대 주문개수와 동일할 경우, 많이 주문된 조합 변수에 추가
        }else if(order.CombinationOrderCount === orderMaxCount){
          maxCombinationList.push(menu);
        }
      }
    }
    resList.push(...maxCombinationList)
  }
  return resList.sort();
}

function getCombination(str, n){
  let res = [];
  if(n === 1) return str.split('');
  for(let i=0; i<str.length;i++){
    let startStr = str[i];
    let sliceStr = str.slice(i+1);
    let combList = getCombination(sliceStr, n -1);

    let newList = combList.map(r => startStr + r);
    res.push(...newList);
  }
  return res;
}