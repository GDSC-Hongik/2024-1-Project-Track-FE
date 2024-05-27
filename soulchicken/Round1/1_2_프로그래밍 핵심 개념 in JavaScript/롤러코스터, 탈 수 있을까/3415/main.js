// 파라미터 height을 활용하는 checkHeight 함수를 완성하세요
function checkHeight(height) {
	if (height >= 140) {
	  return console.log('탑승이 가능합니다.');
	}
	console.log('탑승이 불가능합니다.');
}

// 테스트 코드
checkHeight(140);
checkHeight(135);
checkHeight(170);