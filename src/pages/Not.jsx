// 공통 레이아웃 컴포넌트 import (페이지 타이틀 및 설명 포함)
import Main from "../components/section/Main";

// NotFound 페이지 컴포넌트 정의
const Not = () => {
  return (
    // Main 레이아웃 컴포넌트를 활용해 제목 및 설명 전달
    <Main title="잘못된 페이지" description="접근이 잘못된 페이지입니다.">
      {/* 사용자에게 잘못된 접근임을 알리는 메시지 */}
      Not
    </Main>
  );
};
export default Not;
