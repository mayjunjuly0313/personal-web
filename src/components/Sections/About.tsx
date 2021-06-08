import React from 'react';
import styled from 'styled-components';
import TitleWrapper from '../../styles/TitleWrapper';
import ExpTimeline from './About/ExpTimeline';
import Intro from './About/Intro';
import Skills from './About/Skills';

function About() {
  return (
    <Wrapper>
      <TitleWrapper>ABOUT</TitleWrapper>
      <MainContents>
        <Intro />
        <ExpTimeline />
        <Skills />
      </MainContents>
    </Wrapper>
  );
}

const MainContents = styled.div`
  height: 100vh;
  width: 100vw;
  min-height: 768px;
  display: flex;
  justify-content: center;
  align-items: start;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export default About;
