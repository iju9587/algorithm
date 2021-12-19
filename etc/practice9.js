function solution(str1, str2) {
  // 문자열을 소문자로 변환
  const lowStr1 = str1.toLowerCase();
  const lowStr2 = str2.toLowerCase();


  // 문자열을 돌면서, 2글자 알파벳만 추려내기
  const lowStr1Dict = getTwoEngDict(lowStr1);
  const lowStr2Dict = getTwoEngDict(lowStr2);

  // 둘다 2글자를 가지지 않은 경우, 공집합은 1
  if(Object.keys(lowStr1Dict).length === 0 && Object.keys(lowStr2Dict).length === 0 ){
    return 65536;
  }

  // 교집합, 합집합 개수 초기화
  let onionCount = 0;
  let intersectionCount = 0;

  // 1. 양쪽의 문자열 개수를 비교
  for( const [ str, cnt] of Object.entries(lowStr1Dict)){
    if(!lowStr2Dict.hasOwnProperty(str)){
      onionCount += cnt;
    }else{
      if(lowStr2Dict[str] === cnt){
        onionCount += cnt;
        intersectionCount += cnt;
      }else{
        onionCount += lowStr2Dict[str] > cnt ? lowStr2Dict[str] : cnt;
        intersectionCount += lowStr2Dict[str] > cnt ? cnt : lowStr2Dict[str];
      }
      // 비교가 끝난 문자열은 for loop를 돌고 있지 않은 Dict에서 해당 문자열을 제외해주는다.
      delete lowStr2Dict[str];
    }
  }

  // 제외되지 않은 문자열은 합집합 개수에 추가되야 함
  Object.values(lowStr2Dict).map(v => onionCount += v);

  // 조건에 따른 곱셈
  return parseInt(intersectionCount / onionCount * 65536);
}


// 문자열을 돌면서, 2글자 알파벳만 추려내기
function getTwoEngDict(string){
  // 알파벳2개 정규표현식
  const twoEngReg = /^[a-z]{2}$/;
  const twoEngDict = {}

  for(let i=0; i< string.length; i++ ){
    const sliceStr = string[i] + string[i+1];
    // 정규표현식에 해당하면, 분리된 문자열의 개수를 저장
    if(twoEngReg.test(sliceStr)){
      if(!twoEngDict.hasOwnProperty(sliceStr)){
        twoEngDict[sliceStr] = 0;
      }
      twoEngDict[sliceStr]++;
    }function solution(str1, str2) {
      // 문자열을 소문자로 변환
      const lowStr1 = str1.toLowerCase();
      const lowStr2 = str2.toLowerCase();


      // 문자열을 돌면서, 2글자 알파벳만 추려내기
      const lowStr1Dict = getTwoEngDict(lowStr1);
      const lowStr2Dict = getTwoEngDict(lowStr2);

      // 둘다 2글자를 가지지 않은 경우, 공집합은 1
      if(Object.keys(lowStr1Dict).length === 0 && Object.keys(lowStr2Dict).length === 0 ){
        return 65536;
      }

      // 교집합, 합집합 개수 초기화
      let onionCount = 0;
      let intersectionCount = 0;

      // 1. 양쪽의 문자열 개수를 비교
      for( const [ str, cnt] of Object.entries(lowStr1Dict)){
        if(!lowStr2Dict.hasOwnProperty(str)){
          onionCount += cnt;
        }else{
          if(lowStr2Dict[str] === cnt){
            onionCount += cnt;
            intersectionCount += cnt;
          }else{
            onionCount += lowStr2Dict[str] > cnt ? lowStr2Dict[str] : cnt;
            intersectionCount += lowStr2Dict[str] > cnt ? cnt : lowStr2Dict[str];
          }
          // 비교가 끝난 문자열은 for loop를 돌고 있지 않은 Dict에서 해당 문자열을 제외해주는다.
          delete lowStr2Dict[str];
        }
      }

      // 제외되지 않은 문자열은 합집합 개수에 추가되야 함
      Object.values(lowStr2Dict).map(v => onionCount += v);

      // 조건에 따른 곱셈
      return parseInt(intersectionCount / onionCount * 65536);
    }


// 문자열을 돌면서, 2글자 알파벳만 추려내기
    function getTwoEngDict(string){
      // 알파벳2개 정규표현식
      const twoEngReg = /^[a-z]{2}$/;
      const twoEngDict = {}

      for(let i=0; i< string.length; i++ ){
        const sliceStr = string[i] + string[i+1];
        // 정규표현식에 해당하면, 분리된 문자열의 개수를 저장
        if(twoEngReg.test(sliceStr)){
          if(!twoEngDict.hasOwnProperty(sliceStr)){
            twoEngDict[sliceStr] = 0;
          }
          twoEngDict[sliceStr]++;
        }
      }
      return twoEngDict;
    }
  }
  return twoEngDict;
}