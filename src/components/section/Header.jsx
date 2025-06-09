// React 훅 import: 메뉴 상태 토글을 위한 useState
import { useState } from "react";

// Header 내부에서 사용할 서브 컴포넌트 import
import Logo from "../header/Logo"; // 로고 영역 (메뉴 버튼 포함)
import Menu from "../header/Menu"; // 네비게이션 메뉴
import Sns from "../header/Sns"; // SNS 링크 아이콘

// Header 컴포넌트 정의
const Header = () => {
  // 메뉴 상태를 관리하는 상태값 (true : 열림, false : 닫힘)
  const [isMenuActive, setIsMenuActive] = useState(false);

  // 메뉴 토글 함수 (현재 상태 반대로 전환)
  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    // header 요소에 상태에 따라 "active" 클래스 적용
    <header
      id="header"
      role="banner" // 웹 접근성 : 이 영역이 웹사이트의 "로고 및 메뉴" 영역임을 의미
      className={isMenuActive ? "active" : ""}
    >
      {/* 로고 영역 : 메뉴 토글 버튼도 이 안에 포함될 가능성 있음 */}
      <Logo toggleMenu={toggleMenu} />

      {/* 네비게이션 메뉴 컴포넌트 */}
      <Menu />

      {/* SNS 링크 컴포넌트 */}
      <Sns />
    </header>
  );
};

export default Header;
