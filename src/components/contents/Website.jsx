// 웹표준 강의용 영상 데이터(JSON) import
import { websiteText } from "../../data/website";
// React Router의 Link 컴포넌트 import (비디오 상세 페이지로 이동)
import { Link } from "react-router-dom";

// Website 컴포넌트 정의
const Website = () => {
  return (
    // 전체 섹션을 감싸는 section 요소 (id="website" → 스타일링용)
    <section id="website">
      {/* 섹션 제목 */}
      <h2>웹표준 사이트 만들기 기초 다지기</h2>

      {/* 영상 썸네일 목록을 담는 영역 */}
      <div className="video__inner">
        {/* websiteText 배열을 map으로 순회하며 썸네일 카드 렌더링 */}
        {websiteText.map((video, key) => (
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

export default Website;
