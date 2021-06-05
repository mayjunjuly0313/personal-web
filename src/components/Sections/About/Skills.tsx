import react from 'react';
import styled from 'styled-components';

function Skills() {
  return <SkillsWrapper>skills</SkillsWrapper>;
}

const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
  justify-content: center;
  border: 2px solid green;
`;

export default Skills;
