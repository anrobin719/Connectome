import React from "react";
import classes from "./HomeContents.scss";
import HomePostCards from "../../../containers/home/HomePostCards/HomePostCards";

const HomeContents = () => {
  return (
    <div className={classes.HomeContents}>
      <h4 className={classes.title}>최신 등록 재능</h4>
      <p className={classes.sub}>방금 새로 등록된 재능들을 둘러보세요.</p>
      <HomePostCards />

      {/* <h4 className={classes.title}>커넥텀 바로 시작하기</h4>
            <p className={classes.sub}>재능교환으로 연결되어 다양하고 깊이있는 경험을 시작해보세요.</p> */}
    </div>
  );
};

export default HomeContents;
