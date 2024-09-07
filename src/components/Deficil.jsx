import Button from "./Button";

const Deficil = ({ handleStateChange }) => {
  return (
    <>
      {/* <button onClick={() => handleStateChange("main")}>main btn</button> */}
      <Button handleStateChange={handleStateChange}>Main</Button>
      <div onClick={() => console.log("clicked div")}>Deficil</div>
    </>
  );
};

export default Deficil;
