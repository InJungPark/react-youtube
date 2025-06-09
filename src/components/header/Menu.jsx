// 메뉴 및 추천 검색어 데이터를 포함한 배열 import
import { headerMenus, searchKeyword } from "../../data/header";
// React Router 훅: 현재 URL 경로 확인, 페이지 이동용 Link import
import { Link, useLocation } from "react-router-dom";

// Menu 컴포넌트 정의
const Menu = () => {
  // 현재 경로(pathname)를 가져옴 (활성 메뉴 표시용)
  const location = useLocation();

  return (
    <nav className="header__menu">
      {/* 메인 메뉴 리스트 */}
      <ul className="menu">
        {headerMenus.map((menu, key) => (
          <li
            key={key}
            // 현재 경로와 메뉴의 src가 일치하면 "active" 클래스 추가
            className={location.pathname === menu.src ? "active" : ""}
          >
            <Link to={menu.src}>
              {menu.icon} {/* 아이콘 컴포넌트 */}
              {menu.title} {/* 메뉴 텍스트 */}
            </Link>
          </li>
        ))}
      </ul>

      {/* 추천 검색어 키워드 메뉴 리스트 */}
      <ul className="keyword">
        {searchKeyword.map((keyword, key) => (
          <li key={key} className={location.pathname === keyword.src ? "active" : ""}>
            <Link to={keyword.src}>{keyword.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
