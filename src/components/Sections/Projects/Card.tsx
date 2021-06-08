import styled from 'styled-components';
import Button from '../../../styles/Button';

interface CardProps {
  imageSrc: string;
  projectTitle: string;
  techStack: string[];
}

function Card({ imageSrc, projectTitle, techStack }: CardProps) {
  return (
    <Wrapper>
      <img
        src={`${process.env.PUBLIC_URL}/images/${imageSrc}`}
        alt={imageSrc}
      />
      <h2>{projectTitle}</h2>
      <p>{techStack.join(' / ')}</p>
      <div>
        <Button padding='12px 20px' color='#616161'>
          LEARN MORE
        </Button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 300px;
  width: 390px;
  position: relative;

  img {
    height: 100%;
    width: 100%;
    opacity: 1;
    transition: opacity 1s;
  }
  &:hover img {
    transition: opacity 1s;
    opacity: 0;
  }

  h2 {
    display: inline-block;
    position: absolute;
    left: 50%;
    top: 40px;
    text-align: center;
    transform: translateX(-50%);

    opacity: 0;
    transition: opacity 1s;
  }
  p {
    display: inline-block;
    position: absolute;
    left: 50%;
    top: 80px;
    text-align: center;
    transform: translateX(-50%);

    opacity: 0;
    transition: opacity 1s;
  }

  &:hover h2,
  &:hover p,
  &:hover div {
    opacity: 1;
    transition: opacity 1s;
  }

  div {
    display: inline-block;
    position: relative;
    left: 50%;
    bottom: 120px;
    transform: translateX(-50%);

    opacity: 0;
    transition: opacity 1s;
  }
`;

export default Card;
