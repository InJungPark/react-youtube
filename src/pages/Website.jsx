import { useEffect, useState } from "react";
import Main from "../components/section/Main";

import VideoCard from "../components/video/VideoCard";
import { websiteText } from "../data/website";

const Website = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  const websitePageClass = loading ? "isLoading" : "isLoaded";

  return (
    <Main title="웹표준 사이트" description="웹표준 사이트 튜토리얼 강의입니다.">
      <section id="websitePage" className={websitePageClass}>
        <h2>웹사이트의 기초는 이 강의로~</h2>
        <div className="video__inner">
          <VideoCard videos={websiteText} />
        </div>
      </section>
    </Main>
  );
};

export default Website;
