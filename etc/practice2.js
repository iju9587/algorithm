// https://programmers.co.kr/learn/courses/30/lessons/42888

// record = list
function solution(record) {
  const answer = [];

  const nicknameDict = {};
  const recordLength = record.length;
  for(let i=0, len=recordLength;i<len;i++){
    const [type, userId, userNickname] = record[i].split(' ');
    if(userNickname){
      nicknameDict[userId] = userNickname;
    }
  }

  for(let i=0, len=recordLength;i<len;i++){
    const [type, userId, userNickname] = record[i].split(' ');

    if(type === 'Enter'){
      answer.push(`${nicknameDict[userId]}님이 들어왔습니다.`);
    }else if(type === 'Leave'){
      answer.push(`${nicknameDict[userId]}님이 나갔습니다.`);
    }
  }

  return answer;
}