
/** 기본적으로 처음 코드 for loop를 통한 조건 검사**/
function solution(info, query) {
  let result = [];

  // 주어진 쿼리 반복
  for(let i=0;i<query.length;i++){
    // 쿼리 조건 나누기
    const qryList = query[i].split('and');

    let qrySplitList = [];
    for(let m = 0; m < qryList.length; m++){
      if(m !== qryList.length - 1){
        qrySplitList.push(qryList[m].trim());
      }else{
        const lastQrySplit = qryList.pop().split(' ');
        qrySplitList.push(lastQrySplit[1], lastQrySplit[2]);
      }
    }

    // 조건  통과  개수
    let queryResult = 0;
    // 주어진 조건 반복
    for(let j=0; j< info.length; j++){
      const infoSplit = info[j].split(' ');
      const lastIndex = qrySplitList.length - 1

      // 점수부터 비교해서 점수가 해당되지 않으면 비교 스킵
      if(Number(infoSplit[lastIndex]) < Number(qrySplitList[lastIndex])){
        continue;
      }
      let isBreak = false;
      for(let m=0; m < lastIndex; m++){
        // 조건이 없는 경우에는 비교하지 않음
        if(qrySplitList[m] === '-') continue;
        if(infoSplit[m] !== qrySplitList[m]){
          isBreak = true;
          break;
        }
      }
      if(!isBreak)queryResult++;
    }
    result.push(queryResult);
  }

  return result;
}

/** 정규 표현식을 통한 계산 **/
// function solution(info, query) {
//   let result = [];
//
//   // 주어진 쿼리 반복
//   for(let i=0;i<query.length;i++){
//     // 쿼리 조건 나누기
//     const qryList = query[i].split('and');
//
//     let qrySplitList = [];
//     let reg = "";
//     let qryListLength = qryList.length;
//     for(let m = 0; m < qryListLength - 1; m++){
//       let trimString = qryList[m].trim();
//       if(trimString === '-'){
//         reg += '.*';
//       }else{
//         reg += trimString;
//       }
//       reg += '\\s';
//     }
//     let lastQuery = qryList[qryListLength - 1].split(' ');
//     reg += lastQuery[1] === '-' ? '.*' : lastQuery[1];
//     reg += '\\s.*';
//
//     let regString = new RegExp(reg);
//
//     let score = lastQuery[2];
//     let queryResult = 0;
//     for(let j=0; j< info.length; j++){
//       const infoSplit = info[j].split(' ');
//
//       // 점수부터 비교해서 점수가 해당되지 않으면 비교 스킵
//       if(Number(infoSplit[infoSplit.length - 1]) < Number(score)){
//         continue;
//       }
//       if(regString.test(info[j])){
//         queryResult++;
//       }
//     }
//     result.push(queryResult);
//   }
//
//   return result;
// }