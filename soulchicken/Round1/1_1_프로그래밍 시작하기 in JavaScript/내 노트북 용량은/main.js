// 여기에 코드를 작성하세요
function teraToGiga(tb) {
  console.log(tb + 'TB는')
  console.log(tb * 1024 + 'GB 입니다.');
}

function teraToMega(tb) {
  console.log(tb + 'TB는')
  console.log(tb * 1024 * 1024 + 'MB 입니다.');
}

// TB -> GB 테스트
teraToGiga(2);
// TB -> MB 테스트
teraToMega(2);