import styled from "styled-components";

const Wrapper = styled.button`
  padding: 10px 15px;
  border: none;
  text-decoration: none;
  background-color: #E0B0FF;
  color: black;
  text-align: center;
  font-size: 16px;
  border-radius: 5px;
`;

const Button = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Button;
