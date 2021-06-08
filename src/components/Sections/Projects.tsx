import React from 'react';
import styled from 'styled-components';
import TitleWrapper from '../../styles/TitleWrapper';
import Card from './Projects/Card';

function Projects() {
  return (
    <Wrapper>
      <TitleWrapper>Projects</TitleWrapper>
      <ContentWrapper>
        <Card
          imageSrc='play.png'
          projectTitle='Coholy'
          techStack={['Python', 'FastAPI']}
        />
        <Card
          imageSrc='play.png'
          projectTitle='Coholy'
          techStack={['Python', 'FastAPI']}
        />
        <Card
          imageSrc='play.png'
          projectTitle='Coholy'
          techStack={['Python', 'FastAPI']}
        />
        <Card
          imageSrc='play.png'
          projectTitle='Coholy'
          techStack={['Python', 'FastAPI']}
        />
        <Card
          imageSrc='play.png'
          projectTitle='Coholy'
          techStack={['Python', 'FastAPI']}
        />
        <Card
          imageSrc='play.png'
          projectTitle='Coholy'
          techStack={['Python', 'FastAPI']}
        />
      </ContentWrapper>
    </Wrapper>
  );
}

const ContentWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  min-height: 700px;

  display: grid;
  grid-template-columns: repeat(3, fit-content(390px));
  grid-template-rows: repeat(3, fit-content(300px));

  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  background: #f5f5f5;
`;

export default Projects;
