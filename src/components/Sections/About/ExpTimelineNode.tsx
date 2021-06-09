import {
  TimelineItem,
  TimelineOppositeContent,
  TimelineDot,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
} from '@material-ui/lab';
import { makeStyles, Paper, Typography } from '@material-ui/core';
import styled from 'styled-components';

interface TimeLineNodeOption {
  startDate: string;
  endDate: string;
  title: string;
  companyName: string;
  imageUrl: string;
  description: string[];
}

const timelineStyles = makeStyles(() => ({
  oppositeContent: {
    flex: 0,
    padding: '3px 5px 5px 5px',
    minWidth: '80px',
    fontFamily: 'Raleway',
  },
  item: {
    padding: '0',
  },
  content: {
    fontFamily: 'Raleway',
    color: '#616161',
    padding: '0 10px 0 10px',
  },
}));

function ExpTimelineNode({
  startDate,
  endDate,
  title,
  companyName,
  imageUrl,
  description,
}: TimeLineNodeOption) {
  const styles = timelineStyles();
  return (
    <TimelineItem className={styles.item}>
      {' '}
      <TimelineOppositeContent className={styles.oppositeContent}>
        <Typography variant='body2' color='textSecondary'>
          ~ {endDate}
          <br />
          {startDate}
        </Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot className={styles.item}>
          <CompanyIcon src={imageUrl} />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Paper elevation={3}>
          <Typography variant='h6' component='h2' className={styles.content}>
            {title}
          </Typography>
          <Typography
            variant='subtitle1'
            component='h2'
            className={styles.content}
          >
            {companyName}
          </Typography>
          <Typography variant='body2' className={styles.content}>
            {description.map((line) => {
              return (
                <>
                  {line}
                  <br />
                </>
              );
            })}
          </Typography>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
}

const CompanyIcon = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: 'block';
`;

export default ExpTimelineNode;
