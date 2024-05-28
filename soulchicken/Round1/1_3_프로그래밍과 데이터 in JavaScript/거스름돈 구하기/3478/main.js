function calculateChange(payment, cost) {
  // 여기에 코드를 작성하세요
  let bill = payment - cost;
  const moneys = [50000, 10000, 5000, 1000];
  
  for (money of moneys) {
    console.log(`${money}원 지폐: ${Math.floor(bill / money)}장`);
    bill %= money;
  }

}

// 테스트 코드
calculateChange(100000, 33000);
console.log('');
calculateChange(500000, 378000);