import styled from 'styled-components';

const Button = styled.button<{ padding: string; color: string }>`
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  transition: background 0.5s;
  border: none;

  -webkit-box-shadow: inset 0px 0px 0px 2px ${(props) => props.color};
  -moz-box-shadow: inset 0px 0px 0px 2px ${(props) => props.color};
  box-shadow: inset 0px 0px 0px 2px ${(props) => props.color};

  &:hover {
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    background: #04c2c9;
  }
`;

export default Button;
