# 자바에 대하여
## 자바 강의 1주차-1
- console.log(숫자)를 적으면 그 숫자가 출력됐다.    
- 문장를 구분 세미콜론을 사용👩🏻‍💻
  
- 주석을 적는 법
  - //를 적으면 주석 처리 영어로는 comment
  - /**/ 하면 코멘트 처리
    - ```
      //comment 는 한 줄만 주석 처리
      /*comment는 닫힐 때까지  주석 처리*/
      ```
- 자바 스크립트에도 기본적인 자료형을 사용

_"이건 다 알 것 같아"_

~~모르는 데 아는 척 해봄~~
- 추상화
  - 변수 사용 let으로 선언
  - _ex)_ `let espresso` 처럼
- 함수
  - function 함수이름(){ 안에 내용을 씀}->함수 생성
  - 함수이름()->함수 호출
  - **함수 안에 매개변수 사용하기**
    - ```
      function name(num1,num2)//이런 식으로 매개변수를 여러개 사용가능함
      {
        consloe.log(num1+num1)
      }
      ```
  - return값 활용하기
  
  _ㅋㅋㅋㅋㅋ뭐지 한시간 동안 들은게 필수 강의가 아니였잖아!!_


## 자바 강의 1주차-2.1(추상화)
- 사칙 연산 가능( 수학 법칙을 따름 _괄호나 곱셈 먼저 계산하는거나..._)
  - **하면 거듭제곱이 됨
- 문자열
  - '음' 나 "음"은 똑같은 기능 console로 출력 할 때는 문자열만 출력
  - 문자열 안에 따옴표 쓸 때는 ``(백틱)안에 넣어주면 됨
- 부울 대수(True와 False만 있음)
  - 연산이 and or not 밖에 없음
  - console.log()안에 다양한 명제를 넣으면 부울 대수가 나옴
    - ```
      console.log(3===3); //3과 3은 같다. true
      console.log(3!==4); //3과 4는 같지 않다 true
      console.log(!!true); //반대의 반대기 때문에 true
      
      ```
  - typeof 연산자
    - 자료형 타입을 출력함 -> string number NaN(Not a Number)
    - 문자열인지 험수 인지도 나옴
    - 반환 타입은 문자열임
  - 형 변환
    - '10'을 Number('10')이라고 적으면 문자열 10이됨 String(10)도 마찬가지로 문자열이 됨
    - 숫자형 변환 부울->숫자는 0과1로 변환
    - 부울형 변환 빈 느낌(NULL, NaN)->0 다른 평범한 값들은 1로 나옴
      - 0은 부울 false지만 '0'은 true 평범한 문자열이기 때문
  - 형 변환 -2
    - 관계 연산자는 부울대수 반환
    - ==는 형변환이 될 수도 있기 때문에 ===를 씀
      - ```
        console.log(1=='1') //true를 반환함
        console.log(1==='1')//false를 반환함
        ```
- 템플릿 문자열
  - ``안에서 ${}을 쓰면 됨
  - ```
    let talk='어쩌구'
    console.log(`${talk} 저쩌구`);//어쩌구저쩌구 가 출력 스위프트의\()와 백틱 안에서 같은 기능
    ```
- null과 undefined
  - null은 의도적 값이 없음
  - undefinded는 걍 값을 초기화 안해줌
  - ```
    console.log(null==undefined)// true
    console.log(null===undefinded)//false
    ```
- 할당 연산자(=) 오른쪽의 값을 왼쪽에 할당함> 등호를 보면 같다 보다 할당한다를 기억할 것
- optional parameter
  - 매개변수 있는 함수 호출시 매개 변수가 없다면 undefined 함수로 호출
  - default parameter을 사용하여 해결 가능
    - 대신 default 사용 할 때는 뒤에 몰아서 써야함
- 지역 변수랑 글로벌 변수 기억할 것(scope 주의)
- 상수
  - 선언시 const를 사용
  - 보통 이름을 대문자로 표현
  - `const PI=3.14; // 값을 할당해주지 않으면 오류, 변하지 않음`
## 자바 강의 1주차-2.2(제어문)
- if문
  - 다른 언어에서의 if 문과 비슷
- switch 문
  - ```
    switch(매개변수){
      case (조건 값1)://if 매개변수==조건값1
        내용
      case (조건 값2)://if 매개변수==조건값2
        내용
      default:
        조건값이 모두 해당되지 않을 때 여기로 들어감
    }// 케이스에 들어간다고 switch가 끝나는 것이 아니기 때문에 break를 적절히 사용
    ```
