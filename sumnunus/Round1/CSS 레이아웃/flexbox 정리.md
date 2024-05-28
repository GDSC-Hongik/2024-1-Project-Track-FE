flex-direction을 사용하면 기본 축의 방향을 정할 수 있습니다.
이때 기본 값은 row입니다.

기본 축 정렬: justify-content
justify-content를 사용하면 기본 축 방향으로 정렬할 수 있습니다.
기본 값은 flex-start입니다.

교차 축 정렬: align-items
교차 축 방향으로 정렬할 때는 align-items를 사용합니다.
기본 값은 stretch(늘려서 배치하기) 입니다.

요소가 넘칠 때: flex-wrap
요소가 넘치는 경우 flex-wrap: wrap을 지정해주면 교차 축 방향으로 넘어가서 배치됩니다.

간격 : gap

요소 늘려서 채우기: flex-grow
기본 값은 0입니다. flex-grow 값이 클수록 많이 늘어납니다.

요소 줄여서 채우기: flex-shrink
만약 요소들의 크기가 커서 넘치는 경우, 요소의 크기를 줄여서 플렉스박스 안에 가득 채웁니다. flex-shrink의 기본 값이 1이기 때문에 기본적으로 요소를 줄여서 배치하고, 0으로 지정하면 크기가 줄어들지 않습니다. 그리고 flex-shrink 값이 클수록 상대적으로 많이 줄어듭니다.
