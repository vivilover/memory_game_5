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
  font-size: 1.7em;
`;

const Welcome = ({ handleStateChange }) => {
  return (
    <>
      <div>Choose Difficulty:</div>
      <Wrapper>
        <Button onClick={() => handleStateChange("facil")}>
          Easy
        </Button>
        <Button onClick={() => handleStateChange("intermedia")}>
          Intermediate
        </Button>
        <Button onClick={() => handleStateChange("deficil")}>Hard</Button>
      </Wrapper>
    </>
  );
};

export default Welcome;
