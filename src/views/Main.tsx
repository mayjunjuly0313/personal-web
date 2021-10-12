import { useRef } from 'react';
import styled from 'styled-components';
import Section from '../styles/Section';
import About from './About';
import Awards from './Awards';
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
        <Home handleNavigate={handleNavigate} />
        <About ref={aboutRef} />
        <Projects />
        {/* <Blogs />
        <Contact /> */}
        <Awards />
        <Footer />
      </Wrapper>
    </Section>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Main;
