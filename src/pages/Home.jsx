// 공통 섹션 레이아웃 컴포넌트 import (타이틀/설명 포함)
import Main from "../components/section/Main";

// 콘텐츠 컴포넌트들 import
import Today from "../components/contents/Today"; // 오늘의 추천 영상
import Developer from "../components/contents/Developer"; // 추천 개발자 소개
import VideoSlider from "../components/video/VideoSlider"; // 영상 슬라이더 컴포넌트

// 각 주제별 정적 데이터(JSON) import
import { webdText } from "../data/webd"; // 웹디자인 기능사
import { websiteText } from "../data/website"; // 웹표준 사이트
import { gsapText } from "../data/gsap"; // GSAP 강의
import { portfolioText } from "../data/portfolio"; // 포트폴리오 강의
import { youtubeText } from "../data/youtube"; // 유튜브 영상 모음
import { developerText } from "../data/developer"; // 개발자 추천 리스트
import { todayText } from "../data/today"; // 오늘의 추천 영상

// 홈 페이지 컴포넌트 정의
const Home = () => {
  return (
    // Main 레이아웃으로 감싸고 타이틀 및 설명 전달
    <Main title="웹스토리보이 유튜브" description="웹스토리보이 유튜브에 오신것을 환영합니다.">
      {/* 오늘의 추천 영상 섹션 */}
      <Today videos={todayText} id="today" />

      {/* 추천 개발자 섹션 */}
      <Developer videos={developerText} title="추천 개발자를 소개합니다." id="developer" />

      {/* 다양한 주제의 강의 영상 슬라이드 */}
      <VideoSlider videos={webdText} title="웹디자인기능사 준비는 이걸로!" id="web" />
      <VideoSlider videos={websiteText} title="웹표준 사이트 만들기 기초 다지기" id="website" />
      <VideoSlider videos={gsapText} title="GSAP 패럴랙스 효과를 하고 싶다면!" id="gsap" />
      <VideoSlider videos={portfolioText} title="포트폴리오 만드는 방법을 공유합니다." id="portfolio" />
      <VideoSlider videos={youtubeText} title="지금 이 코딩을 영상으로" id="youtube" />
    </Main>
  );
};

export default Home;
