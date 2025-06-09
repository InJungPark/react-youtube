// React의 lazy 로딩과 Suspense를 위한 import
import { Suspense, lazy } from "react";
// 라우팅을 위한 React Router import
import { BrowserRouter, Routes, Route } from "react-router-dom";
// 로딩 중 보여줄 컴포넌트 (Fallback)
import Main from "./components/section/Main";

// 각 페이지 컴포넌트를 lazy 로딩으로 import (코드 분할)
const Home = lazy(() => import("./pages/Home"));
const Today = lazy(() => import("./pages/Today"));
const Developer = lazy(() => import("./pages/Developer"));
const Webd = lazy(() => import("./pages/Webd"));
const Website = lazy(() => import("./pages/Website"));
const Gsap = lazy(() => import("./pages/Gsap"));
const Port = lazy(() => import("./pages/Port"));
const Youtube = lazy(() => import("./pages/Youtube"));
const Channel = lazy(() => import("./pages/Channel"));
const Video = lazy(() => import("./pages/Video"));
const Search = lazy(() => import("./pages/Search"));
const Not = lazy(() => import("./pages/Not"));

const App = () => {
  return (
    // 전체 앱을 라우팅 기능이 적용되도록 감싸는 BrowserRouter
    <BrowserRouter>
      {/* lazy로 불러온 컴포넌트가 로딩될 때 보여줄 fallback UI */}
      <Suspense fallback={<Main />}>
        {/* URL 경로에 따라 다른 컴포넌트를 보여주는 Routes 설정 */}
        <Routes>
          <Route path="/" element={<Home />} />                       {/* 메인 홈 페이지 */}
          <Route path="/today" element={<Today />} />                {/* 오늘의 영상 */}
          <Route path="/developer" element={<Developer />} />        {/* 개발 관련 영상 */}
          <Route path="/webd" element={<Webd />} />                  {/* 웹디자인 관련 영상 */}
          <Route path="/website" element={<Website />} />            {/* 웹사이트 관련 영상 */}
          <Route path="/gsap" element={<Gsap />} />                  {/* GSAP 애니메이션 관련 영상 */}
          <Route path="/port" element={<Port />} />                  {/* 포트폴리오 관련 영상 */}
          <Route path="/youtube" element={<Youtube />} />            {/* 유튜브 메인 영상 목록 */}
          <Route path="/channel/:channelId" element={<Channel />} /> {/* 특정 채널 페이지 */}
          <Route path="/video/:videoId" element={<Video />} />       {/* 영상 상세 페이지 */}
          <Route path="/search/:searchId" element={<Search />} />    {/* 검색 결과 페이지 */}
          <Route path="*" element={<Not />} />                       {/* 없는 경로 -> NotFound 페이지 */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
