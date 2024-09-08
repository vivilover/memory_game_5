import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  gap: 15px;
`

const ImageContainer = ({children, handleClick}) => {
  return (
    <Wrapper onClick={handleClick}>{children}</Wrapper>
  )
}

export default ImageContainer;