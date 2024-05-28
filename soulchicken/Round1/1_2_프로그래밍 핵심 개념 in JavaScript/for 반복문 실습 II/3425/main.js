function printTriangle(height) {
	for (let i = 1; i <= height; i++) {
	  let star = '';
	  for (let j = 0; j < i; j++){
	    star += '*';
	  }
	  console.log(star);
	}
}

// 테스트 코드
console.log('높이: 1');
printTriangle(1);

console.log('높이: 3');
printTriangle(3);

console.log('높이: 5');
printTriangle(5);