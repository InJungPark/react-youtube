// GSAP 관련 강의 데이터 import
import { gsapText } from "../../data/gsap";
// 페이지 이동을 위한 React Router의 Link 컴포넌트 import
import { Link } from "react-router-dom";

// Gsap 컴포넌트 정의
const Gsap = () => {
  return (
    // 전체 섹션 래퍼, id는 스타일링 또는 페이지 앵커로 활용 가능
    <section id="gsap">
      {/* 섹션 제목 */}
      <h2>GSAP 패럴랙스 효과를 하고 싶다면!</h2>

      {/* 비디오 썸네일 리스트 출력 영역 */}
      <div className="video__inner">
        {/* gsapText 배열을 map으로 순회하며 썸네일 카드 생성 */}
        {gsapText.map((video, key) => (
          <div className="video" key={key}>
            <div className="video__thumb play__icon">
              {/* 썸네일 클릭 시 영상 상세 페이지로 이동 */}
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

export default Gsap;
