import React from 'react';
import styled from 'styled-components';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';

function Home() {
  return (
    <Wrapper>
      Hello, I'm{' '}
      <span style={{ color: '#e31b6d', display: 'contents', fontWeight: 600 }}>
        Seok Jun Hong
      </span>
      .<br /> I'm a full-stack developer.
      <ButtonWrapper>
        View my Work
        <span>
          <ArrowForwardOutlinedIcon />
        </span>
      </ButtonWrapper>
    </Wrapper>
  );
}
const ButtonWrapper = styled.button`
  color: #fff;
  padding: 12px 50px 12px 20px;
  margin-top: 20px;
  font-size: 22px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  transition: background 0.5s;
  border: none;

  -webkit-box-shadow: inset 0px 0px 0px 2px #fff;
  -moz-box-shadow: inset 0px 0px 0px 2px #fff;
  box-shadow: inset 0px 0px 0px 2px #fff;

  &:hover {
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    background: #04c2c9;
  }
  span {
    transition: 0.3s;
    position: absolute;
    top: 13px;
    right: 16px;
  }
  &:hover span {
    transform: rotate(90deg);
  }
`;

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
`;

export default Home;
