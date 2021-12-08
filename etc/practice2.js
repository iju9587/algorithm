// https://programmers.co.kr/learn/courses/30/lessons/42888

// record = list
function solution(record) {
  const answer = [];

  // 유저의 고유 아이디에 따른 닉네임을 저장하기 위한 Dictionary
  const nicknameDict = {};
  const recordLength = record.length;
  const commentDict = {
    'Enter': '님이 들어왔습니다.',
    'Leave': '님이 나갔습니다.'
  };

  // 출입내역에서 각 아이디들의 마지막 출입닉네임을 저장하기 위해 한 번 순환
  for(let i=0, len=recordLength;i<len;i++){
    // 공백으로 각 값들이 구분되어 있으므로, 각 값들을 변수에 할당
    const [type, userId, userNickname] = record[i].split(' ');

    // 퇴장의 경우에는 닉네임이 존재하지 않음으로 업데이트하지 않음
    if(userNickname){
      nicknameDict[userId] = userNickname;
    }
  }

  // 위 과정에서 구한 아이디별 닉네임 Dictionary 이용해서 출입내역 결과 생성
  for(let i=0, len=recordLength;i<len;i++){
    const [type, userId, userNickname] = record[i].split(' ');

    // 닉네임 변경내역은 출입내역 결과에 반영되지 않음
    if(commentDict.hasOwnProperty(type)){
      answer.push(`${nicknameDict[userId]}${commentDict[type]}`);
    }
  }

  return answer;
}

// 최적의 코드
// 차이점은 닉네임 변경 내역을 제거한 상태로 2번째 loop를 도는 것의 차이
function solution2(record) {
  const userInfo = {};
  const action = [];
  const stateMapping = {
    'Enter': '님이 들어왔습니다.',
    'Leave': '님이 나갔습니다.'
  }

  record.forEach((v) => {
    const [state, id, nick] = v.split(' ');

    if(state !== "Change") {
      action.push([state, id]);
    }

    if(nick) {
      userInfo[id] = nick;
    }
  })

  return action.map(([state, uid]) => {
    return `${userInfo[uid]}${stateMapping[state]}`;
  })
}