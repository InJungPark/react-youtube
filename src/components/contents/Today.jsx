// React 훅 import : 상태 관리와 생명주기 처리용
import { useEffect, useState } from "react";
// 페이지 이동을 위한 React Router의 Link 컴포넌트 import
import { Link } from "react-router-dom";

// Today 컴포넌트 정의
// props :
// - videos : 오늘의 추천 영상 배열 (보통 1개의 객체만 전달됨)
// - id : 섹션 구분용 ID 값
const Today = ({ videos, id }) => {
  // 로딩 상태를 위한 state (초기 true → 300ms 후 false)
  const [loading, setLoading] = useState(true);

  // 컴포넌트 마운트 시 로딩 상태 변경 (부드러운 진입 효과용)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  // 로딩 여부에 따라 CSS 클래스 설정
  const todayClass = loading ? "isLoading" : "isLoaded";

  return (
    <section id={id} className={todayClass}>
      <div className="today__inner">
        {/* 썸네일 이미지 (클릭 시 영상 페이지로 이동) */}
        <div className="today__thumb play__icon">
          <Link to={videos[0].page}>
            <img src={videos[0].img} alt={videos[0].title} />
          </Link>
        </div>

        {/* 텍스트 정보 영역 */}
        <div className="today__text">
          <span className="today">today!</span>

          {/* 제목 */}
          <h3 className="title">
            <Link to={videos[0].page}>{videos[0].title}</Link>
          </h3>

          {/* 설명 */}
          <p className="desc">{videos[0].desc}</p>

          {/* 작성자 및 날짜 */}
          <div className="info">
            <span className="author">
              <Link to={`/channel/${videos[0].channelId}`}>{videos[0].author}</Link>
            </span>
            <span className="date">{videos[0].date}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Today;
