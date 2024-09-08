import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-flexbox;
`

const ReplayModal = () => {
  return (
    <Wrapper>
      <button>repetición</button>
      <button>volver a principal</button>
    </Wrapper>
  )
}

export default ReplayModal;