// 웹디자인기능사 강의 영상 데이터 import (정적 JSON)
import { webdText } from "../../data/webd";
// React Router의 페이지 이동용 Link import
import { Link } from "react-router-dom";

// Webd 컴포넌트 정의
const Webd = () => {
  return (
    // 전체 섹션 영역 (id는 스타일 구분용)
    <section id="webd">
      {/* 섹션 제목 */}
      <h2>웹디자인기능사 준비는 이걸로!</h2>

      {/* 영상 썸네일 카드 리스트 영역 */}
      <div className="video__inner">
        {/* webdText 배열을 순회하며 각 영상 썸네일 렌더링 */}
        {webdText.map((video, key) => (
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

export default Webd;
