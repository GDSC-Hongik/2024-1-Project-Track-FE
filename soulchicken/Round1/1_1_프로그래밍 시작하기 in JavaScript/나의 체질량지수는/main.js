// 여기에 코드를 작성하세요
function bmiCalculator(name, weight, height) {
  console.log(`${name}님의 체질량지수는 ${weight / (height*height / 10000)}입니다.`);
}

// 테스트 코드
bmiCalculator('홀쭉이', 43.52, 160);
bmiCalculator('코린이', 61.25, 175);
bmiCalculator('통통이', 77.76, 180);