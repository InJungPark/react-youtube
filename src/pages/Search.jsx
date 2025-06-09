// React 훅 import : 상태 관리 및 사이드 이펙트 처리
import { useEffect, useState } from "react";
// URL 파라미터(searchId)를 가져오기 위한 React Router 훅
import { useParams } from "react-router-dom";
// 페이지 공통 레이아웃 컴포넌트
import Main from "../components/section/Main";

// 검색 결과 영상 카드를 렌더링하는 컴포넌트
import VideoSearch from "../components/video/VideoSearch";
// 유튜브 API 호출 함수
import { fetchFromAPI } from "../utils/api";

// Search 컴포넌트 정의 - 유튜브 검색 결과 페이지
const Search = () => {
  // URL에서 검색어(searchId) 추출
  const { searchId } = useParams();

  // 상태값 선언
  const [videos, setVideos] = useState([]);              // 영상 리스트
  const [nextPageToken, setNextPageToken] = useState(null); // 다음 페이지 토큰
  const [loading, setLoading] = useState(true);          // 로딩 상태

  // 검색어가 바뀔 때마다 실행
  useEffect(() => {
    setVideos([]);           // 기존 영상 초기화
    fetchVidoes(searchId);   // 새 검색어로 영상 검색
    setLoading(true);        // 로딩 시작
  }, [searchId]);

  // 유튜브 API에서 영상 검색 데이터 불러오는 함수
  const fetchVidoes = (query, pageToken = "") => {
    fetchFromAPI(`search?part=snippet&type=video&q=${query}&pageToken=${pageToken}`)
      .then((data) => {
        setNextPageToken(data.nextPageToken); // 다음 페이지를 위한 토큰 저장
        setVideos((preVideos) => [...preVideos, ...data.items]); // 기존 데이터에 추가
        setLoading(false); // 로딩 완료
      })
      .catch((error) => {
        console.log("Error fetching data", error); // 오류 로그
        setLoading(false);
      });
  };

  // "더 보기" 버튼 클릭 시 다음 페이지 영상 불러오기
  const handleLoadMore = () => {
    if (nextPageToken) {
      fetchVidoes(searchId, nextPageToken);
    }
  };

  // 로딩 여부에 따른 CSS 클래스 설정
  const searchPageClass = loading ? "isLoading" : "isLoaded";

  return (
    // 공통 레이아웃(Main) 사용 + SEO 설명 추가
    <Main title="유투브 검색" description="유튜브 검색 결과 페이지입니다.">
      <section id="searchPage" className={searchPageClass}>
        {/* 검색 키워드 제목 */}
        <h2>
          <em>{searchId}</em> 검색 결과입니다.
        </h2>

        {/* 검색된 영상 목록 렌더링 */}
        <div className="video__inner search">
          <VideoSearch videos={videos} />
        </div>

        {/* 다음 페이지가 있을 경우 '더 보기' 버튼 표시 */}
        <div className="video__more">
          {nextPageToken && <button onClick={handleLoadMore}>더 보기</button>}
        </div>
      </section>
    </Main>
  );
};

export default Search;
