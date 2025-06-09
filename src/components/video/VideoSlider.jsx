// React 훅 import
import { useEffect, useState } from "react";
// React Router의 링크 기능 import
import { Link } from "react-router-dom";

// Swiper 라이브러리 import
import { Swiper, SwiperSlide } from "swiper/react";
// 기본 스타일과 네비게이션 스타일 import
import "swiper/css";
import "swiper/css/navigation";

// Swiper의 모듈 중 Navigation 기능 import
import { Navigation } from "swiper/modules";

// props: id(섹션 ID), title(섹션 제목), videos(비디오 목록)
const VideoSlider = ({ id, title, videos }) => {
  // 로딩 상태 관리
  const [loading, setLoading] = useState(true);

  // 컴포넌트 마운트 시 500ms 후 로딩 해제
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  // 로딩 여부에 따라 클래스 변경
  const videoClass = loading ? "isLoading" : "isLoaded";

  return (
    // 섹션 영역 (id는 props로 전달받음)
    <section id={id} className={videoClass}>
      {/* 섹션 제목 출력 */}
      <h2>{title}</h2>

      {/* 비디오 슬라이더 영역 */}
      <div className="video__slider">
        <Swiper
          slidesPerView={1} // 기본: 한 슬라이드씩 보여줌
          spaceBetween={20} // 슬라이드 간 간격
          navigation={true} // 화살표 네비게이션 사용
          modules={[Navigation]} // Navigation 모듈 적용
          className={`mySwiper-${id}`} // 슬라이더별 고유 클래스
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 }, // 작은 화면
            768: { slidesPerView: 3, spaceBetween: 20 }, // 태블릿
            1024: { slidesPerView: 4, spaceBetween: 20 }, // 데스크탑
            1600: { slidesPerView: 5, spaceBetween: 20 }, // 대형 화면
          }}
        >
          {/* 영상 데이터 배열을 순회하며 슬라이드 생성 */}
          {videos.map((video, key) => (
            <SwiperSlide key={key}>
              <div className="video">
                <div className="video__thumb play__icon">
                  {/* 썸네일 클릭 시 해당 비디오 페이지로 이동 */}
                  <Link to={`/video/${video.videoId}`}>
                    <img src={video.img} alt={video.title} />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default VideoSlider;
