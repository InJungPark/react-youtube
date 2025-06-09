// axios : HTTP 요청을 보내기 위한 라이브러리 import
import axios from "axios";

// RapidAPI를 통해 접근하는 YouTube API의 기본 URL
export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

// axios 요청 시 사용할 옵션 (쿼리 파라미터 및 헤더 정보 포함)
const options = {
  params: {
    // 최대 가져올 영상 수를 48개로 지정
    maxResults: "48",
  },
  headers: {
    // 환경변수에서 API 키를 불러와 헤더에 추가 (보안 유지 목적)
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    // RapidAPI에서 제공하는 유튜브 API 호스트 이름
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

// API를 호출하고 결과를 반환하는 함수
export const fetchFromAPI = async (url) => {
  // 요청을 보낼 최종 URL은 BASE_URL과 매개변수 url을 조합한 것
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  // 받아온 응답 데이터만 리턴
  return data;
};
