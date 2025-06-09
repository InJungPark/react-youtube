// React 훅 import
import { useState } from "react";
// React Router 훅 import: 프로그래밍 방식으로 페이지 이동할 때 사용
import { useNavigate } from "react-router-dom";

// Search 컴포넌트 정의
const Search = () => {
  // 검색어를 저장할 상태값 선언
  const [searchKeyword, setSearchKeyword] = useState("");
  // 페이지 이동 함수 (useNavigate는 history.replace와 비슷한 기능)
  const navigate = useNavigate();

  // 검색 실행 함수 (엔터 입력 또는 외부 호출 시 사용)
  const handleSearch = () => {
    console.log(searchKeyword); // 디버깅용 콘솔 출력
    if (searchKeyword) {
      // 검색 결과 페이지로 이동
      navigate(`/search/${searchKeyword}`);
      // 입력 필드 초기화
      setSearchKeyword("");
    }
  };

  return (
    <div id="search">
      <div className="search__inner">
        {/* 시각장애인 접근성을 위한 라벨 (화면에는 안 보임) */}
        <label htmlFor="searchInput">
          <span className="ir">검색</span>
        </label>

        {/* 검색 입력창 */}
        <input
          type="search"
          name="searchInput"
          id="searchInput"
          autoComplete="off"
          className="search__input"
          placeholder="검색어를 입력해주세요!"
          // 입력값이 바뀔 때 상태 업데이트
          onChange={(e) => setSearchKeyword(e.target.value)}
          // Enter 키 입력 시 검색 실행
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
      </div>
    </div>
  );
};

export default Search;
