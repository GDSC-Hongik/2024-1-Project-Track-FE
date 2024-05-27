let a = 0;
let b = 1;
for (let i = 0; i < 50; i++) {
  console.log(b);
  [a, b] = [b, a+b];
}