import React from 'react'
import {Modal} from 'react-bootstrap'

function PopupModal({children, showModal, setShowModal})
{
   return (
      <Modal
         show={showModal}
         onHide={() => setShowModal(false)}
         size="md"
         aria-labelledby="contained-modal-title-vcenter"
         centered
      >
         <Modal.Header
            className='pe-4'
            closeButton
         >
            <Modal.Title id="contained-modal-title-vcenter">
               Reset password
            </Modal.Title>
         </Modal.Header>
         {
            children
         }
      </Modal>

   )
}

export default PopupModal
