function isPalindrome(word) {
  // 여기에 코드를 작성하세요
  const len = word.length;
  for (let i = 0; i < len / 2; i++) {
    if (word[i] !== word[len - i - 1]){
      return false;
    }
  }
  return true;
}

// 테스트 코드
console.log(isPalindrome("racecar"));
console.log(isPalindrome("stars"));
console.log(isPalindrome("기러기"));
console.log(isPalindrome("123321"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("kayak"));