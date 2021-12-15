// https://programmers.co.kr/learn/courses/30/lessons/81302

function solution(places) {
  const resultList = [];

  for(let room = 0; room < places.length ; room ++) {
    let result = 1;
    const pPosList = [];
    const place = places[room];

    // 응시자가 앉아있는 위치만 찾아내기
    for(let m=0; m < place.length; m++){
      for(let n=0; n < place[m].length; n++){
        if(place[m][n] === 'P') pPosList.push([m,n]);
      }
    }

    // 각각의 응시자들끼리의 거리를 비교 후, 거리두기 조건 체크
    // 기본적으로 거리두기 실패가 한번이라도 나오면, 이후 조건들은 검사하지 않음
    const pPosListLength = pPosList.length;
    for(let i=0; i < pPosListLength - 1; i++){
      for(let j=i + 1; j < pPosListLength; j++){
        // 응시자들끼리의 맨해튼 거리 구하기
        const manhattanDistance = getManhattanDistance(pPosList[i], pPosList[j]);

        // 맨해튼 거리가 1이라면, 무조건 거리두기 실패
        if( manhattanDistance === 1) {
          result = 0;
          break;

          // 맨해튼 거리가 2 초과라면, 거리두기 성공
        }else if( manhattanDistance > 2){
          continue;

          // 맨해튼 거리가 2인 경우, 파티션 조건을 검사
        }else {
          const [r1, c1] = pPosList[i];
          const [r2, c2] = pPosList[j];

          // 두 응시자의 열이 같은 경우, 사이에 파티션이 없다면 거리두기 실패
          if(r1 === r2){
            if(place[r1][(c1 + c2) / 2] !== 'X'){
              result = 0;
              break;
            }

            // 두 응시자의 행이 같은 경우, 사이에 파티션이 없다면 거리두기 실패
          }else if(c1 === c2){
            if(place[(r1 + r2) / 2][c1] !== 'X'){
              result = 0;
              break;
            }

            // 두 응시자가 대각선으로 앉은 경우, 파티션이 양쪽 사이에 하나라도 없으면 거리두기 실패
          }else{
            if(place[r1][c2] !== 'X' || place[r2][c1] !== 'X'){
              result = 0;
              break;
            }
          }
        }
      }
      if(result === 0) break;
    }
    resultList.push(result);
  }
  return resultList;
}


// 두 지점 사이의 맨헤튼 거리를 구하는 함수
function getManhattanDistance([r1, c1],[r2, c2]){
  return Math.abs(r1 - r2) + Math.abs(c1 - c2);
}