import styled from 'styled-components';

const HeaderWrapper = styled.header`
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  font-size: 1.5em;
`

const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
`


const Header = ({ currScore, highScore }) => {
  return (
    <HeaderWrapper>
      <div>Memory Lorem Ipsum</div>
      <ScoreContainer>
        <div>Score: {currScore}</div>
        <div>High Score: {highScore}</div>
      </ScoreContainer>
    </HeaderWrapper>
  );
}

export default Header;