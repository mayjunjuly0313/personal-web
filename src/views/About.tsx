import React, { ForwardedRef, forwardRef } from 'react';
import styled from 'styled-components';
import TitleWrapper from '../styles/TitleWrapper';
import ExpTimeline from '../components/Sections/About/ExpTimeline';
import Intro from '../components/Sections/About/Intro';
import Skills from '../components/Sections/About/Skills';

const About = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div ref={ref}>
      <Wrapper>
        <TitleWrapper>ABOUT</TitleWrapper>
        <MainContents>
          <Intro />
          <ExpTimeline />
          <Skills />
        </MainContents>
      </Wrapper>
    </div>
  );
});

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
