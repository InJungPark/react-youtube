// React 관련 핵심 라이브러리 import
import React from "react";
import ReactDOM from "react-dom/client";

// 우최상위 앱 컴포넌트 App.jsx import
import App from "./App";

// 전역 스타일(SCSS) 파일 import
import "./assets/scss/style.scss";

// HTML의 'root' 아이디 요소를 찾아서 React 애플리케이션의 마운트 지점으로 설정
const root = ReactDOM.createRoot(document.getElementById("root"));

// 실제로 화면에 컴포넌트를 렌더링
root.render(
  // StrictMode는 개발 모드에서 잠재적인 문제를 알려주는 React의 기능
  <React.StrictMode>
    <App />  {/* App 컴포넌트를 루트로 렌더링 */}
  </React.StrictMode>
);
