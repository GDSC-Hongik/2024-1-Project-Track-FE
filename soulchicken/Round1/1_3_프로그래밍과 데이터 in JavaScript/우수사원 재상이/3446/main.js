let today = new Date(2112, 7, 24);
let jaeSangStart = new Date(2109, 6, 1);

function workDayCalc(startDate) {
  const count = (Number(today) - Number(startDate))/1000/60/60/24+1;
  console.log(`오늘은 입사한 지 ${count}일째 되는 날 입니다.`);
}

workDayCalc(jaeSangStart);