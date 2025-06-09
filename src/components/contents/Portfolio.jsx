// 포트폴리오 관련 영상 목록 데이터 import
import { portfolioText } from "../../data/portfolio";
// React Router의 페이지 이동을 위한 Link 컴포넌트 import
import { Link } from "react-router-dom";

// Portfolio 컴포넌트 정의
const Portfolio = () => {
  return (
    // 전체 섹션 래퍼 (id는 스타일링이나 앵커용으로 사용)
    <section id="portfolio">
      {/* 섹션 제목 */}
      <h2>포트폴리오 만드는 방법을 공유합니다.</h2>

      {/* 비디오 썸네일 카드 리스트 영역 */}
      <div className="video__inner">
        {/* portfolioText 배열을 map으로 순회하며 각 영상 렌더링 */}
        {portfolioText.map((video, key) => (
          <div className="video" key={key}>
            <div className="video__thumb play__icon">
              {/* 썸네일 클릭 시 해당 영상 상세 페이지로 이동 */}
              <Link to={`/video/${video.videoId}`}>
                <img src={video.img} alt={video.title} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
