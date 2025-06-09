// 정적 영상 데이터 import
import { youtubeText } from "../../data/youtube";
// React Router의 페이지 이동용 컴포넌트 import
import { Link } from "react-router-dom";

// Youtube 컴포넌트 정의
const Youtube = () => {
  return (
    // 유튜브 섹션 전체를 감싸는 요소
    <section id="youtube">
      {/* 섹션 제목 */}
      <h2>지금 이 코딩을 영상으로</h2>

      {/* 영상 썸네일 리스트 출력 영역 */}
      <div className="video__inner">
        {/* youtubeText 배열을 map으로 순회하며 각 비디오 렌더링 */}
        {youtubeText.map((video, key) => (
          <div className="video" key={key}>
            <div className="video__thumb play__icon">
              {/* 썸네일 클릭 시 비디오 상세 페이지로 이동 */}
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

export default Youtube;
