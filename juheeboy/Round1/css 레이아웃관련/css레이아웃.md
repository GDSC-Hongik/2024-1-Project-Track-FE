Css 레이아웃
블록:아래서 위로
인라인: 흐름에 따라 배치 ex) disply:inline;
포지션
Static 기본적 특정 흐름에 따라
Relative: 원래 있던 위치를 기준으로 옮겨짐(다른 애들이 움직이지 않음) 
-top:30
Absolute:
postioning(스태틱 말고)된 가장 가까운 곳 기준으로 움ㅁ직임
직접 넓이와 높이를 정해줘야함
Inset:0; 모든 방향에서 0px 화면이 꽉 차게 됨
Fixed: 브라우저에 어떤 위치에 계속 위치해 있음 스크롤 해도 그 위치에 존재함
보통 브라우저 위에 width 100% 나머지 네비게이션 바
Main{
Magin-top:120px정도를 해줘야 위에 가려진 부분이 보임
}

Sticky 스크롤이 내려가야지 같이 네비게이션바가 내려감
원래 위치에서 자리를 차지하는 위치임
60px로 지정해 놓으면 60px가 닿아야지 내려감
같이 있는 div안 요소가 사라지면 같이 사라짐
Bottom:0;으로 하면 밑에 고정됨

앞뒤 순서를 정하는 코드
Z-index:1;(index가 높을 수록 앞에 보임)
아랫줄에 있을 수록 먼저보임

Flexbox
Display:flex
Flex-direction: column(위에서 아래) row(왼쪽에서 오른쪽)
Justify-content:center; space-between(양끝으로 배치),flex-end 끝으로 배치
Align-items: center;/stretch /column
Flex-wrap:wrap요소가 넘어가면 밑으로 넘어가게 함
Gap: px(세로 가로)
Flex-glow=1 모든 플랙스 항목이 남은 공간을 균등하게 나누어 가짐(남는 공간)
Free-shrink=1 모든 항목이 축소될 수 있음 (공간 부족)
Flex-basis: 영역의 크기 정하기
Grid
Display:grid
Grid-template-columns:100 300 100(세로)
Grid-template-rows:(가로로 나누어줌)
Grid-template: 세로/ 가로
Px 대신 fr 을 씀으로서 비율에 맞게 나눔
크기를 최대 최소로 지정하는 것도 가능 minmax(200px,300px)처럼
repeat(n번, 1) >>1을 n번 반복함 
gap을 쓰면 간격도 할 수 있음 (세로 가로 순으로 쓸 수도 있음)
자동으로 정해지게 하는 법:grid-auto-rows:50 100 200느낌으로 다양하게 쓸 수도 있음
Grid-row:라인번호
Grid-column:라인번호 2/4 2라인에서 4라인 까지
Span 4를 쓰면 4칸을 차지하게 하는거
Gris- area:””;
Grid-templete-areas