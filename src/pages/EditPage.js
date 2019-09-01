import React, { Fragment } from 'react';
import PageWrapper from '../hoc/PageWrapper/PageWrapper';
import EditorPaneContainer from '../containers/editor/EditorPaneContainer';

const EditPage = () => {
    return (
        <Fragment>
            <PageWrapper>
                <EditorPaneContainer />
            </PageWrapper>
        </Fragment>
    );
};

export default EditPage;