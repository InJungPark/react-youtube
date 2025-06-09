// React Router의 Link 컴포넌트 import (페이지 이동용)
import { Link } from "react-router-dom";

// VideoSearch 컴포넌트 정의
// props로 전달받은 videos 배열을 기반으로 영상 카드 UI 렌더링
const VideoSearch = ({ videos }) => {
  return (
    <>
      {/* 영상 목록을 map으로 순회하며 개별 영상 카드 생성 */}
      {videos.map((video, index) => (
        <div className="video" key={index}>
          {/* 썸네일 영역 (배경 이미지로 적용) */}
          <div className="video__thumb play__icon">
            <Link
              to={`/video/${video.id.videoId}`} // 클릭 시 영상 상세 페이지로 이동
              style={{ backgroundImage: `url(${video.snippet.thumbnails.high.url})` }} // 썸네일 이미지
            ></Link>
          </div>

          {/* 영상 정보 영역 */}
          <div className="video__info">
            {/* 영상 제목 */}
            <div className="title">
              <Link to={`/video/${video.id.videoId}`}>{video.snippet.title}</Link>
            </div>

            {/* 채널 정보 (작성자) */}
            <div className="info">
              <span className="author">
                <Link to={`/channel/${video.snippet.channelId}`}>{video.snippet.channelTitle}</Link>
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default VideoSearch;
