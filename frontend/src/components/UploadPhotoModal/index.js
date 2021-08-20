import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import UploadPage from '../UploadPage';


function UploadPageModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* <button onClick={() => setShowModal(true)}><i class="fa fa-cloud-upload"></i></button> */}
      <i onClick={() => setShowModal(true)} class="fa fa-cloud-upload"></i>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <UploadPage />
        </Modal>
      )}
    </>
  );
}

export default UploadPageModal;