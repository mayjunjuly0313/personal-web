import React from 'react';
import styled from 'styled-components';
import SectionWrapper from '../styles/SectionWrapper';
import Home from '../components/Sections/Home';
import Blogs from '../components/Sections/Blogs';
import Contact from '../components/Sections/Contact';
import About from '../components/Sections/About';
import Projects from '../components/Sections/Projects';

function Main() {
  return (
    <>
      <MainWrapper>
        <HomeWrapper>
          <Home />
        </HomeWrapper>
        <SectionWrapper>
          <About />
        </SectionWrapper>
        <SectionWrapper>
          <Projects />
        </SectionWrapper>
        <SectionWrapper>
          <Blogs />
        </SectionWrapper>
        <SectionWrapper>
          <Contact />
        </SectionWrapper>
      </MainWrapper>
    </>
  );
}

const HomeWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  color: #616161;
`;

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default Main;
