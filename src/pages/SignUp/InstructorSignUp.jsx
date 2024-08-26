import {Button, Col, Container, Row} from 'react-bootstrap';
import {ErrorMessage, Field, Formik} from 'formik';
import {actAddInstructor} from '../../store/usersSlice/act/actAddInstructor';
import Form from 'react-bootstrap/Form';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye, faEyeSlash} from '@fortawesome/free-regular-svg-icons';
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import './InstructorSignUp.css';

// Start Sign in validation schema
const signInSchema = Yup.object().shape({
   firstName: Yup
      .string()
      .matches(/[a-z]/, "First name must have characters")
      .min(2, "First name should be at least 2 characters")
      .trim("First name shouldn't have spaces")
      .required("First name is required"),
   lastName: Yup
      .string()
      .min(2, "Last name should be at least 2 characters")
      .matches(/[a-z]/, "Last name must have characters")
      .trim("First name shouldn't have spaces")
      .required("Last name is required"),
   email: Yup
      .string()
      .email("Make sure to enter valid email")
      .required("Email is required"),
   birthDate: Yup
      .string()
      .required("Birth Date is required"),
   city: Yup
      .string()
      .min(2, "City name must be at least 2 characters")
      .max(20, "City name must be maximum 20 characters")
      .required("City is required"),
   password: Yup.string()
      .required("Password is required")
      .min(8, "Password should be at least 8 characters")
      .matches(/\d/, "Password must contain a number")
      .matches(/[a-z]/, "Password must contain a lowercase letter")
      .matches(/[A-Z]/, "Password must contain an uppercase letter")
      .matches(/\W/, "Password must contain a special character"),
})
// End Sign in validation schema

// Formik
const initialValues = {
   firstName: '',
   lastName: '',
   birthDate: '',
   email: '',
   password: '',
   city: '',
}

const enableReinitialize = true;

export default function InstructorSignUp()
{
   const [showPassword, setShowPassword] = useState(false);

   const dispatch = useDispatch();
   const navigate = useNavigate();

   // Formik
   const onSubmit = (values) =>
   {
      let userCredentials = {
         firstName: values.firstName,
         lastName: values.lastName,
         birthDate: values.birthDate,
         email: values.email,
         password: values.password,
         city: values.city,
      }

      console.log(userCredentials);

      dispatch(actAddInstructor(userCredentials))
         .unwrap()
         .then(() => navigate('/login'))
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
      <div className="sign-up-form d-flex align-items-center position-relative">
         <Container className="d-flex justify-content-center align-items-center">
            <Formik
               initialValues={initialValues}
               onSubmit={onSubmit}
               validationSchema={signInSchema}
               enableReinitialize={enableReinitialize}
            >
               {/* Formik Func */}
               {({handleSubmit, errors, touched}) =>
               (
                  <Form
                     className="py-4 py-md-5 px-4 px-md-5 border-1 rounded-2 bg-white"
                     onSubmit={handleSubmit}>
                     <Row className="align-items-center mb-2">
                        <div className='col-sm-12 col-md-6 mb-3'>
                           <label className='mb-2' htmlFor="firstName">First name</label>
                           <Field
                              className={`
                                    form-control ${errors.firstName && touched.firstName ?
                                    "border-danger invalid-field"
                                    : null}`}
                              id="FirstName"
                              name='firstName'
                              type="text"
                              placeholder="First Name" />
                           {
                              errors.firstName && touched.firstName ?
                                 <span className='error-msg text-danger'>
                                    <ErrorMessage name='firstName' />
                                 </span>
                                 : null
                           }
                        </div>
                        <div className='col-sm-12 col-md-6 mb-3'>
                           <label className='mb-2' htmlFor='LastName'>Last name</label>
                           <Field
                              className={`form-control 
                                    ${errors.lastName && touched.lastName ?
                                    "border-danger invalid-field" : null}`}
                              name='lastName'
                              id='LastName'
                              type="text"
                              placeholder="Last Name" />
                           {
                              errors.lastName && touched.lastName ?
                                 <span className='error-msg text-danger'>
                                    <ErrorMessage name='lastName' />
                                 </span>
                                 : null
                           }
                        </div>
                     </Row>
                     <Row className="align-items-center mb-2">
                        <div className='col-sm-12 col-md-6 mb-3'>
                           <label className='mb-2' htmlFor='Email'>Email</label>
                           <Field
                              className={`form-control 
                                    ${errors.email && touched.email ?
                                    "border-danger invalid-field" : null}`}
                              id='Email'
                              name='email'
                              type="email"
                              placeholder="me@example.com" />
                           {
                              errors.email && touched.email ?
                                 <span className='error-msg text-danger'>
                                    <ErrorMessage name='email' />
                                 </span>
                                 : null
                           }
                        </div>
                        <div className='col-sm-12 col-md-6 mb-3'>
                           <label className='mb-2' htmlFor='BirthDate'>Birth Date</label>
                           <Field
                              className={`form-control 
                                    ${errors.birthDate && touched.birthDate ?
                                    "border-danger invalid-field" : null}`}
                              id="BirthDate"
                              name='birthDate'
                              type="date"
                              placeholder="Your Birth Date" />
                           {
                              errors.birthDate && touched.birthDate ?
                                 <span className='error-msg text-danger'>
                                    <ErrorMessage name='birthDate' />
                                 </span>
                                 : null
                           }
                        </div>
                     </Row>
                     <Row>
                        <div className='col-sm-12 col-md-6 mb-3'>
                           <label className='mb-2' htmlFor='City'>City</label>
                           <Field
                              className={`form-control 
                              ${errors.city && touched.city ?
                                    "border-danger invalid-field" : null}`}
                              name='city'
                              id='City'
                              type="text"
                              placeholder="Your Current City" />
                           {
                              errors.city && touched.city ?
                                 <span className='error-msg text-danger'>
                                    <ErrorMessage name='city' />
                                 </span>
                                 : null
                           }
                        </div>
                        <div className='col-sm-12 col-md-6 mb-3 position-relative'>
                           <label className='mb-2' htmlFor='Password'>Create password</label>
                           <Field
                              className={`form-control 
                              ${errors.password && touched.password ?
                                    "border-danger invalid-field" : null}`}
                              id='Password'
                              name='password'
                              type={showPassword ? "text" : "password"}
                              placeholder="Enter Strong Password" />
                           <button
                              className='password-toggler 
                                 position-absolute 
                                 border-0
                                 bg-transparent'
                              type='button'
                              style={{top: "calc(50% + 4px)", right: "25px"}}
                              onClick={() => setShowPassword(!showPassword)}>
                              <FontAwesomeIcon
                                 icon={showPassword ? faEyeSlash : faEye} />
                           </button>
                           {
                              errors.password && touched.password ?
                                 <span className='error-msg text-danger'>
                                    <ErrorMessage name='password' />
                                 </span>
                                 : null
                           }
                        </div>
                     </Row>
                     <Row className='align-items-end'>
                        <Col className='mt-md-3'>
                           <Button
                              type="submit"
                              className="submit-btn btn btn-primary w-100 mb-2 py-2">
                              Submit
                           </Button>
                        </Col>
                     </Row>
                  </Form>
               )}
            </Formik>
         </Container>
      </div >
   )
}