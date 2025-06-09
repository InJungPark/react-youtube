// React의 상태 관리와 생명주기 처리를 위한 훅 import
import { useEffect, useState } from "react";

// 페이지 레이아웃을 감싸는 공통 섹션 컴포넌트 import
import Main from "../components/section/Main";

// 비디오 카드 리스트를 렌더링하는 컴포넌트 import
import VideoCard from "../components/video/VideoCard";

// 웹표준 강의 관련 영상 데이터 (더미 데이터) import
import { websiteText } from "../data/website";

// Website 컴포넌트 정의 - 웹표준 강의 목록 페이지
const Website = () => {
  // 페이지 로딩 상태 관리 (초기값 true)
  const [loading, setLoading] = useState(true);

  // 컴포넌트가 마운트되면 300ms 후 로딩 상태 해제
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  // 로딩 여부에 따라 CSS 클래스 다르게 설정
  const websitePageClass = loading ? "isLoading" : "isLoaded";

  return (
    // Main 컴포넌트로 페이지 타이틀 및 설명 지정 (SEO용)
    <Main title="웹표준 사이트" description="웹표준 사이트 튜토리얼 강의입니다.">
      {/* 로딩 클래스 적용된 섹션 */}
      <section id="websitePage" className={websitePageClass}>
        <h2>웹사이트의 기초는 이 강의로~</h2>
        <div className="video__inner">
          {/* 정적 데이터 기반으로 영상 카드 리스트 렌더링 */}
          <VideoCard videos={websiteText} />
        </div>
      </section>
    </Main>
  );
};

export default Website;
