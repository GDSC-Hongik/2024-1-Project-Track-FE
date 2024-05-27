const N = 180;
let count = 0;
i = 1;
while (i <= N) {
  if (N % i === 0) {
    console.log(i);
    count += 1;
  }
  i++;
}
console.log(`180의 약수는 총 ${count}개입니다.`);