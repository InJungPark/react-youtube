// React의 상태 관리(useState)와 생명주기(useEffect) 훅 import
import { useEffect, useState } from "react";

// 공통 페이지 레이아웃을 담당하는 Main 컴포넌트 import
import Main from "../components/section/Main";

// 비디오 카드 리스트 렌더링용 컴포넌트 import
import VideoCard from "../components/video/VideoCard";

// 웹디자인 기능사 강의 영상 데이터 (더미 데이터) import
import { webdText } from "../data/webd";

// Webd 컴포넌트 정의 - 웹디자인 기능사 강의 목록 페이지
const Webd = () => {
  // 페이지 로딩 상태를 위한 상태값 선언 (초기값: true)
  const [loading, setLoading] = useState(true);

  // 컴포넌트 마운트 시 300ms 뒤 로딩 상태를 false로 전환
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  // 로딩 여부에 따라 CSS 클래스명을 동적으로 설정
  const webdPageClass = loading ? "isLoading" : "isLoaded";

  return (
    // Main 컴포넌트를 활용해 페이지 제목과 설명 전달 (SEO 및 일관된 레이아웃 구성)
    <Main title="웹디자인 기능사" description="웹디자인 기능사 튜토리얼 강의입니다.">
      {/* 로딩 상태에 따라 클래스명이 바뀌는 섹션 */}
      <section id="webdPage" className={webdPageClass}>
        <h2>웹디자인기능사 한번에 따자!</h2>
        <div className="video__inner">
          {/* 정적 JSON 데이터(webdText)를 전달해 영상 카드 렌더링 */}
          <VideoCard videos={webdText} />
        </div>
      </section>
    </Main>
  );
};

export default Webd;
