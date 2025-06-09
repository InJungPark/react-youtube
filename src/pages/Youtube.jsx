// React의 상태 관리 및 사이드 이펙트를 위한 훅 import
import { useEffect, useState } from "react";

// 페이지 레이아웃을 감싸는 공통 섹션 컴포넌트 import
import Main from "../components/section/Main";

// 비디오 카드 리스트 컴포넌트 import
import VideoCard from "../components/video/VideoCard";

// 더미 영상 데이터 (JSON 형식) import
import { youtubeText } from "../data/youtube";

// 유튜브 페이지 컴포넌트 정의
const Youtube = () => {
  // 로딩 상태를 관리하는 state (초기값은 true)
  const [loading, setLoading] = useState(true);

  // 컴포넌트 마운트 시 300ms 후 로딩 해제
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  // 로딩 상태에 따라 클래스 이름을 조건부로 설정
  const youtubePageClass = loading ? "isLoading" : "isLoaded";

  return (
    // Main 컴포넌트를 통해 페이지 제목과 설명 삽입 (SEO에도 사용 가능)
    <Main title="유튜브 사이트" description="유튜브 사이트 튜토리얼 강의입니다.">
      {/* 포트폴리오 섹션 클래스에 로딩 상태 반영 */}
      <section id="portPage" className={youtubePageClass}>
        <h2>나만의 유튜브 사이트 만들기</h2>
        {/* 비디오 리스트 영역 */}
        <div className="video__inner">
          {/* 비디오 카드 컴포넌트에 youtubeText 데이터 전달 */}
          <VideoCard videos={youtubeText} />
        </div>
      </section>
    </Main>
  );
};

export default Youtube;
