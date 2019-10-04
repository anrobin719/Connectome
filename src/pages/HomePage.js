import React, { Fragment } from "react";
import PageWrapper from "../hoc/PageWrapper/PageWrapper";
import Banner from "../components/home/Banner/Banner";
import TagContents from "../components/home/TagContents/TagContents";
import HomeContents from "../components/home/HomeContents/HomeContents";
import HomeAbout from "../components/home/HomeAbout/HomeAbout";

const HomePage = () => {
  return (
    <Fragment>
      <Banner />
      <PageWrapper>
        <TagContents />
        <HomeContents />
      </PageWrapper>
      <HomeAbout />
    </Fragment>
  );
};

export default HomePage;
