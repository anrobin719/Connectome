import React from "react";

import classes from "./HomeAbout.scss";
import PageWrapper from "../../../hoc/PageWrapper/PageWrapper";

const HomeAbout = () => {
  return (
    <div className={classes.about}>
      <PageWrapper>
        <h4 className={classes.aboutTitle}>connectome!</h4>
        <p className={classes.aboutSub}>
          커넥텀(connectome)은 사람과 사람을 연결합니다.
          <br />
          각종 분야의 원하는 재능을 자신의 재능과 교환할 수 있도록
          <br />
          다리 역할을 하는 무료 서비스입니다.
          <br />
          <br />
          재능을 가진 친구와 1:1로 연결되어
          <br />
          배움의 효율성을 증대시킬 수 있고,
          <br />
          새로운 관계를 형성할 수 있습니다.
          <br />
          <br />
          당신의 성장을 극대화 시키는 즐거운 만남을
          <br />
          커넥텀에서 시작해보세요!
        </p>
      </PageWrapper>
    </div>
  );
};

export default HomeAbout;
