import react from 'react';
import styled from 'styled-components';

function Skills() {
  return (
    <Wrapper>
      <h2>Skills</h2>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
  justify-content: start;
  border: 2px solid green;

  * {
    text-align: center;
  }
`;

export default Skills;
