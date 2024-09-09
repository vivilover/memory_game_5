import { createPortal } from 'react-dom';
import ModalContent from './ModalContent.jsx';

const ReplayModal = ({ showModal, setShowModal }) => {
  return (
    <> 
      {/* <button onClick={() => setShowModal(true)}>Show Modal thru Portal</button> */}
      {showModal && createPortal(
        <ModalContent onClose={() => setShowModal(false)} />,
        document.body
      )}
    </>
  )
}

export default ReplayModal;