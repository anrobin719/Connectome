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
                        <BannerContents>
                            <BannerError>404 ERROR</BannerError>
                            죄송합니다. 요청하신 페이지를 찾을 수 없습니다.
                            <ButtonDiv>
                                <Button theme="outline-white">홈으로 돌아가기</Button>
                            </ButtonDiv>
                        </BannerContents>
                    </PageWrapper>
                </Banner>

                <PageWrapper>
                    
                </PageWrapper>
            {/* </ThemeProvider> */}
        </Fragment>
    );
};

const Banner = styled.div`
    height: 60vh;
    width: 100%;
    background-color: #353470;
    color: white;
    position: relative;
`;

const BannerContents = styled.div`
    position: absolute;
    top: 10.6rem;
    font-size: 2rem;
    font-weight: 300;
    box-sizing: border-box;
`;

const BannerError = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    font-size: 4rem;
    margin-bottom: .3rem;
`;

const ButtonDiv = styled.div`
    display: inline-block;
    box-sizing: border-box;
    margin-left: 6rem;
`;


export default NotFoundPage;