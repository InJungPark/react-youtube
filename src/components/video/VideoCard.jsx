// React Router의 Link 컴포넌트 import (비디오 상세 페이지로 이동할 수 있게 함)
import { Link } from "react-router-dom";

// VideoCard 컴포넌트 정의
// props: videos 배열 (정적 JSON 데이터에서 전달)
const VideoCard = ({ videos }) => {
  return (
    <>
      {/* 전달받은 videos 배열을 순회하며 카드 렌더링 */}
      {videos.map((video, key) => (
        <div className="video" key={key}>
          {/* 썸네일 영역 (클릭 시 해당 영상 페이지로 이동) */}
          <div className="video__thumb play__icon">
            <Link to={`/video/${video.videoId}`}>
              <img src={video.img} alt={video.title} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default VideoCard;
