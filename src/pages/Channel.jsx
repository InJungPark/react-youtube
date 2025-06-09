// React 훅 import: 상태 관리 및 생명주기 처리
import { useEffect, useState } from "react";
// React Router 훅 import: URL 파라미터(channelId) 가져오기
import { useParams } from "react-router-dom";
// API 호출 함수 import
import { fetchFromAPI } from "../utils/api";

// 공통 섹션 레이아웃 컴포넌트 import
import Main from "../components/section/Main";

// 아이콘 컴포넌트 import (구독자, 영상 수, 조회수 표시용)
import { CiBadgeDollar } from "react-icons/ci";
import { CiMedal } from "react-icons/ci";
import { CiRead } from "react-icons/ci";

// 채널의 영상 리스트를 렌더링하는 컴포넌트
import VideoSearch from "../components/video/VideoSearch";

// Channel 컴포넌트 정의
const Channel = () => {
  // URL에서 채널 ID 추출
  const { channelId } = useParams();

  // 상태값들 선언
  const [channelDetail, setChannelDetail] = useState(); // 채널 정보
  const [channelVideo, setChannelVideo] = useState([]); // 채널 영상 리스트
  const [loading, setLoading] = useState(true);         // 로딩 상태
  const [nextPageToken, setNextPageToken] = useState(null); // 더 보기 위한 토큰

  // 컴포넌트 마운트 또는 channelId 변경 시 실행
  useEffect(() => {
    const fetchResults = async () => {
      try {
        // 채널 기본 정보 요청
        const data = await fetchFromAPI(`channels?part=snippet&id=${channelId}`);
        setChannelDetail(data.items[0]);

        // 채널의 영상 목록 요청
        const videosData = await fetchFromAPI(`search?channelId=${channelId}&part=snippet%2Cid&order=date`);
        setChannelVideo(videosData?.items);
        setNextPageToken(videosData?.nextPageToken);
      } catch (error) {
        console.log("Eroor fetching data", error);
      } finally {
        setLoading(false); // 요청 완료 후 로딩 해제
      }
    };
    fetchResults();
  }, [channelId]);

  // "더 보기" 버튼 클릭 시 다음 페이지 영상 추가 로드
  const loadMoreVideos = async () => {
    if (nextPageToken) {
      const videosData = await fetchFromAPI(
        `search?channelId=${channelId}&part=snippet%2Cid&order=date&pageToken=${nextPageToken}`
      );
      setChannelVideo((prevVideos) => [...prevVideos, ...videosData.items]);
      setNextPageToken(videosData?.nextPageToken);
    }
  };

  // 로딩 상태에 따라 적용할 클래스
  const channelPageClass = loading ? "isLoading" : "isLoaded";

  return (
    // 공통 레이아웃 Main 컴포넌트 사용
    <Main title="유튜브 채널" description="유튜브 채널페이지입니다.">
      <section id="channel" className={channelPageClass}>
        {/* 데이터가 있을 때만 렌더링 */}
        {channelDetail && (
          <div className="channel__inner">
            {/* 채널 상단 배너 이미지 */}
            <div
              className="channel__header"
              style={{ backgroundImage: `url(${channelDetail.brandingSettings.image.bannerExternalUrl})` }}
            >
              {/* 채널 썸네일 */}
              <div className="circle">
                <img src={channelDetail.snippet.thumbnails.high.url} alt={channelDetail.snippet.title} />
              </div>
            </div>

            {/* 채널 이름, 설명, 통계 정보 */}
            <div className="channel__info">
              <h3 className="title">{channelDetail.snippet.title}</h3>
              <p className="desc">{channelDetail.snippet.description}</p>
              <div className="info">
                <span>
                  <CiBadgeDollar /> {/* 구독자 수 */}
                  {channelDetail.statistics.subscriberCount}
                </span>
                <span>
                  <CiMedal /> {/* 업로드된 영상 수 */}
                  {channelDetail.statistics.videoCount}
                </span>
                <span>
                  <CiRead /> {/* 채널 조회수 */}
                  {channelDetail.statistics.viewCount}
                </span>
              </div>
            </div>

            {/* 영상 목록 출력 영역 */}
            <div className="channel__video video__inner search">
              <VideoSearch videos={channelVideo} />
            </div>

            {/* 더 보기 버튼: 다음 페이지 토큰 있을 경우만 노출 */}
            <div className="channel__more">
              {nextPageToken && <button onClick={loadMoreVideos}>더 보기</button>}
            </div>
          </div>
        )}
      </section>
    </Main>
  );
};

export default Channel;
