// Footer 컴포넌트 정의
const Footer = () => {
  return (
    // footer 요소 정의
    // role="contentinfo"는 웹 접근성을 위한 속성으로, 이 영역이 사이트 정보임을 명시
    <footer id="footer" role="contentinfo">
      {/* 이메일 링크: 클릭 시 메일 클라이언트 실행 */}
      <a href="mailto:goonbamss@sister.com" rel="noopener noreferrer">
        goonbamss@sister.com
      </a>
    </footer>
  );
};

export default Footer;
