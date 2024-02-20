import './LoginForm.css';
import {Link, useNavigate} from "react-router-dom";
import {Formik} from 'formik';
import {Container, Form, Row, Col, Button} from 'react-bootstrap';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import {forgetPassword} from '../../store/userSlice';
import {userLogin} from '../../store/authSlice';
import {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye, faEyeSlash} from '@fortawesome/free-regular-svg-icons';
import {Modal} from 'react-bootstrap';
import Swal from 'sweetalert2';
import PopupModal from '../../components/PopupModal/PopupModal';

// Start Sign in validation schema
const signInSchema = Yup.object().shape({
   signInEmail: Yup
      .string()
      .trim("Email address shouldn't have spaces")
      .required("Please enter your username / email"),
   signInPassword: Yup
      .string()
      .min(8, "Your password must be at least 8 character")
      .required("Please enter your password"),
})
// End Sign in validation schema

// Start Component
function LoginForm()
{
   const {loading, error} = useSelector(state => state.auth);

   const [showPassword, setShowPassword] = useState(false);
   const [showModal, setShowModal] = useState(false);

   const dispatch = useDispatch();
   const navigate = useNavigate();

   // Formik
   const initialValues = {
      signInEmail: '',
      signInPassword: '',
      identifier: '',
   }

   const enableReinitialize = true;

   const sendResetPassword = (values) =>
   {
      let backupEmail =
      {
         identifier: values.identifier
      };
      dispatch(forgetPassword(backupEmail))
         .unwrap()
         .then(() => setShowModal(false))
         .catch(error =>
         {
            Swal.fire({
               icon: "error",
               title: "Oops...",
               text: `${error}!`,
            });
         });
   }

   const onSubmit = (values) =>
   {
      let userCredentials = {
         email: values.signInEmail,
         password: values.signInPassword,
      }
      dispatch(userLogin(userCredentials))
         .unwrap()
         .then(() => navigate('/'))
         .catch(error =>
         {
            Swal.fire({
               icon: "error",
               title: "Oops...",
               text: `${error}!`,
            });
         })
   };


   return (
      <>
         {/* Start reset password Modal */}
         <PopupModal
            showModal={showModal}
            setShowModal={setShowModal}
         >
            {/* Formik for only reset password form */}
            <Formik
               initialValues={initialValues}
               onSubmit={sendResetPassword}
               enableReinitialize={enableReinitialize}>
               {({handleChange, handleSubmit, values}) => (
                  <>
                     <Form onSubmit={handleSubmit}>
                        <Modal.Body>
                           <Form.Label
                              style={{fontSize: "14px"}}
                           >
                              Enter:
                              <span className='text-black-50 ms-1'>
                                 Username / Email
                              </span>
                           </Form.Label>
                           <Form.Control
                              className='reset-password-input'
                              name='identifier'
                              type='text'
                              value={values.identifier}
                              onChange={handleChange} />
                        </Modal.Body>
                        <Modal.Footer>
                           <Button
                              type='submit'
                              style={{fontSize: '14px'}}>
                              Send to email
                           </Button>
                        </Modal.Footer>
                     </Form>
                  </>
               )
               }
            </Formik>
         </PopupModal>
         {/* End reset password Modal */}
         <div className="login-in-form d-flex align-items-center position-relative">
            <Container className="d-flex justify-content-center align-items-center">
               <Formik
                  initialValues={initialValues}
                  onSubmit={onSubmit}
                  validationSchema={signInSchema}
                  enableReinitialize={enableReinitialize}
               >
                  {/* Formik Func */}
                  {({handleChange, handleSubmit, values, errors}) =>
                  (
                     <Form
                        className="py-4 py-md-5 px-4 px-md-5 border-1 rounded-2 bg-white"
                        onSubmit={handleSubmit}>
                        <Row className="align-items-center mb-1">
                           <Form.Group
                              className='mb-3'
                              as={Col}
                              controlId='signInEmail'>
                              <Form.Label>Username / Email</Form.Label>
                              <Form.Control
                                 name='signInEmail'
                                 type="text"
                                 placeholder="Username / Email"
                                 value={values.email}
                                 onChange={handleChange}
                                 isInvalid={!!errors.signInEmail} />
                              <Form.Control.Feedback type='invalid'>
                                 {errors.signInEmail}
                              </Form.Control.Feedback>
                           </Form.Group>
                        </Row>
                        <Row>
                           <Form.Group
                              as={Col}
                              className="position-relative"
                              controlId='signInPassword'>
                              <Form.Label>Password</Form.Label>
                              <Form.Control
                                 name='signInPassword'
                                 type={showPassword ? "text" : "password"}
                                 placeholder="Your Password"
                                 value={values.signInPassword}
                                 onChange={handleChange}
                                 isInvalid={!!errors.signInPassword} />
                              <button
                                 className='password-toggler 
                                 position-absolute 
                                 border-0
                                 bg-transparent'
                                 type='button'
                                 style={
                                    {
                                       top: `
                                       ${errors.signInPassword ?
                                             "calc(50% + 4px)" : "calc(50% + 16px)"}`
                                    }}
                                 onClick={() => setShowPassword(!showPassword)}>
                                 <FontAwesomeIcon
                                    icon={showPassword ? faEyeSlash : faEye} />
                              </button>
                              <Form.Control.Feedback type='invalid'>
                                 {errors.signInPassword ? errors.signInPassword : error}
                              </Form.Control.Feedback>
                           </Form.Group>
                        </Row>
                        <Row>
                           <Col sm="12" className='mb-3'>
                              <span className="
                              reset-password
                              text-black-50
                              text-decoration-underline
                              text-md-left
                              "
                                 onClick={() => setShowModal(true)}>
                                 Reset password
                              </span>
                           </Col>
                           <Col
                              className='mt-md-2'
                              md="6">
                              <Button
                                 type="submit"
                                 className="login-in-btn btn btn-primary w-100 mb-2 py-2">
                                 Login
                              </Button>
                           </Col>
                           <Col
                              className='mt-md-2'
                              md="6">
                              <Link
                                 className="register-btn w-100 btn btn-secondary py-2"
                                 to="/register">
                                 Register
                              </Link>
                           </Col>
                        </Row>
                     </Form>
                  )}
               </Formik>
            </Container>
         </div >
      </>
   )
}

export default LoginForm;
