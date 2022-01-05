function solution(expression) {
  // 나올 수 있는 연산자 우선순위 목록
  const opList = [['-','+','*'], ['-','*','+'], ['+','-','*'], ['+','*','-'], ['*','+','-'], ['*','-','+']];
  // 연산자에 따른 계산 함수
  const opFunction = {
    '+': function(a, b){return a + b},
    '-': function(a, b){return a - b},
    '*': function(a, b){return a * b},
  };
  let result = 0;

  // 나올 수 있는 연산자 목록만큼 반복
  for(let i = 0 ; i < opList.length; i++){
    let thisOp = opList[i];
    let expressionStack = [];

    // 식을 list에 값, 연산자로 분리해서 추가
    let startIdx = 0;
    for(let m=0; m < expression.length; m++){
      if(thisOp.includes(expression[m])){
        expressionStack.push(Number(expression.slice(startIdx, m)), expression[m]);
        startIdx = m + 1;
      }
      if(m === expression.length - 1){
        expressionStack.push(Number(expression.slice(startIdx, expression.length)))
      }
    }

    // 우선순위에 따라 계산
    for(let m=0; m < thisOp.length ; m++) {
      let expressionStackLen = expressionStack.length;
      // 스택 반복
      for(let n = 0; n < expressionStackLen; n++){
        // 우선순위 연산자를 찾을 경우, 계산한 후에 스택에 추가
        if(thisOp[m] === expressionStack[n]){
          expressionStack[n-1] = opFunction[thisOp[m]](expressionStack[n-1], expressionStack[n+1]);
          expressionStack = [...expressionStack.slice(0, n), ...expressionStack.slice(n + 2)];
          // 스택에 추가한 후, 다음 연산자를 확인하기 위해 -1
          n -= 1;
        }
      }
    }
    let tempResult = expressionStack[0];
    if (tempResult < 0) tempResult *= -1;
    if (result < tempResult) result = tempResult
  }
  return result;
}