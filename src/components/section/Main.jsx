// react-helmet-async: SEO 처리를 위한 라이브러리 import
import { Helmet, HelmetProvider } from "react-helmet-async";

// 공통 컴포넌트 import
import Header from "./Header"; // 상단 네비게이션
import Footer from "./Footer"; // 하단 정보
import Search from "./Search"; // 검색창
import ScrollTo from "../../utils/scrollTo"; // 페이지 이동 시 자동 스크롤 처리

// Main 컴포넌트 정의
// props로 title, description, children(본문 내용)이 전달됨
const Main = (props) => {
  return (
    // Helmet 관련 기능을 사용하려면 HelmetProvider로 감싸야 함
    <HelmetProvider>
      {/* 페이지 이동 시 스크롤을 최상단으로 올리는 기능 */}
      <ScrollTo />

      {/* Helmet: SEO를 위한 title, meta 정보 설정 */}
      <Helmet
        titleTemplate="%s | Webs Youtube" // title이 있을 경우 템플릿 적용
        defaultTitle="Webs Youtube" // 기본 제목
        defer={false} // 즉시 렌더링
      >
        {/* props.title이 존재할 경우 title 태그 생성 */}
        {props.title && <title>{props.title}</title>}
        {/* 메타 설명 추가 */}
        <meta name="description" content={props.description} />
      </Helmet>

      {/* 공통 헤더 */}
      <Header />

      {/* 메인 콘텐츠 영역 */}
      <main id="main" role="main">
        {/* 상단 검색창 */}
        <Search />
        {/* 각 페이지별 본문 내용 삽입 */}
        {props.children}
      </main>

      {/* 공통 푸터 */}
      <Footer />
    </HelmetProvider>
  );
};

export default Main;
