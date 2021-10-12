import styled from 'styled-components';
import Button from '../../../styles/Button';

interface CardProps {
  imageSrc: string;
  title: string;
  description: string[];
  linkUrl: string;
}

function Card({ imageSrc, title, description, linkUrl }: CardProps) {
  return (
    <Wrapper>
      <img src={`${process.env.PUBLIC_URL}/images/${imageSrc}`} alt={imageSrc} />
      <h2>{title}</h2>
      <p>{description}</p>
      <div>
        <Button padding="12px 20px" color="#616161">
          <a href={linkUrl} target="_blank" rel="noopener noreferrer">
            LEARN MORE
          </a>
        </Button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
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
    width: 100%;
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
    width: 100%;
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
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default Card;
