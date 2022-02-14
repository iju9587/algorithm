// https://programmers.co.kr/learn/courses/30/lessons/12985

function solution(n,a,b)
{
  let result = 1;

  // 결승전까지 진행
  while(n / 2 !== 1){
    // 시드의 매치를 구함.
    let aMatch = Math.round(a / 2);
    let bMatch = Math.round(b / 2);

    // 같은 매치일 경우, 서로 만난 경우이기 때문에 break
    if(aMatch === bMatch) break;

    // 다른 매치일 경우, 다음 라운드로 진출하고 매치가 다음 라운드 시드로 변경됨
    a = aMatch;
    b = bMatch;

    // 라운드 변경으로 인한 결과 및 라운드 수정
    result++;
    n /= 2;
  }
  return result;
}