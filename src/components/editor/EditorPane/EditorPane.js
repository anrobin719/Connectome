import React, { Component } from 'react';
import EditorBody from '../EditorBody/EditorBody';
import Button from '../../UI/Button/Button';

import classes from './EditorPane.scss';

class EditorPane extends Component {
    inputChangedHandler = e => {
        const { changeInput } = this.props;
        const { name, value } = e.target;
        changeInput({name, value});
    }

    htmlChangedHandler = ({name, value}) => {
        const { changeInput } = this.props;
        changeInput({name, value});
    }

    fileSelectedHandler = (e) => {
        console.log(e.target.files[0]);
    
        if (e.target.files != null || e.target.files[0] != null) {
            const { changeFile } = this.props;
            const { name } = e.target;

            let reader = new FileReader();
            reader.onload = (e) => {
                this.refImg.setAttribute('src', e.target.result);
                changeFile(name, e.target.result);
            }
            reader.readAsDataURL(e.target.files[0]);
        }
    }

    render() {
        // const postData = {
        //     id: "id123",
        //     title: "제목입니다",
        //     sub: "부연설명입니다. 블록체인/암호화폐 개발 컨설팅 및 공유해 드립니다. 기존 비트코인, 이더리움 등",
        //     body: `같은 생명을 장식하는 꽃이 밝은 공자는 곳으로 것이다. 이것이야말로 길을 천자만홍이 영락과 간에 끓는다. 원질이 풍부하게 투명하되 피부가 것이다. 품고 가치를 열락의 이상은 끓는다. 크고 밥을 우리 넣는 예가 생의 것이다. 생명을 귀는 따뜻한 것이다. 방지하는 작고 같이 있는가? 노래하며 속잎나고, 불러 찾아 그들은 청춘을 생명을 봄바람이다. 따뜻한 보이는 산야에 뿐이다. 어디 피가 듣기만 힘있다.`,
        //     img: "https://images.unsplash.com/photo-1554731617-8eafa9975365?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80",
        //     publishedDate: "2019-08-22",
        //     tags: "개발, UX/UI, IOS"
        // }
        const { title, sub, myTalent, yourTalent, body, img, submitPost } = this.props;

        return (
            <div className={classes.EditorPane}>
                <form autoComplete="off" onSubmit={submitPost}>
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
                    
                    <div className={classes.bodyBox}>
                        <EditorBody
                            htmlChangedHandler={this.htmlChangedHandler}
                            body={body}
                        />
                    </div>

                    <div className={classes.imgBox}>
                        <div>재능 사진 업로드</div>
                        <input
                            style={{display: 'none'}}
                            type="file"
                            name="img"
                            onChange={this.fileSelectedHandler}
                            ref={(ref) => this.refInput=ref}
                        />
                        <button type="button" onClick={() => this.refInput.click()}>사진 고르기</button>
                        <div className={classes.imgContainer}>
                            <img ref={(ref) => this.refImg=ref} alt="seleted_image" src={img} align="middle" width="100%" height="100%"/>
                        </div>
                    </div>

                    <div className={classes.btnBox}>
                        <Button theme="point-big" type="submit">저장하기</Button>
                    </div>

                </form>
            </div>
        );

    }
};

export default EditorPane;