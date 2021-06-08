import React from 'react';
import styled from 'styled-components';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';

import Button from '../../styles/Button';

function Home() {
  return (
    <Wrapper>
      Hello, I'm{' '}
      <span style={{ color: '#e31b6d', display: 'contents', fontWeight: 600 }}>
        Seok Jun Hong
      </span>
      .<br /> I'm a full-stack developer.
      <div>
        <Button padding='12px 50px 12px 20px' color='#fff'>
          View my Work
          <span>
            <ArrowForwardOutlinedIcon />
          </span>
        </Button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: #fff;
  width: 100%;
  height: 100%;
  font-size: 42px;
  line-height: 48px;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: grey;

  div {
    margin-top: 20px;
    position: relative;
  }
  span {
    transition: 0.3s;
    position: absolute;
    top: 13px;
    right: 16px;
  }
  div:hover span {
    transform: rotate(90deg);
  }
`;

export default Home;
