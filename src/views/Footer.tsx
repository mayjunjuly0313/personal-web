import styled from 'styled-components';

function Footer() {
  return (
    <Wrapper>
      <p>SEOK JUN HONG ©2021</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0f1016;
  width: 100%;
  height: 70px;
`;

export default Footer;
