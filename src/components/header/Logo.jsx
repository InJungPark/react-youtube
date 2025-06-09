// 페이지 이동을 위한 React Router의 Link 컴포넌트 import
import { Link } from "react-router-dom";

// Logo 컴포넌트 정의
// props : toggleMenu → 메뉴 상태를 토글하는 함수 (주로 모바일에서 메뉴 닫기용)
const Logo = ({ toggleMenu }) => {
  return (
    // h1: 페이지의 대표 제목 요소로 로고에 적절
    <h1 className="header__logo">
      {/* 로고 클릭 시 홈(/)으로 이동 */}
      <Link to="/">
        {/* 숨김용 시각 아이콘 (예 : 햄버거 버튼 아이콘 자리에 사용 가능) */}
        <em
          aria-hidden="true" // 스크린 리더에서 숨김 처리
          onClick={toggleMenu} // 클릭 시 메뉴 닫기 (헤더에서 전달됨)
        ></em>
        {/* 사이트명 출력 */}
        <span>
          webs
          <br />
          youtube
        </span>
      </Link>
    </h1>
  );
};

export default Logo;
