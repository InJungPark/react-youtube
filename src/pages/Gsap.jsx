// React의 상태 및 생명주기 훅 import
import { useEffect, useState } from "react";

// 공통 섹션 레이아웃 컴포넌트 import (타이틀과 설명 포함)
import Main from "../components/section/Main";

// 비디오 카드 리스트 컴포넌트 import (여러 개의 영상 카드 출력용)
import VideoCard from "../components/video/VideoCard";

// GSAP 관련 강의 영상 데이터 (정적 JSON 데이터) import
import { gsapText } from "../data/gsap";

// Gsap 컴포넌트 정의 - GSAP 강의 목록 페이지
const Gsap = () => {
  // 로딩 상태 관리 (초기값: true)
  const [loading, setLoading] = useState(true);

  // 컴포넌트가 마운트되면 300ms 후 로딩 상태를 false로 변경
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  // 로딩 상태에 따라 클래스명을 조건부로 설정
  const gsapPageClass = loading ? "isLoading" : "isLoaded";

  return (
    // Main 컴포넌트로 페이지 타이틀과 설명을 전달
    <Main title="GSAP 사이트" description="GSAP 사이트 튜토리얼 강의입니다.">
      <section id="gsapPage" className={gsapPageClass}>
        {/* 페이지 제목 */}
        <h2>창의적 사이트를 만들고 싶다면!</h2>

        {/* 비디오 카드 리스트 출력 영역 */}
        <div className="video__inner">
          {/* 정적 데이터(gsapText)를 전달하여 영상 카드 출력 */}
          <VideoCard videos={gsapText} />
        </div>
      </section>
    </Main>
  );
};

export default Gsap;
