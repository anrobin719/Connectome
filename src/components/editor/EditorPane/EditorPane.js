import React, { Component } from "react";
import EditorBody from "../EditorBody/EditorBody";
import Button from "../../UI/Button/Button";

import classes from "./EditorPane.scss";

class EditorPane extends Component {
  inputChangedHandler = e => {
    const { changeInput } = this.props;
    const { name, value } = e.target;
    changeInput({ name, value });
  };

  htmlChangedHandler = ({ name, value }) => {
    const { changeInput } = this.props;
    changeInput({ name, value });
  };

  fileSelectedHandler = e => {
    console.log(e.target.files[0]);

    if (e.target.files != null || e.target.files[0] != null) {
      const { changeFile } = this.props;
      const { name } = e.target;

      let reader = new FileReader();
      reader.onload = e => {
        this.refImg.setAttribute("src", e.target.result);
        changeFile(name, e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  render() {
    const {
      title,
      sub,
      myTalent,
      yourTalent,
      body,
      img,
      submitPost,
      isEdit
    } = this.props;

    return (
      <div className={classes.EditorPane}>
        {/* 전체 form */}
        <form autoComplete="off" onSubmit={submitPost}>
          {/* 타이틀 입력 박스 */}
          <div className={classes.titleBox}>
            <input
              type="text"
              name="title"
              value={title}
              className={classes.titleInput}
              placeholder="제목을 입력하세요"
              onChange={this.inputChangedHandler}
            />
          </div>

          {/* 소개 입력 박스 */}
          <div className={classes.subBox}>
            <input
              type="text"
              name="sub"
              value={sub}
              className={classes.subInput}
              placeholder="간단한 소개를 입력하세요"
              onChange={this.inputChangedHandler}
            />
          </div>

          {/* <input list="browsers" name="browser"/>
                    <datalist id="browsers">
                        <option value="Internet Explorer"/>
                        <option value="Firefox"/>
                        <option value="Chrome"/>
                        <option value="Opera"/>
                        <option value="Safari"/>
                    </datalist> */}

          {/* 재능 입력 박스 */}
          <div className={classes.tagsBox}>
            <input
              type="text"
              name="myTalent"
              value={myTalent}
              placeholder="교환할 내 재능"
              onChange={this.inputChangedHandler}
            />
            <input
              type="text"
              name="yourTalent"
              value={yourTalent}
              placeholder="교환하기 원하는 재능"
              onChange={this.inputChangedHandler}
            />
          </div>

          {/* 본문 입력 박스 */}
          <div className={classes.bodyBox}>
            <EditorBody
              htmlChangedHandler={this.htmlChangedHandler}
              body={body}
            />
          </div>

          {/* 사진 업로드 박스 */}
          <div className={classes.imgBox}>
            <div>
              <input
                style={{ display: "none" }}
                type="file"
                name="img"
                onChange={this.fileSelectedHandler}
                ref={ref => (this.refInput = ref)}
              />
              <div>
                <h4>재능 사진 업로드</h4>
                <button type="button" onClick={() => this.refInput.click()}>
                  사진 고르기
                </button>
              </div>
              <div className={classes.imgContainer}>
                <img
                  ref={ref => (this.refImg = ref)}
                  alt="seleted_image"
                  src={img}
                  align="middle"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </div>

          {/* submit 버튼 박스 */}
          <div className={classes.btnBox}>
            <Button theme="point-big" type="submit">
              {isEdit ? "수정" : "저장"}하기
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default EditorPane;
