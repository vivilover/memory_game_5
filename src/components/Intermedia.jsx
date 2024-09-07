import Button from "./Button";

const Intermedia = ({ handleStateChange }) => {
  return (
    <>
      <Button handleStateChange={handleStateChange}>
        Volver a Principal
      </Button>
      <div>Intermedia</div>
    </>
  );
};

export default Intermedia;
