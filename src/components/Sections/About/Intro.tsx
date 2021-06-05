import { Box, Container } from '@material-ui/core';
import { fontStyle, fontWeight } from '@material-ui/system';
import react from 'react';
import styled from 'styled-components';
import Icon from '@material-ui/core/Icon';
import Links from './Links';

function Intro() {
  return (
    <IntroWrapper>
      <Box
        height='50%'
        display='flex'
        justifyContent='center'
        alignItems='center'
        border='1px solid '
      >
        <ProfileImage />
      </Box>
      <Box
        height='40%'
        display='flex'
        flexDirection='column'
        justifyContent='start'
        alignItems='center'
        textAlign='center'
        padding='0 10%'
      >
        <h2>Hello!</h2>
        <div style={{ lineHeight: '25px' }}>
          I'm a Student Developer who loves to learn. <div />I have serious
          passion for full-stack: especially Backend Dev. <div />
          Trying to learn better ways to develop a software and have been
          studying Domain Driven Deisgn, Clean Architecture, and Test Driven
          Development.
        </div>
      </Box>
      <Box
        height='10%'
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        padding='0 35%'
      >
        <Links />
      </Box>
    </IntroWrapper>
  );
}

const ProfileImage = styled.img.attrs({
  src: `${process.env.PUBLIC_URL}/images/profile-image.jpg`,
})`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  display: 'block';
`;

const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
  justify-content: center;
  border: 2px solid green;
`;

export default Intro;
