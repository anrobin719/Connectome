import React from 'react';
import TagCard from './TagCard/TagCard';
import classes from './TagContents.scss';

const TagContents = () => {
    return (
        <div className={classes.TagContents}>
            {/* home 화면일때만 다음 문장 표시 */}
            <h4>어떤 성장이 필요하신가요?</h4>

            <div className={classes.tagContentsBox}>
                <TagCard
                    link="/list/development"
                    image="https://images.unsplash.com/photo-1516424716439-aeccb78c41c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                    title="개발" />
                <TagCard
                    link="/list/design"
                    image="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9]&auto=format&fit=crop&w=1000&q=80"
                    title="디자인" />
                <TagCard
                    link="/list/language"
                    image="https://images.unsplash.com/photo-1505073033382-af5d8c3cdb7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                    title="언어" />
                <TagCard
                    link="/list/music"
                    image="https://images.unsplash.com/photo-1488376739361-ed24c9beb6d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80"
                    title="음악" />
            </div>
        </div>
    );
};

export default TagContents;