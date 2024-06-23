import "./ReviewList.css";

// 영화 포스터, 제목, 줄거리
function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function ReviewListItem({ item, onDelete }) {
  const handleDeleteClick = () => {
    onDelete(item.id);
  };
  return (
    <div className="ReviewListItem">
      <img className="ReviewListItem-img" src={item.imgUrl} alt={item.title} />
      <div>
        <h1>{item.title}</h1>
        <p>{item.rating}</p>
        <p>{formatDate(item.createdAt)}</p>
        <p>{item.content}</p>
        <button onClick={handleDeleteClick}>삭제</button>
      </div>
    </div>
  );
}

function ReviewList({ items, onDelete }) {
  return (
    <ul>
      {items.map((item) => {
        return (
          // 요소들의 순서가 바뀌어도 그대로 유지되게 함
          // 데이터를 구분할 수 있는 고유한 값(id)로 지정
          <li key={item.id}>
            <ReviewListItem item={item} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
}

// 영화 제목만
/*
function ReviewList({ items }) {
  return (
    <ul>
      {items.map((item) => {
        return <li>{item.title}</li>;
      })}
    </ul>
  );
}
*/

export default ReviewList;
