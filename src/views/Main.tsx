import { useRef } from 'react';
import styled from 'styled-components';
import Section from '../styles/Section';
import About from './About';
import Footer from './Footer';
import Home from './Home';
import Projects from './Projects';

function Main() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const handleNavigate: () => void = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section>
      <Wrapper>
        <HomeWrapper>
          <Home handleNavigate={handleNavigate} />
        </HomeWrapper>
        <About ref={aboutRef} />
        <Projects />
        {/* <Blogs />
        <Contact /> */}
        <Footer />
      </Wrapper>
    </Section>
  );
}

const HomeWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  color: #616161;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Main;
