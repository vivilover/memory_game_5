import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  gap: 15px;
`

const ImageContainer = ({children}) => {
  return (
    <Wrapper>{children}</Wrapper>
  )
}

export default ImageContainer;