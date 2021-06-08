import styled from 'styled-components';
import {
  dataAndML,
  devOpsAndTools,
  languages,
  libAndFrameworks,
} from '../../../data/IconDict';

interface IconType {
  name: string;
  src: string;
}

interface IconDict {
  [key: string]: IconType[];
}

function Skills() {
  const genIcons = (iconList: IconDict) =>
    Object.keys(iconList).map((item, i) => {
      if (iconList === languages) {
        return (
          <CategoryWrapper>
            <h4>{item}</h4>
            <IconWrapper>
              {iconList[item].map((icon) => (
                <img src={icon.src} alt={icon.name} />
              ))}
            </IconWrapper>
          </CategoryWrapper>
        );
      } else {
        return (
          <CategoryWrapper>
            <IconWrapper>
              {iconList[item].map((icon) => (
                <img src={icon.src} alt={icon.name} />
              ))}
            </IconWrapper>
          </CategoryWrapper>
        );
      }
    });

  return (
    <Wrapper>
      <h2>Skills</h2>
      <h3>Programming Languages</h3>
      {genIcons(languages)}
      <h3>Libraries & Frameworks</h3>
      {genIcons(libAndFrameworks)}
      <h3>Data & ML</h3>
      {genIcons(dataAndML)}
      <h3>DevOps & Tools</h3>
      {genIcons(devOpsAndTools)}
    </Wrapper>
  );
}

const CategoryWrapper = styled.div`
  padding-left: 20px;
`;

const IconWrapper = styled.div`
  display: block;

  img {
    width: auto;
    height: auto;
    margin: 0 3px 3px 3px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
  justify-content: start;

  h2 {
    text-align: center;
    margin: 15px 0;
  }

  h3 {
    margin-bottom: 15px;
  }

  h4 {
    margin: 0px 0 5px 0;
  }

  li {
    list-style: none;
  }

  ul {
    padding-left: 20px;
    text-align: left;
  }
`;

export default Skills;
