import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import PageWrapper from "../../../hoc/PageWrapper/PageWrapper";
import Button from "../../UI/Button/Button";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import classes from "./SearchBanner.scss";

class SearchBanner extends Component {
  state = {
    myTalent: "",
    yourTalent: ""
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  switchTalent = () => {
    this.setState({
      myTalent: this.state.yourTalent,
      yourTalent: this.state.myTalent
    });
  };

  submitHandler = e => {
    e.preventDefault();
    const { history } = this.props;
    if (
      this.state.myTalent.length !== 0 &&
      this.state.yourTalent.length !== 0
    ) {
      history.push(`/tag/${this.state.yourTalent}/${this.state.myTalent}`);
    }
  };

  render() {
    return (
      <div className={classes.SearchBanner}>
        <PageWrapper>
          <div className={classes.searchBox}>
            {/* 배너 검색창 + 검색 버튼 박스 */}
            <form
              className={classes.searchBoxForm}
              onSubmit={this.submitHandler}
              autoComplete="off"
            >
              {/* 배너 검색창 */}
              <div className={classes.inputBox}>
                {/* 내 재능 input */}
                <div className={classes.input}>
                  <label>내 재능</label>
                  <div>
                    <select
                      value={this.state.myTalent}
                      name="myTalent"
                      onChange={e => this.onChangeHandler(e)}
                    >
                      <option selected>교환할 당신의 재능을 선택하세요.</option>
                      <option value="개발">개발</option>
                      <option value="디자인">디자인</option>
                      <option value="음악">음악</option>
                      <option value="요리">요리</option>
                      <option value="언어">언어</option>
                      <option value="스타트업">스타트업</option>
                      <option value="기타">기타</option>
                    </select>
                  </div>
                </div>
                {/* switch button */}
                <div className={classes.betweenInput}>
                  <label>&nbsp;</label>
                  <div
                    className={classes.switchBtn}
                    onClick={this.switchTalent}
                  >
                    <button type="button">〈 〉</button>
                  </div>
                </div>
                {/* 교환 재능 input */}
                <div className={classes.input}>
                  <label>교환 재능</label>
                  <div>
                    <select
                      value={this.state.yourTalent}
                      name="yourTalent"
                      onChange={e => this.onChangeHandler(e)}
                    >
                      <option selected>
                        교환 받기 원하는 재능을 선택하세요.
                      </option>
                      <option value="개발">개발</option>
                      <option value="디자인">디자인</option>
                      <option value="음악">음악</option>
                      <option value="요리">요리</option>
                      <option value="언어">언어</option>
                      <option value="스타트업">스타트업</option>
                      <option value="기타">기타</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* 재능 검색 버튼 */}
              <div className={classes.btnBox}>
                <Button theme="point">
                  재능 검색
                  <div className={classes.searchIcon}>
                    <ArrowForwardIosIcon style={{ fontSize: 14 }} />
                  </div>
                </Button>
              </div>
            </form>
          </div>
        </PageWrapper>
      </div>
    );
  }
}

export default withRouter(SearchBanner);
