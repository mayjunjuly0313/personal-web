import React from 'react';
import styled from 'styled-components';
import TitleWrapper from '../../styles/TitleWrapper';
import ExpTimeline from './About/ExpTimeline';
import Intro from './About/Intro';
import Skills from './About/Skills';

function About() {
  return (
    <>
      <PageWrapper>
        <TitleWrapper>ABOUT</TitleWrapper>
        <MainContents>
          <Intro />
          <ExpTimeline />
          <Skills />
        </MainContents>
      </PageWrapper>
    </>
  );
}

const MainContents = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid yellow;
`;

const PageWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

export default About;