- 반복문
  - c++에서의 for문과 비슷 for 문 조건문의 조건을 모두 안 채우고 빈곳으로 냅둬두 됨
## 자바 강의 1주차-3.1(객체)
- 객체
  - {}안에 문자열이나 숫자 부울 대수를 넣어줌->앞에 이름을 정해줘야함
  - `let name = {brand:'코드잇', 'brand-code':123} //호출은 name.brand로 호출 가능`
  - 이름을 정해줄 때 문자열을 따옴표로 감싸주면 제한이 좀 풀림
  - 객체 자체를 출력하는 경우 {내용}이 그대로 출력됨
  - name.brand='hongik'을 통해서 새로운 값이 할당
  - `name.color='red'`하면 항목이 추가됨
  - `delete name.color` 하면 항목이 삭제됨 
  - 객체에서의 undefined
    - ```
      let name = {
        color:undefined
      }
      console.log(name.color!==underfined)//false출력
      console.log('color' in name)//true 출력
     ```
  - 공백 포함인 객체 요소의 이름을 받을려면
    `name['my value']`로 써줘야함
  - 매소드
    -객체 안에 함수 역시 넣을 수 있음
    - ```
      let name={
        color='red'
        setName(name)//function 따로 안쓰고 바로 씀
        {
          console.log(name1);
          console.log(name[color]);//출력 red
          //매개변수로 value값 가져올 때 대괄호를 사용해서 가져와야함
        }
      }
      console.log(name['setName']('매개변수'))//name.setName('매개변수')와 같음
   - 객체 반복문
     - in을 사용 중
     - ```
        for (let key in name){
        console.log(key);//key 값 출력
        console.log(codeit[key])//value값 출력
      }
       ```
     - key 의 순서는 문자열을 추가한 순서대로 정열되지만 정수형(문자열로 변환을 해도)은 오름차순으로 나옴
   - Date 객체
     - `new Date(안에 원하는 날짜)`//보통 문자열 '2023-8-7'이라 쓰거나 (2023,2,3,4,5,6) 2023년 4월 18일 4시 5분 6초(타임스탬프)
     - getDay는 요일 getDate는 날짜 > month와 day는 0-11 0-6까지 있음
     - 이상한 날짜 1.32이 있다면 2.1로 수정해줌
- 배열
  - 다른 배열과 비슷함 ranking을 사용할 때 객체보다 편리
  - splice 메소드
    - 배열.splice(자르기 시작할 index 값, 자를 개수,다른 요소들(elements))>> element는 생략 가능함 
    - 자를 개수 0과 element를 넣으면 삭제 없이 중간에 끼워 넣기가 됨
    - 자를 개수 1과 element를 넣으면 요소 하나만 수정이 됨
    - 자를 개수 0과 아무것도 없으면 삭제
  - 다양한 메소드
    - shift(),unshift(매개변수),pop(),push(매개변수) //요소 추가 및 제거
    - indexOf 특정 값 찾기//있으면 인덱스 반환 없으면 -1 반환
    - reverse 뒤집기 includes 부울로 반환
  - 반복문 
    - `for(let i of 배열)` 이렇게 쓰면 i에 배열의 element가 들어감
- 자료형
  - 10의 거듭 제곱 eN e-N
  - 0x 16진수 0o 8진수 0b 이진수
  - 숫자형 메소드
    - toFixxed(소숫점 n째 아래까지 표현)->문자열로 변환
    - 정수..toString(n 진수)->문자열로 만듬
    - Math.메소드
      - min,max(숫자 여러개),pow(숫자,거듭제곱지수),abs(절댓값), sqrt(제곱근), round(반올림)
  - 문자열 메소드
    - trim()양끝 공백을 잘라줌, slice(시작,끝 index),toUpperCase()대문자로 toLowerCase()소문자로
    - 문자열 `let string='HI'`와 `let object=['H','I']`는 다름
      - string은 안 변하고 object는 변할 수 있음 index를 통해서
  - 객체를 할당받은 변수를 다른 변수에 할당해 주면 그 객체가 공유됨
    - 배열 역시 주소를 가리키는 것임
      - let number=numebeer1.slice() //배열 자체가 복사
    - 하지만 객체한에 배열이 아닌 다른 값을 가리킨다고해서 그것 마저 공유 되는것은 아님
    - _ex)let y=x.number과 같은것은 공유 xX_
      - Object.assign({},복사 하고 싶은 객체)하면 따로 복사됨
      - 함수나 반복문을 통해서도 객체를 복사해줄 수 있음
- 