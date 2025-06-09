// React 훅 import : 상태(state) 관리 및 생명주기 처리용
import { useEffect, useState } from "react";
// React Router의 페이지 이동용 컴포넌트 import
import { Link } from "react-router-dom";

// Swiper 스타일 및 기능 모듈 import
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Swiper 기능 import
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Developer 컴포넌트 정의
// props :
// - videos : 추천 개발자 영상 데이터 배열
// - title : 섹션 제목
// - id : section 구분용 HTML id 속성
const Developer = ({ videos, title, id }) => {
  // 페이지 진입 시 로딩 효과를 위한 상태값
  const [loading, setLoading] = useState(true);

  // 마운트 후 400ms 뒤 로딩 종료
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 400);
  }, []);

  // 로딩 여부에 따라 CSS 클래스 설정
  const developerClass = loading ? "isLoading" : "isLoaded";

  return (
    // 전체 섹션 래퍼 (애니메이션 클래스 포함)
    <section id={id} className={developerClass}>
      {/* 섹션 제목 */}
      <h2>{title}</h2>

      {/* Swiper 슬라이더 영역 */}
      <div className="developer__inner">
        <Swiper
          slidesPerView={4} // 기본 슬라이드 수
          spaceBetween={15} // 슬라이드 간격
          navigation={true} // 좌우 네비게이션 버튼 활성화
          autoplay={{
            // 자동 슬라이드 기능 설정
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            // 반응형 설정
            640: { slidesPerView: 5, spaceBetween: 15 },
            768: { slidesPerView: 6, spaceBetween: 15 },
            1024: { slidesPerView: 7, spaceBetween: 15 },
            1240: { slidesPerView: 8, spaceBetween: 15 },
            1640: { slidesPerView: 9, spaceBetween: 20 },
            2000: { slidesPerView: 10, spaceBetween: 20 },
          }}
          modules={[Autoplay, Navigation]} // Swiper 모듈 적용
          className="mySwiper"
        >
          {/* 개발자 목록 렌더링 */}
          {videos.map((developer, key) => (
            <SwiperSlide key={key}>
              <div className="developer">
                <div className="developer__img play__icon">
                  {/* 썸네일 클릭 시 해당 채널 상세로 이동 */}
                  <Link to={`/channel/${developer.channelId}`}>
                    <img src={developer.img} alt={developer.name} />
                  </Link>
                </div>
                <div className="developer__info">
                  {/* 개발자 이름 텍스트 */}
                  <Link to={`/channel/${developer.channelId}`}>{developer.name}</Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Developer;
