배경 이미지
background-image:
url('a.png'), /_ 제일 위에 보이는 이미지 _/
url('b.png'),
url('c.png');
아래처럼 이미지를 배경으로 넣으면 a.png 아래에 b.png가 깔리고, 맨 밑에는 c.png가 깔립니다.

배경의 위치
background-position: top; /_ 위 _/
background-position: right; /_ 오른쪽 _/
background-position: bottom; /_ 아래 _/
background-position: left; /_ 왼쪽 _/
background-position: left top; /_ 왼쪽 위 (지정하지 않았을 때 기본값) _/
background-position: center;

배경의 반복
background-repeat: repeat; /_ 반복하기 (지정하지 않았을 때 기본값) _/
background-repeat: no-repeat; /_ 반복 안 함 _/

배경의 크기
background-size: cover; /_ 비율 유지하면서 꽉 차게. 이미지 잘릴 수 있음 _/
background-size: contain; /_ 비율 유지하면서 최대한 크게. 이미지 잘리지 않음 _/
background-size: 40px 30px; /_ 가로 40px 세로 30px _/

그라디언트
background-image: linear-gradient(#000000, #ffffff);
기본 방향은 위에서 아래로 내려오는 방향 (180도)

그림자
box-shadow: 5px 10px 15px 8px rgba(0, 0, 0, 0.6);
/_
가로: 5px
세로: 10px
흐린 정도(Blur): 15px
퍼지는 정도(Spread): 8px
색상: rgba(0, 0, 0, 0.6)
_/

불투명도
opacity: 0; /_ 투명 _/
opacity: 0.6;
opacity: 1; /_ 불투명 _/
