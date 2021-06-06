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
  height: 80%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid yellow;
`;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  min-width: 1024px;
  min-height: 900px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

export default About;
