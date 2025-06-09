// React 훅 import : 상태 관리(useState)와 사이드 이펙트 처리(useEffect)
import { useEffect, useState } from "react";

// 공통 레이아웃 섹션 컴포넌트 import
import Main from "../components/section/Main";

// 오늘의 추천 영상 데이터를 담고 있는 정적 JSON 데이터 import
import { todayText } from "../data/today";

// 페이지 내에서 링크 이동을 위한 React Router 기능 import
import { Link } from "react-router-dom";

// Today 컴포넌트 정의 - 추천 영상 페이지
const Today = () => {
  // 페이지 로딩 상태 관리 (초기 true → 로딩 중)
  const [loading, setLoading] = useState(true);

  // 컴포넌트 마운트 후 300ms 뒤 로딩 해제 (애니메이션 연출 가능)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  // 로딩 상태에 따라 적용할 클래스명 설정
  const todayPageClass = loading ? "isLoading" : "isLoaded";

  return (
    // Main 레이아웃 컴포넌트로 타이틀 및 설명 전달 (SEO 및 일관성 유지)
    <Main title="추천 영상" description="오늘의 추천 유튜브 영상입니다.">
      {/* 페이지 전체 섹션 - 로딩 클래스 포함 */}
      <section id="todayPage" className={todayPageClass}>
        <h2>오늘의 추천 영상입니다.</h2>

        {/* todayText 배열 데이터를 map()으로 반복 렌더링 */}
        {todayText.map((today, key) => (
          <div className="today__inner" key={key}>
            {/* 썸네일 이미지 + 클릭 시 영상 페이지로 이동 */}
            <div className="today__thumb play__icon">
              <Link to={today.page}>
                <img src={today.img} alt={today.title} />
              </Link>
            </div>

            {/* 텍스트 정보 출력 */}
            <div className="today__text">
              <span className="today">today!</span>

              {/* 영상 제목 (클릭 시 상세 페이지로 이동) */}
              <h3 className="title">
                <Link to={today.page}>{today.title}</Link>
              </h3>

              {/* 영상 설명 */}
              <p className="desc">{today.desc}</p>

              {/* 채널 정보 및 업로드 날짜 */}
              <div className="info">
                <span className="author">
                  {/* 채널 상세 페이지로 이동하는 링크 */}
                  <Link to={`/channel/${today.channelId}`}>{today.author}</Link>
                </span>
                <span className="date">{today.date}</span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </Main>
  );
};

export default Today;
