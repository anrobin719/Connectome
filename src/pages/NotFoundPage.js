import React, { Fragment } from 'react';
import PageWrapper from '../hoc/PageWrapper/PageWrapper';
import styled from 'styled-components';
import Button from '../components/UI/Button/Button';

// const theme = {
//     cPrimary: "#3a4bca",
//     cPrimaryDark: "#353470",
//     cPrimaryLight: "#8b9edb",
//     cSecondary: "#ee4e32",
//     cSecondaryDark: "#b93e28",
//     cSecondaryLight: "#f36850",
// };

const NotFoundPage = () => {
    return (
        <Fragment>
            {/* <ThemeProvider theme={theme}> */}
                <Banner>
                    <PageWrapper>
                        <ContentsBox>
                            <Contents>
                                <ErrorText>404 ERROR</ErrorText>
                                죄송합니다. 요청하신 페이지를 찾을 수 없습니다.
                                <ButtonDiv>
                                    <Button to="/" extraStyle={{height: '2.8rem', width: 'rem'}} theme="outline-white-big">홈으로 돌아가기</Button>
                                </ButtonDiv>
                            </Contents>
                        </ContentsBox>
                    </PageWrapper>
                </Banner>
            {/* </ThemeProvider> */}
        </Fragment>
    );
};

const Banner = styled.div`
    height: 60vh;
    width: 100%;
    background-color: #353470;
    color: white;
`;

const ContentsBox = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Contents = styled.div`
    width: 100%;
    font-size: 2rem;
    font-weight: 300;
    box-sizing: border-box;
    position: relative;
`;

const ErrorText = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    font-size: 4rem;
    margin-bottom: .3rem;
`;

const ButtonDiv = styled.div`
    display: inline-block;
    position: absolute;
    right: 0;
    bottom: .1rem;
`;


export default NotFoundPage;