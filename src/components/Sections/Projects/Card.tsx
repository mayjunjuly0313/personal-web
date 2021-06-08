import styled from 'styled-components';

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
    </Wrapper>
  );
}
// ${process.env.PUBLIC_URL} / images/ ${(props) => props.imageSrc};
const Wrapper = styled.div`
  height: 300px;
  width: 300px;
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
    position: absolute;
    width: 100%;
    height: 100%;
    top: 20px;
    text-align: center;

    opacity: 0;
    transition: opacity 1s;
  }
  p {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 60px;
    text-align: center;

    opacity: 0;
    transition: opacity 1s;
  }

  &:hover h2,
  &:hover p {
    opacity: 1;
    transition: opacity 1s;
  }
`;

export default Card;
