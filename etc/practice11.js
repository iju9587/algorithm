function solution(lines) {
  const excuteList = [];
  let max = 0;
  for(let i=0; i< lines.length; i++){
    const lineSplit = lines[i].split(' ');
    const endAt = `${lineSplit[0]} ${lineSplit[1]}`;
    const endDate = new Date(endAt).getTime();
    const duration = Number(lineSplit[2].slice(0, -1) * 1000);
    const startDate = new Date(endDate - duration + 1).getTime();
    excuteList.push([startDate, endDate]);
  }
  for( let i=0; i < excuteList.length; i++){
    const start = excuteList[i][0];
    const startAfterSection = [start, start + 1000];
    const startBeforeSection = [start - 1000, start];
    const end = excuteList[i][1];
    const endAfterSection = [end, end + 1000];
    const endBeforeSection = [end - 1000, end];

    max = getSectionMaxExec(excuteList, startAfterSection, max);
    max = getSectionMaxExec(excuteList, startBeforeSection, max);
    max = getSectionMaxExec(excuteList, endAfterSection, max);
    max = getSectionMaxExec(excuteList, endBeforeSection, max);
  }

  return max;
}

function getSectionMaxExec(excuteList, currentSection, max){
  let currentMax = 0;
  for(let j=0; j < excuteList.length; j++){
    const anotherSection = excuteList[j];
    if(!(anotherSection[1] <= currentSection[0] || anotherSection[0] > currentSection[1])){
      currentMax++;
    }
  }
  return currentMax > max ? currentMax : max;
}