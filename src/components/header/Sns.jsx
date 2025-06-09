// SNS 링크 정보가 담긴 JSON 데이터 import
import { snsLink } from "../../data/header";

// Sns 컴포넌트 정의
const Sns = () => {
  return (
    <div className="header__sns">
      <ul>
        {/* snsLink 배열을 순회하며 SNS 아이콘 및 링크 생성 */}
        {snsLink.map((sns, key) => (
          <li key={key}>
            <a
              href={sns.url} // 외부 SNS 링크
              target="_blank" // 새 탭에서 열기
              rel="noopener noreferrer" // 보안 및 성능을 위한 속성
              aria-label={sns.title} // 접근성을 위한 대체 텍스트
            >
              <span>{sns.icon}</span> {/* 아이콘 출력 (React 컴포넌트 형태로 전달됨) */}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sns;
