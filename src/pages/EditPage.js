import React, { Fragment } from 'react';
import PageWrapper from '../hoc/PageWrapper/PageWrapper';
import EditorPane from '../components/edit/EditorPane/EditorPane';

const EditPage = () => {
    return (
        <Fragment>
            <PageWrapper>
                <EditorPane />
            </PageWrapper>
        </Fragment>
    );
};

export default EditPage;