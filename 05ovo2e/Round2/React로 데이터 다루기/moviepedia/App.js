import ReviewList from "./ReviewList";
import { useEffect, useState } from "react";
import { getReviews } from "../api";
import ReviewForm from "./ReviewForm";

const LIMIT = 6;

// 최상위 컴포넌트
function App() {
  // 별점 높은 순으로 정렬
  const [order, setOrder] = useState("createdAt");
  const [offset, setOffset] = useState(0);
  const [hasNext, setHasNext] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(null);
  const [items, setItems] = useState([]);
  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => setOrder("createdAt");
  const handleBestClick = () => setOrder("rating");

  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  const handleLoad = async (options) => {
    // 네트워크 로딩 처리 try-catch-finally와 isLoading 값 이용
    let result;
    try {
      setLoadingError(null);
      setIsLoading(true);
      result = await getReviews(options);
    } catch (error) {
      setLoadingError(error);
      return;
    } finally {
      setIsLoading(false);
    }
    const { paging, reviews } = result;

    if (options.offset === 0) {
      setItems(reviews);
    } else {
      // 콜백함수 prevItems 사용으로 삭제한 데이터가 다시 set되는 것 방지
      setItems((prevItems) => [...prevItems, ...reviews]);
    }
    setOffset(options.offset + options.limit);
    setHasNext(paging.hasNext);
  };

  const handleLoadMore = async () => {
    await handleLoad({ order, offset, limit: LIMIT });
  };

  // 실행할 콜백 함수와 빈 배열을 넘겨 주면
  // 리액트는 콜백 함수를 맨 처음 렌더링할 때만 실행함 (무한 루프x)
  useEffect(() => {
    handleLoad({ order, offset: 0, limit: LIMIT });
    // order 버튼 클릭마다 state가 바뀌어서 재렌더링이 일어남
    // 정렬된 데이터 서버 요청에 사용
  }, [order]);

  return (
    <div>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>베스트순</button>
      </div>
      <ReviewList items={sortedItems} onDelete={handleDelete} />
      {hasNext && (
        <button disabled={isLoading} onClick={handleLoadMore}>
          더 보기
        </button>
      )}
      {loadingError?.message && <span>{loadingError.message}</span>}
    </div>
  );
}

export default App;
