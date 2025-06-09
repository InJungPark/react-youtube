// React 훅 import : 상태 관리와 사이드이펙트 처리
import { useState, useEffect } from "react";
// React Router : URL 파라미터를 가져오고, 링크 이동 처리
import { Link, useParams } from "react-router-dom";
// 유튜브 API 호출 함수 import
import { fetchFromAPI } from "../utils/api";

// 공통 섹션 레이아웃 컴포넌트
import Main from "../components/section/Main";
// 유튜브 영상 재생용 플레이어 컴포넌트
import ReactPlayer from "react-player";

// 아이콘 컴포넌트 (뷰 수, 좋아요, 댓글 아이콘)
import { CiChat1 } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { CiRead } from "react-icons/ci";

// 비디오 상세 페이지 컴포넌트
const Video = () => {
  // URL에서 videoId 파라미터 추출 (예: /video/abc123 → abc123)
  const { videoId } = useParams();

  // 영상 상세 정보를 저장할 상태값 (초기값: null)
  const [videoDetail, setVideoDetail] = useState(null);

  // 컴포넌트가 마운트되거나 videoId가 변경될 때마다 실행
  useEffect(() => {
    // YouTube API에서 해당 videoId에 대한 정보 요청
    fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`).then((data) => {
      console.log(data); // 디버깅용 콘솔 출력
      setVideoDetail(data.items[0]); // 첫 번째 결과를 상태에 저장
    });
  }, [videoId]);

  return (
    // Main 컴포넌트를 통해 전체 페이지 타이틀/설명 구성
    <Main title="유튜브 비디오 영상" description="유튜브 비디오 영상을 볼 수 있습니다.">
      <section id="videoViewPage">
        {/* API 호출 완료 후에만 렌더링 (null 방지) */}
        {videoDetail && (
          <div className="video__view">
            {/* 영상 재생 영역 */}
            <div className="video__play">
              <ReactPlayer
                playing={true} // 자동 재생
                url={`https://www.youtube.com/watch?v=${videoId}`} // 영상 링크
                width="100%"
                height="100%"
                style={{ position: "absolute", top: 0, left: 0 }}
              />
            </div>

            {/* 영상 정보 영역 */}
            <div className="video__info">
              {/* 영상 제목 */}
              <h2 className="video__title">{videoDetail.snippet.title}</h2>

              {/* 채널 정보 및 통계 */}
              <div className="video__channel">
                <div className="id">
                  {/* 채널 클릭 시 해당 채널 페이지로 이동 */}
                  <Link to={`/channel/${videoDetail.snippet.channelId}`}>
                    {videoDetail.snippet.channelTitle}
                  </Link>
                </div>

                {/* 통계 정보 : 조회수, 좋아요 수, 댓글 수 */}
                <div className="count">
                  <span className="view">
                    <CiRead />
                    {videoDetail.statistics.viewCount}
                  </span>
                  <span className="like">
                    <CiStar />
                    {videoDetail.statistics.likeCount}
                  </span>
                  <span className="comment">
                    <CiChat1 />
                    {videoDetail.statistics.commentCount}
                  </span>
                </div>
              </div>

              {/* 영상 설명 텍스트 */}
              <div className="video__desc">
                {videoDetail.snippet.description}
              </div>
            </div>
          </div>
        )}
      </section>
    </Main>
  );
};

export default Video;
