// https://programmers.co.kr/learn/courses/30/lessons/42890
function solution(relation) {
  const list = [];
  const res = [];
  const rowCount = relation.length;
  const columnCount = relation[0].length;

  for(let i=0;i < columnCount;i++){
    list.push(i);
  }
  // 조합별로 시도
  for(let i=1; i<=columnCount;i++){
    let relationCase = getCase(list, i);
    let set = new Set();

    // 조합 케이스별로 시도
    for(let j=0; j < relationCase.length; j++){
      let set = new Set();
      for(let m=0; m < rowCount;m++){
        let appendStr = '';
        for(let n=0; n < relationCase[j].length; n++){
          appendStr += relation[m][relationCase[j][n]];
        }
        set.add(appendStr);
      }
      if(set.size === rowCount){
        let duplicated = false;
        for(let m=0; m < res.length; m++){
          let allFounded = res[m].every( ai => relationCase[j].includes(ai) );
          if(allFounded){
            duplicated = true;
          }
        }
        if(!duplicated){
          res.push(relationCase[j]);
        }

      }
    }
  }

  return res.length;
}

function getCase(arr, count){
  if(count === 1) return arr.map(r => [r]);
  let res = [];
  for(let i=0;i<arr.length - 1;i++){
    res.push(...getCase(arr.slice(i + 1, arr.length), count - 1).map(r => [arr[i], ...r]))
  }
  return res;
}