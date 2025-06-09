// React의 훅 useEffect를 import
import { useEffect } from "react";

// 현재 URL 경로 정보를 가져오기 위한 useLocation 훅
import { useLocation } from "react-router-dom";

// 이 컴포넌트는 라우터 경로(pathname)가 바뀔 때마다 화면을 최상단으로 스크롤합니다.
const ScrollTo = () => {
  // 현재 URL의 경로명(pathname)을 가져옴
  const { pathname } = useLocation();

  // pathname이 바뀔 때마다 실행되는 useEffect
  useEffect(() => {
    // 화면을 맨 위로 스크롤
    window.scrollTo(0, 0);
  }, [pathname]); // 의존성 배열에 pathname이 있으므로 URL이 바뀔 때마다 실행됨

  // 실제로 렌더링하는 요소는 없음 (기능만 수행)
  return null;
};

export default ScrollTo;
