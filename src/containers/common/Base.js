import React from "react";
import SignInModalContainer from "../modal/SignInModalContainer";
import SignUpModalContainer from "../modal/SignUpModalContainer";
import AskSignInModalContainer from "../modal/AskSignInModalContainer";
import ApplyModalContainer from "../modal/ApplyModalContainer";

const Base = () => {
  return (
    <div>
      <SignInModalContainer />
      <SignUpModalContainer />
      <AskSignInModalContainer />
      <ApplyModalContainer />
    </div>
  );
};

export default Base;
