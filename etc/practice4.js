
function solution(w, h) {
  let gcd = getGCD(w, h);
  return w*h - ((w/gcd) + (h/gcd) - 1) * gcd;
}

function getGCD(n, m){
  return (n % m) === 0 ? m : getGCD(m, n % m);
}




// function solution(w, h) {
//   const gcd = getGCD(w, h);
//   const lean = w / h;
//   const hPoint = h / gcd;
//   const wPoint = w / gcd;
//
//   let edgeCount = 0;
//   for(let i=0;i<hPoint;i++){
//     edgeCount += parseInt(i * lean);
//   }
//
//   const sum = (gcd-1) * (gcd / 2);
//   const answer = edgeCount * gcd + (wPoint * hPoint * sum);
//
//   return answer * 2;
// }



