import styled from 'styled-components';

const BackgroundWrapper = styled.div`
  position: fixed;
  z-index: 1;
  left: 0%;
  top: 0%;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(144, 198, 149, 0.4);
`;
const ModalWrapper = styled.div`
  background-color: rgba(210, 215, 211, 0.9);
  margin: 20% auto;
  padding: 20px;
  border: 2px solid green;
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
`;
const Button = styled.button`
  width: 10em;
  height: 3em;
  font-size: 1.4em;
`;
const Message = styled.div`
  flex: 1 0 100%;
  font-size: 1.8em;
  text-align: center;
`;

const ModalContent = ({ onClose, handleStateChange, replay }) => {
  return (
    <BackgroundWrapper>
      <ModalWrapper>
        <Message>You cleared this stage! Now choose: </Message>
        <Button
          onClick={() => {
            replay();
            onClose();
          }}
        >
          repetición
        </Button>
        <Button onClick={() => handleStateChange('main')}>
          volver a main
        </Button>
      </ModalWrapper>
    </BackgroundWrapper>
  );
};

export default ModalContent;
