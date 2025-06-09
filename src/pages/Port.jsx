// React 훅 import : 상태 관리(useState), 사이드 이펙트 처리(useEffect)
import { useEffect, useState } from "react";

// 페이지 공통 레이아웃을 위한 Main 컴포넌트 import
import Main from "../components/section/Main";

// 비디오 카드 리스트 컴포넌트 import
import VideoCard from "../components/video/VideoCard";

// 포트폴리오 강의 데이터 (정적 JSON 형식) import
import { portfolioText } from "../data/portfolio";

// Port 컴포넌트 정의 - 포트폴리오 강의 영상 페이지
const Port = () => {
  // 로딩 상태를 관리할 state (초기값: true)
  const [loading, setLoading] = useState(true);

  // 컴포넌트가 마운트되면 300ms 후 로딩 상태 false로 전환
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  // 로딩 여부에 따라 CSS 클래스 동적으로 설정
  const portPageClass = loading ? "isLoading" : "isLoaded";

  return (
    // Main 컴포넌트를 통해 페이지 제목/설명 전달 및 공통 레이아웃 적용
    <Main title="포트폴리오 사이트" description="포트폴리오 사이트 튜토리얼 강의입니다.">
      <section id="portPage" className={portPageClass}>
        <h2>나만의 포트폴리오 사이를 만들고 싶다면.</h2>
        <div className="video__inner">
          {/* 정적 데이터(portfolioText)를 props로 넘겨서 영상 카드 렌더링 */}
          <VideoCard videos={portfolioText} />
        </div>
      </section>
    </Main>
  );
};

export default Port;
