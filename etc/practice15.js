function solution(maps) {
  let w = maps.length;
  let h = maps[0].length;

  let count = 1;
  let checkedMap = maps;
  let arrList = [[0,0]];
  checkedMap[0][0] = 0;

  while(arrList.length > 0){
    const arrCount = arrList.length;
    const tempList = [];

    for(let i=0; i< arrCount; i++){
      const [x,y] = arrList[i];

      if((x === w -1) && (y === h -1)) return count;

      if(x > 0 && checkedMap[x - 1][y]){
        checkedMap[x - 1][y] = 0;
        tempList.push([x - 1, y]);
      }
      if( x < w - 1  && checkedMap[x + 1][y]){
        checkedMap[x + 1][y] = 0;
        tempList.push([x + 1, y]);
      }
      if( y > 0 && checkedMap[x][y - 1]){
        checkedMap[x][y - 1] = 0;
        tempList.push([x, y - 1]);
      }
      if( y < h - 1 && checkedMap[x][y + 1]){
        checkedMap[x][y + 1] = 0;
        tempList.push([x, y + 1]);
      }
    }
    arrList = tempList;
    count++;
  }

  return -1;
}