import styled from 'styled-components';
import { Timeline } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core';
import ExpTimelineNode from './ExpTimelineNode';
import { expData } from '../../../data/expData';

const timelineStyles = makeStyles(() => ({
  timeline: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    padding: '0',
    fontFamily: 'Raleway',
  },
}));

function ExpTimeline() {
  const styles = timelineStyles();
  return (
    <Wrapper>
      <DescWrapper>
        <Timeline className={styles.timeline}>
          {expData.map((exp) => (
            <ExpTimelineNode
              key={exp.key}
              startDate={exp.startDate}
              endDate={exp.endDate}
              title={exp.title}
              companyName={exp.companyName}
              imageUrl={exp.imageUrl}
              description={exp.description}
            />
          ))}
        </Timeline>
      </DescWrapper>
    </Wrapper>
  );
}

const DescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  justify-content: start;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Wrapper = styled.div`
  width: 40%;
  height: 100%;
  padding: 0 0 6vh 0;
`;
export default ExpTimeline;
