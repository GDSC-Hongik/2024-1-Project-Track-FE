그리드 나누기
display 속성을 grid 로 하고 grid-template-columns 속성으로 컬럼을, grid-template-rows 속성으로 로우를 나눌 수 있습니다.
예를 들어서 3 x 2 그리드를 만드는데, 컬럼 너비는 각각 100px, 200px 100px이고 로우 너비는 150px 200px이라면 아래와 같이 쓸 수 있죠.

display: grid;
grid-template-columns: 100px 200px 100px;
grid-template-rows: 150px 200px;

유연한 크기 단위
fr 이라는 단위를 사용하면 플렉스박스처럼 전체 크기에 대해 상대적인 값을 지정할 수 있습니다. 예를 들어서 3 x 2 그리드에서 컬럼의 너비를 1 : 1 : 1로 하고 싶다면 아래처럼 할 수 있습니다.

display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 150px 200px;

반복되는 값을 한 번에 쓰기
repeat()으로 반복할 횟수와 값을 쓰면 코드를 깔끔하게 쓸 수 있습니다.

display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: 150px 200px;

최소, 최대값으로 크기 정하기
최솟값과 최댓값을 지정해두면 이 사이에서 유연하게 크기가 조절되도록 할 수 있습니다. 예를 들어서 아래 코드는 컬럼의 너비가 최소 200px인데요.
화면 너비가 작아지더라도 컬럼의 너비는 200px보다 작아지지는 않고, 화면 너비가 넓어지면 컬럼의 너비는 1 : 1 : 1 비율로 늘어납니다.

display: grid;
grid-template-columns: repeat(3, minmax(200px, 1fr));
grid-template-rows: 150px 200px;

간격 넣기
gap 속성으로 간격을 넣습니다. 플렉스박스와 마찬가지로 값을 한 개만 쓰면 세로 가로 모두 간격을 지정할 수 있고, 세로 그리고 가로 순으로 숫자를 두 개 쓰면 세로 간격이랑 가로 간격을 지정할 수 있습니다. 예를 들어서 아래 코드는 세로 간격 20px, 가로 간격 10px로 지정한 코드입니다.

display: grid;
grid-template-columns: repeat(3, minmax(200px, 1fr));
grid-template-rows: 150px 200px;
gap: 20px 10px;

그리드 라인 번호와 이름을 이용해서도 원하는 위치에 배치할 수 있습니다.
