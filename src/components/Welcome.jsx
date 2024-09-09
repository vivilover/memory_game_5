import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
`;

const Button = styled.div`
  padding: 10px 15px;
  border: none;
  text-decoration: none;
  background-color: #04aa6d;
  color: white;
  text-align: center;
  font-size: 16px;
`;

const Welcome = ({ handleStateChange }) => {
  return (
    <>
      <div>Elegir:</div>
      <Wrapper>
        <Button onClick={() => handleStateChange("facil")}>
          facil
        </Button>
        <Button onClick={() => handleStateChange("intermedia")}>
          intermedia
        </Button>
        <Button onClick={() => handleStateChange("deficil")}>deficil</Button>
      </Wrapper>
    </>
  );
};

export default Welcome;
