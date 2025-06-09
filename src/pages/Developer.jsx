// React 훅 import: 상태 관리(useState), 생명주기 관리(useEffect)
import { useEffect, useState } from "react";

// 공통 페이지 레이아웃 컴포넌트 import (타이틀 및 설명 포함)
import Main from "../components/section/Main";

// 추천 개발자 데이터(JSON 형식) import
import { developerText } from "../data/developer";

// 링크 이동을 위한 React Router 컴포넌트 import
import { Link } from "react-router-dom";

// Developer 컴포넌트 정의
const Developer = () => {
  // 로딩 상태 관리 (초기값: true → 로딩 중)
  const [loading, setLoading] = useState(true);

  // 컴포넌트가 마운트되면 300ms 후 로딩 종료 (애니메이션 효과용)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  // 로딩 여부에 따라 적용할 CSS 클래스
  const developoerPageClass = loading ? "isLoading" : "isLoaded";

  return (
    // Main 컴포넌트를 통해 타이틀 및 설명 설정
    <Main title="추천 개발자" description="오늘의 추천 개발자 유튜버입니다.">
      <section id="developerPage" className={developoerPageClass}>
        {/* 페이지 제목 */}
        <h2>추천 개발자를 소개합니다.</h2>

        {/* 개발자 카드 전체를 감싸는 컨테이너 */}
        <div className="developer__inner">
          {/* developerText 배열을 순회하며 개발자 카드 렌더링 */}
          {developerText.map((developer, key) => (
            <div className="developer" key={key}>
              {/* 썸네일 이미지 (클릭 시 해당 채널 페이지로 이동) */}
              <div className="developer__img play__icon">
                <Link to={`/channel/${developer.channelId}`}>
                  <img src={developer.img} alt={developer.name} />
                </Link>
              </div>

              {/* 개발자 이름 (링크 포함) */}
              <div className="developer__info">
                <Link to={`/channel/${developer.channelId}`}>
                  {developer.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Main>
  );
};

export default Developer;
