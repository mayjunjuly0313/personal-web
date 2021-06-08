import react from 'react';
import styled from 'styled-components';
import {
  TimelineItem,
  Timeline,
  TimelineOppositeContent,
  TimelineDot,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
} from '@material-ui/lab';
import { makeStyles, Paper, Typography } from '@material-ui/core';
import ExpTimelineNode from './ExpTimelineNode';

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
    <DescWrapper>
      <Timeline className={styles.timeline}>
        <ExpTimelineNode
          startDate='2021/5'
          endDate='Present'
          title='Software Development Intern'
          companyName='Tenzer Center, Depauw University'
          imageUrl={process.env.PUBLIC_URL + 'images/depauw-logo.png'}
          description={['-']}
        />
        <ExpTimelineNode
          startDate='2021/2'
          endDate='2021/5'
          title='Web Development Intern'
          companyName='Tenzer Center, Depauw University'
          imageUrl={process.env.PUBLIC_URL + 'images/depauw-logo.png'}
          description={[
            'Web application for the annual DePauw art exhibition.',
            'Shows student artworks on the map with descriptions and real-time user location. ',
          ]}
        />
        <ExpTimelineNode
          startDate='2021/1'
          endDate='2021/2'
          title='Software Development Intern'
          companyName='Seeann Solution'
          imageUrl={process.env.PUBLIC_URL + 'images/seeann-logo.png'}
          description={[
            'Developed a Web Application for managing EEG brainwave data.',
            'Requires users to sign-up and sign-in to the website.',
            'Allowed users to upload, delete brainwave data files and select a file and play, pause real-time graphs of 64 channels.',
            'Users can select the channels and handle the frequency of the data.',
            '-	Technologies and Skills: React.js, Node.js – Express, MySQL, Git.',
          ]}
        />
        <ExpTimelineNode
          startDate='2020/3'
          endDate='2020/7'
          title='Software Development Intern'
          companyName='Seeann Solution'
          imageUrl={process.env.PUBLIC_URL + 'images/seeann-logo.png'}
          description={[
            'Developed GUI application for analyzing EEG brainwave data.',
            'Had continuous meetings with the clients to check the progress of the requested features.',
            'The application allows users to select a brainwave data file and show graphs of the data.',
            'Users can play the graphs of 64 channels with different settings such as frequency, filters, and time range.',
            '-	Technologies and Skills: Python and C++ (MNE-python, PyQtGraph, Qt).',
          ]}
        />
      </Timeline>
    </DescWrapper>
  );
}

const DescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100%;

  justify-content: start;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default ExpTimeline;
