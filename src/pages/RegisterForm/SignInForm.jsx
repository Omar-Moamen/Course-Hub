import './SignInForm.css';
import {Link, useNavigate} from "react-router-dom";
import {Formik} from 'formik';
import {Container, Form, Row, Col, Button} from 'react-bootstrap';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import {addUser} from '../../store/userSlice';
import {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye, faEyeSlash} from '@fortawesome/free-regular-svg-icons';

// Start Sign in validation schema
const signInSchema = Yup.object().shape({
   signInEmail: Yup
      .string()
      .email("Make sure you enter a valid email")
      .trim("Email address shouldn't have spaces")
      .required("Please enter your email"),
   signInPassword: Yup
      .string()
      .min(8, "Your password must be at least 8 character")
      .required("Please enter your password"),
})
// End Sign in validation schema

// Start Component
function SignInForm()
{
   const [showPassword, setShowPassword] = useState(false);

   const dispatch = useDispatch();
   const navigate = useNavigate();

   const initialValues = {
      signInEmail: '',
      signInPassword: '',
   }

   const enableReinitialize = true;

   const onSubmit = (values) =>
   {
      let userCredentials = {
         email: values.signInEmail,
         password: values.signInPassword,
      }
      dispatch(addUser(userCredentials))
         .unwrap()
         .then(navigate('/'));
   }

   return (
      <div className="sign-in-form d-flex align-items-center position-relative">
         <Container className="d-flex justify-content-center align-items-center">
            <Formik
               initialValues={initialValues}
               onSubmit={onSubmit}
               validationSchema={signInSchema}
               enableReinitialize={enableReinitialize}
            >
               {({handleChange, handleSubmit, values, errors, touched}) =>
               (
                  <Form
                     className="py-4 py-md-5 px-4 px-md-5 border-1 rounded-2 bg-white"
                     onSubmit={handleSubmit}>
                     <Row className="align-items-center mb-3">
                        <Form.Group
                           as={Col}
                           controlId='signInEmail'>
                           <Form.Label>Email</Form.Label>
                           <Form.Control
                              name='signInEmail'
                              type="email"
                              placeholder="Your Email"
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
                           <span
                              className='password-toggler position-absolute'
                              onClick={() => setShowPassword(!showPassword)}>
                              <FontAwesomeIcon
                                 icon={showPassword ? faEyeSlash : faEye} />
                           </span>
                           <Form.Control.Feedback type='invalid'>
                              {errors.signInPassword}
                           </Form.Control.Feedback>
                        </Form.Group>
                     </Row>
                     <Row>
                        <Col sm="12" className='d-flex justify-content-center'>
                           <Link to={'register'}
                              className="register-link text-black-50 text-decoration-none text-center py-3 fs-6">
                              Don't have an account?
                           </Link>
                        </Col>
                        <Col md="6">
                           <Button
                              type="submit"
                              className="sign-in-btn btn btn-primary w-100 mb-2 py-2">
                              Sign in
                           </Button>
                        </Col>
                        <Col md="6">
                           <Link
                              className="register-btn w-100 btn btn-secondary py-2"
                              to="register">
                              Register
                           </Link>
                        </Col>
                     </Row>
                  </Form>
               )}
            </Formik>
         </Container>
      </div >
   )
}

export default SignInForm;
