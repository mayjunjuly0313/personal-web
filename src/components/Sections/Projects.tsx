import React from 'react';
import styled from 'styled-components';
import { projectsData } from '../../data/projectsData';
import TitleWrapper from '../../styles/TitleWrapper';
import Card from './Projects/Card';

function Projects() {
  return (
    <Wrapper>
      <TitleWrapper>Projects</TitleWrapper>
      <ContentWrapper>
        {projectsData.map((val, ind) => {
          return (
            <Card
              projectTitle={val.title}
              imageSrc={val.image}
              techStack={val.techStacks}
            />
          );
        })}
      </ContentWrapper>
    </Wrapper>
  );
}

const ContentWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  min-height: 700px;

  display: grid;
  grid-template-columns: repeat(3, 390px);
  grid-template-rows: repeat(3, 300px);

  justify-content: center;
  align-items: center;
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
