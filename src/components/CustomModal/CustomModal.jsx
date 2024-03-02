import {Col, Row} from 'react-bootstrap';
import './CustomModal.css';
import instructorImg from '../../assets/imgs/instructor3.png';
import parentChildImg from '../../assets/imgs/parent-child-5.png';
import {useNavigate} from 'react-router-dom';


function Backdrop({show, close})
{
   return (
      <div
         className={`modal-backdrop ${show ? "open" : null} position-fixed`}
         onClick={close}
      >
      </div>
   )
}

function Overlay({children, show})
{
   return (
      <div className={`
      custom-modal 
      ${show ? "open" : "close"}
      position-absolute 
      top-50 
      start-50`}
      >
         {children}
      </div>
   )
}

export default function CustomModal({show, close})
{
   const navigate = useNavigate();

   return (
      <>
         <Backdrop show={show} close={close} />
         <Overlay show={show}>
            <div className='modal-body h-100 px-4'>
               <Row className='justify-content-between my-auto h-100 gap-3'>
                  <Col
                     className="
                           instructor-box
                           col-12
                           text-center
                           d-flex 
                           flex-column
                           justify-content-around
                           align-items-center
                           flex-grow-1"
                     lg="5"
                     onClick={() => navigate('/instructor-signup')}
                  >
                     <img className='instructor-img img-fluid' src={instructorImg} alt="instructor" />
                     <h3 className='m-0'>Instructor</h3>
                  </Col>
                  <Col
                     className=" 
                        parent-box
                        col-12
                        text-center
                        d-flex 
                        flex-column
                        justify-content-around
                        align-items-center
                        flex-grow-1"
                     lg="5"
                     onClick={() => navigate('/parent-signup')}
                  >
                     <img className='parent-child-img img-fluid' src={parentChildImg} alt="parent-child" />
                     <h3 className='m-0'>Parent / Student</h3>
                  </Col>
               </Row>
            </div>
         </Overlay>

      </>
   )
}
