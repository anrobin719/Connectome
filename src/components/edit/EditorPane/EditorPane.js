import React, { Component } from 'react';
import EditorBody from '../EditorBody/EditorBody';
import Button from '../../UI/Button/Button';

import classes from './EditorPane.scss';

    // <PostCard
    //     id="id123"
    //     title="제목입니다"
    //     sub="부연설명입니다. 블록체인/암호화폐 개발 컨설팅 및 공유해 드립니다. 기존 비트코인, 이더리움 등"
    //     body="post body"
    //     img="https://images.unsplash.com/photo-1554731617-8eafa9975365?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80"
    //     publishedDate="2019-08-22"
    //     tags="#개발 #UX/UI #IOS"
    // />

class EditorPane extends Component {
    state = {
        selectedFile: null
    }

    handleChange = event => {

    }

    fileSelectedHandler = e => {
        this.setState({
            selectedFile: e.target.file[0]
        });
    }

    render() {
        const postData = {
            id: "id123",
            title: "제목입니다",
            sub: "부연설명입니다. 블록체인/암호화폐 개발 컨설팅 및 공유해 드립니다. 기존 비트코인, 이더리움 등",
            body: `같은 생명을 장식하는 꽃이 밝은 공자는 곳으로 것이다. 이것이야말로 길을 천자만홍이 영락과 간에 끓는다. 원질이 풍부하게 투명하되 피부가 것이다. 품고 가치를 열락의 이상은 끓는다. 크고 밥을 우리 넣는 예가 생의 것이다. 생명을 귀는 따뜻한 것이다. 방지하는 작고 같이 있는가? 노래하며 속잎나고, 불러 찾아 그들은 청춘을 생명을 봄바람이다. 따뜻한 보이는 산야에 뿐이다. 어디 피가 듣기만 힘있다.`,
            img: "https://images.unsplash.com/photo-1554731617-8eafa9975365?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80",
            publishedDate: "2019-08-22",
            tags: "개발, UX/UI, IOS"
        }
    
        return (
            <div className={classes.EditorPane}>
                <form>
                    <div className={classes.titleBox}>
                        <input
                            className={classes.titleInput}
                            placeholder="제목을 입력하세요"
                            name="title"
                            // value={postData.title}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className={classes.subBox}>
                        <input
                            className={classes.subInput}
                            placeholder="간단한 소개를 입력하세요"
                            name="sub"
                            // value={postData.sub}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className={classes.tagsBox}>
                        <input
                            name="tags"
                            placeholder="교환할 내 재능"
                            // value={postData.tags}
                            onChange={this.handleChange}
                        />
                        <input
                            name="tags"
                            placeholder="교환하기 원하는 재능"
                            // value={postData.tags}
                            onChange={this.handleChange}
                        />
                    </div>
                    
                    <div className={classes.bodyBox}>
                        <EditorBody />
                    </div>

                    <div className={classes.imgBox}>
                        <div>재능 사진 업로드</div>
                        <input type="file" onChange={this.fileSelectedHandler} />
                    </div>

                    <div className={classes.btnBox}>
                        <Button theme="point-big">저장하기</Button>
                    </div>

                </form>
            </div>
        );

    }
};

export default EditorPane;