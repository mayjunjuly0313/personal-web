import styled from 'styled-components';
import Card from '../components/Sections/Projects/Card';
import { awardsData } from '../data/awardsData';
import TitleWrapper from '../styles/TitleWrapper';

function Awards() {
  return (
    <Wrapper>
      <TitleWrapper>Awards</TitleWrapper>
      <ContentWrapper>
        {awardsData.map((val, idx) => {
          return (
            <Card key={idx} title={val.title} imageSrc={val.image} description={val.awards} linkUrl={val.devpostUrl} />
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
  grid-template-columns: repeat(3, minmax(0, 390px));
  grid-template-rows: repeat(2, minmax(0, 300px));

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

export default Awards;
