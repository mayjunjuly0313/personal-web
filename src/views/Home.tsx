import styled from 'styled-components';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import Particles from 'react-tsparticles';
import Button from '../styles/Button';
import { particlesConfig } from '../styles/config/particlesConfig';

interface Props {
  handleNavigate: () => void;
}

function Home({ handleNavigate }: Props) {
  return (
    <Wrapper>
      <div style={{ position: 'absolute', zIndex: -1, backgroundColor: '#0f1016' }}>
        <Particles height="100vh" width="100vw" params={particlesConfig} />
      </div>
      <DescWrapper>
        Hello, I'm <span style={{ color: '#e31b6d', display: 'contents', fontWeight: 600 }}>Jun Hong</span>
        .<br /> I'm a Software Engineer.
        <div>
          <Button padding="12px 50px 12px 20px" color="#fff" onClick={handleNavigate}>
            View my Work
            <span>
              <ArrowForwardOutlinedIcon />
            </span>
          </Button>
        </div>
      </DescWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  color: #616161;
`;

const DescWrapper = styled.div`
  color: #fff;
  width: 100%;
  height: 100%;
  font-size: 42px;
  line-height: 48px;
  z-index: 0;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;

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
