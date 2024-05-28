//태그
꺾쇠를 사용하는 문법
시작 태그 : <태그 이름>
종료 태그 : </태그 이름>

줄바꿈(<br>)이나 이미지(<img>)처럼 안에 내용이 없는 태그는 시작 태그만 쓴다.
참고로 마지막에 슬래시(/) 기호를 넣어서 하나짜리 태그라는 걸 표시하기도 한다.
<img src="https://example.com/my-image.png" />

//속성
시작 태그에 속성 이름="속성 값" 형태로 사용하는 문법

<a href="https://codeit.kr">코드잇</a>
<img src="https://example.com/my-image.png">

//html 파일의 기본 구조

<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
  </body>
</html>

//배운 태그 정리

// 사이트 이름

<head>
    <title>윤동주 서시 - 한국 시 모음</title>
    ...
</head>

// 인코딩 정하기
한글을 지원하는 인코딩인 UTF-8을 사용하도록 정하는 코드

<head>
    <meta charset="utf-8">
    ...
</head>

// 제목 - <h1>,<h2>...
// 단락 - <p> (줄 바꿈은 나오지 않는다.)
// 줄바꿈 - <br> (내용 없으니까 시작 태그 하나만 사용)
// 링크 - <a> (href 속성 이용)
// 이미지 - <img src="파일의 주소나 경로">
// 영역 나누기 - <div>, <span>
