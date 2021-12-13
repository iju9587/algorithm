// https://programmers.co.kr/learn/courses/30/lessons/60058

function solution(p) {
  return changeRecuriveBracket(p);
}


function changeRecuriveBracket(str){
  // 빈 문자열인 경우, 문자열 그대로 리턴
  if(str === '') return str;

  // w를 두 "균형잡힌 괄호 문자열" u, v로 분리
  let [u, v] = seperateTwoString(str);

  // 문자열이 올바른 괄호 문자열인 지 확인
  let balance = checkBalanceString(u);

  // 올바른 괄호 문자열이라면,
  // 3. 방법에 의해서 재귀로 1부터 다시 수행
  if(balance){
    // 3-1
    return u + changeRecuriveBracket(v);

    // 올바른 괄호 문자열이 아니라면, 4. 방법 진행
  }else{
    // 4-1
    let emptyString = '(';

    // 4-2, 4-3
    emptyString += (changeRecuriveBracket(v) + ')');

    // 4-4
    let newU = u.slice(1, u.length -1);
    let reversNewU = '';
    for(let i=0;i<newU.length;i++){
      if(newU[i] === '('){
        emptyString += ')';
      }else{
        emptyString += '(';
      }
    }
    // 4-5
    return emptyString;
  }
}

// u, v로 분리하는 함수
// return [u, v]
function seperateTwoString(str){
  let leftStrCount = 0;
  let rightStrCount = 0;

  // 균형잡힌 괄호 문자열은 단순 (, ) 의 숫자가 같으면 됨으로, 두 괄호의 숫자가 같아지는 순간까지의 문자열(u)을 반환
  // v 는 u의 뒷부분 문자열
  for(let i=0;i<str.length;i++){
    if(str[i] === '('){
      leftStrCount++;
    }else{
      rightStrCount++;
    }
    if(leftStrCount === rightStrCount){
      return [str.slice(0, i+1), str.slice(i+1, str.length)];
    }
  }
  return [str, ""];
}

// 올바른 괄호 문자열인 지 확인하는 함수
function checkBalanceString(str){
  if(str === '') return false;
  let stack = [];

  // 스택을 활용해 매치되는 괄호가 있을 경우 스택에서 제외해주면서
  // 마지막에 스택이 남아있을 경우 올바르지 않은 괄호열로 판단
  for(let i=0; i<str.length; i++){
    if(stack.length === 0 ){
      stack.push(str[i]);
      continue;
    }

    if(stack[stack.length -1] === '(' && str[i] === ')'){
      stack.pop();
    }else{
      stack.push(str[i]);
    }
  }
  return stack.length === 0 ;
}