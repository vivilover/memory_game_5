import styled from "styled-components";

const Wrapper = styled.img`
  width: 150px;
  height: 150px;
`;

const Image = ({ imageUrl }) => {
  return <Wrapper src={imageUrl} />;
};

export default Image;
