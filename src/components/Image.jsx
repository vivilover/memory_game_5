import styled from "styled-components";

const Wrapper = styled.img`
  width: 150px;
  height: 150px;
`;

const Image = ({ imageUrl, handleClick }) => {
  return <Wrapper src={imageUrl} onClick={handleClick} />;
};

export default Image;
