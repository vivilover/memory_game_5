import { createPortal } from 'react-dom';
import ModalContent from './ModalContent.jsx';

const ReplayModal = ({
  showModal,
  setShowModal,
  handleStateChange,
  replay
}) => {
  return (
    <>
      {showModal &&
        createPortal(
          <ModalContent
            onClose={() => setShowModal(false)}
            handleStateChange={handleStateChange}
            replay={replay}
          />,
          document.body
        )}
    </>
  );
};

export default ReplayModal;
