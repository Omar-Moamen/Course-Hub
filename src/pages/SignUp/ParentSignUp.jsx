import {Fragment, useState} from 'react';
import {Button, Col, Container, Form, Row} from 'react-bootstrap';
import './ParentSignUp.css';
import {Formik, Field, FieldArray, ErrorMessage} from "formik";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as Yup from 'yup';
import {faEye, faEyeSlash, faTrashCan} from '@fortawesome/free-regular-svg-icons';
import {useDispatch} from 'react-redux';
import {addUser} from '../../store/userSlice';
import {useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';

// Start SignUp validation schema
const signUPSchema = Yup.object().shape({
   parentFirstName: Yup
      .string()
      .min(2, "First name should be at least 2 characters")
      .trim("First name shouldn't have spaces")
      .required("First name is required"),
   parentLastName: Yup
      .string()
      .min(2, "Last name should be at least 2 characters")
      .trim("Last name shouldn't have spaces")
      .required("Last name is required"),
   fatherName: Yup
      .string()
      .min(2, "Father name should be at least 2 characters")
      .trim("Father name shouldn't have spaces")
      .required("Father name is required"),
   parentPhone: Yup
      .number()
      .required("Phone number is required"),
   parentEmail: Yup
      .string()
      .email("Make sure to enter valid email")
      .required("Email is required"),
   parentCity: Yup
      .string()
      .min(2, "City name must be at least 2 characters")
      .max(20, "City name must be maximum 20 characters")
      .required("City is required"),
   parentPassword: Yup.string()
      .required("Password is required")
      .min(8, "Password should be at least 8 characters")
      .matches(/\d/, "Password must contain a number")
      .matches(/[a-z]/, "Password must contain a lowercase letter")
      .matches(/[A-Z]/, "Password must contain an uppercase letter")
      .matches(/\W/, "Password must contain a special character"),
   students: Yup
      .array(Yup
         .object({
            name: Yup
               .string()
               .trim("First name shouldn't have spaces")
               .required("Student name is required"),
            birthDate: Yup
               .date()
               .required("Birth date is required")
         })).min(1).max(4)
})
// End Register validation schema


// Start Component
function ParentSignUp()
{
   const [showPassword, setShowPassword] = useState(false);

   const dispatch = useDispatch();
   const navigate = useNavigate();

   const initialValues = {
      parentFirstName: '',
      parentLastName: '',
      fatherName: '',
      parentPhone: '',
      parentEmail: '',
      parentCity: '',
      parentPassword: '',
      students: [{name: '', birthDate: ''},],
   }

   const enableReinitialize = true;

   const onSubmit = (values) =>
   {
      let userCredentials = {
         parentFirstName: values.parentFirstName,
         parentLastName: values.parentLastName,
         fatherName: values.fatherName,
         parentPhone: values.parentPhone,
         parentEmail: values.parentEmail,
         parentCity: values.parentCity,
         parentPassword: values.parentPassword,
         students: values.students,
      }

      console.log(userCredentials)

      dispatch(addUser(userCredentials))
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
         <div className='dots position-absolute dots-up d-none d-xl-block' />
         <div className='dots position-absolute dots-down d-none d-xl-block' />
         <Container className="d-flex justify-content-center align-items-center">
            <Formik
               initialValues={initialValues}
               onSubmit={onSubmit}
               validationSchema={signUPSchema}
               enableReinitialize={enableReinitialize}
            >
               {({handleSubmit, handleChange, values, errors, touched}) => (
                  <Form
                     className="px-4 border-1 rounded-2 bg-white"
                     onSubmit={handleSubmit}>
                     <div className='parent-section'>
                        <h4 className="mb-2 mt-3">Parent Info:</h4>
                        <Row className="align-items-start mb-md-3">
                           <Form.Group
                              className='mb-1 mb-md-0'
                              as={Col}
                              md="3"
                              controlId="parentFirstName">
                              <Form.Label>First name</Form.Label>
                              <Form.Control
                                 className={`form-control`}
                                 name="parentFirstName"
                                 type="text"
                                 placeholder="First Name"
                                 value={values.parentFirstName}
                                 onChange={handleChange}
                                 isInvalid={!!errors.parentFirstName}
                              />
                              <Form.Control.Feedback type="invalid">
                                 {errors.parentFirstName}
                              </Form.Control.Feedback>
                           </Form.Group>
                           <Form.Group
                              className='mb-1 mb-md-0'
                              as={Col}
                              md="3"
                              controlId="parentLastName">
                              <Form.Label>Last name</Form.Label>
                              <Form.Control
                                 name="parentLastName"
                                 type="text"
                                 placeholder="Last Name"
                                 value={values.parentLastName}
                                 onChange={handleChange}
                                 isInvalid={!!errors.parentLastName}
                              />
                              <Form.Control.Feedback type='invalid'>
                                 {errors.parentLastName}
                              </Form.Control.Feedback>
                           </Form.Group>
                           <Form.Group
                              className='mb-1 mb-md-0'
                              as={Col}
                              md="6"
                              controlId='parentEmail'>
                              <Form.Label>Parent e-mail</Form.Label>
                              <Form.Control
                                 name="parentEmail"
                                 type="email"
                                 placeholder="me@example.com"
                                 value={values.parentEmail}
                                 onChange={handleChange}
                                 isInvalid={!!errors.parentEmail} />
                              <Form.Control.Feedback type='invalid'>
                                 {errors.parentEmail}
                              </Form.Control.Feedback>
                           </Form.Group>
                        </Row>
                        <Row className='align-items-start mb-md-3'>
                           <Form.Group
                              className='mb-1 mb-md-0'
                              as={Col}
                              md="6"
                              controlId='fatherName'>
                              <Form.Label>Father name</Form.Label>
                              <Form.Control
                                 name="fatherName"
                                 type="text"
                                 placeholder="Father Name"
                                 value={values.fatherName}
                                 onChange={handleChange}
                                 isInvalid={!!errors.fatherName} />
                              <Form.Control.Feedback type='invalid'>
                                 {errors.fatherName}
                              </Form.Control.Feedback>
                           </Form.Group>
                           <Form.Group
                              className='mb-1 mb-md-0'
                              as={Col}
                              md="6"
                              controlId='parentPhone'>
                              <Form.Label>Phone number</Form.Label>
                              <Form.Control
                                 name="parentPhone"
                                 type="text"
                                 placeholder="01x-xxxx-xxxx"
                                 value={values.parentPhone}
                                 onChange={handleChange}
                                 isInvalid={!!errors.parentPhone} />
                              <Form.Control.Feedback type='invalid'>
                                 {errors.parentPhone}
                              </Form.Control.Feedback>
                           </Form.Group>
                        </Row>
                        <Row className='align-items-start mb-2 mb-md-3'>
                           <Form.Group
                              className='mb-1 mb-md-0'
                              as={Col}
                              md="6"
                              controlId='parentCity'>
                              <Form.Label>City</Form.Label>
                              <Form.Control
                                 name="parentCity"
                                 type="text"
                                 placeholder="Current City"
                                 value={values.parentCity}
                                 onChange={handleChange}
                                 isInvalid={!!errors.parentCity} />
                              <Form.Control.Feedback type='invalid'>
                                 {errors.parentCity}
                              </Form.Control.Feedback>
                           </Form.Group>
                           <Form.Group
                              className='position-relative mb-1 mb-md-0'
                              as={Col}
                              md="6"
                              controlId='parentPassword'
                           >
                              <Form.Label>Create password</Form.Label>
                              <Form.Control
                                 name="parentPassword"
                                 type={showPassword ? "text" : "password"}
                                 placeholder="Enter Strong Password"
                                 value={values.parentPassword}
                                 onChange={handleChange}
                                 isInvalid={!!errors.parentPassword} />
                              <button
                                 className='
                                 password-toggler
                                 position-absolute
                                 bg-transparent
                                 border-0'
                                 type='button'
                                 onClick={() => setShowPassword(!showPassword)}>
                                 <FontAwesomeIcon
                                    icon={showPassword ? faEyeSlash : faEye} />
                              </button>
                              <Form.Control.Feedback type='invalid'>
                                 {errors.parentPassword}
                              </Form.Control.Feedback>
                           </Form.Group>
                        </Row>
                     </div>
                     <div className='student-section'>
                        <h4 className="mb-2">Student Info:</h4>
                        <FieldArray name='students'>
                           {
                              // fieldArrayProps is a built in props in formik FieldArray
                              // I used it to handle a dynamic fields of students
                              ({push, remove, form}) =>
                              {
                                 const {students} = form.values;
                                 return (
                                    students && students.length > 0 ?
                                       students.map((_, index) => (
                                          <Fragment key={index}>
                                             <Row className="
                                          align-items-center 
                                          align-items-md-start
                                          mb-md-3">
                                                <Form.Group
                                                   className='mb-1 mb-md-0'
                                                   as={Col}
                                                   md="6"
                                                >
                                                   <Form.Label htmlFor={`student${index}Name`}>
                                                      Student {index > 0 ? `(${index + 1})` : null} First name
                                                   </Form.Label>
                                                   <Field
                                                      className={`form-control`}
                                                      id={`student${index}Name`}
                                                      type="text"
                                                      name={`students[${index}].name`}
                                                      value={values.students.name}
                                                      onChange={handleChange}
                                                      placeholder="Student Name"
                                                   />
                                                   <ErrorMessage
                                                      component="div"
                                                      className='error-feedback text-danger'
                                                      name={`students[${index}].name`}
                                                      id={`student${index}Name`}
                                                      style={{
                                                         fontSize: "14px",
                                                         marginTop: "4px"
                                                      }}
                                                   />
                                                </Form.Group>
                                                <Form.Group
                                                   as={Col}
                                                   md="4"
                                                   controlId={`student${index}BirthDate`}>
                                                   <Form.Label>
                                                      Student {index > 0 ? `(${index + 1})` : null} Birth date
                                                   </Form.Label>
                                                   <Field
                                                      className={`form-control`}
                                                      id={`student${index}BirthDate`}
                                                      type="date"
                                                      name={`students[${index}].birthDate`}
                                                      value={values.students.birthDate}
                                                      onChange={handleChange}
                                                      placeholder="Student Birth date" />
                                                   <ErrorMessage
                                                      component="div"
                                                      className='error-feedback text-danger'
                                                      name={`students[${index}].birthDate`}
                                                      id={`student${index}BirthDate`}
                                                      style={{
                                                         fontSize: "14px",
                                                         marginTop: "4px",
                                                      }}
                                                   />
                                                </Form.Group>
                                                <Col
                                                   md="2"
                                                   className="
                                                d-grid 
                                                h-100 
                                                justify-content-md-end">
                                                   {
                                                      index > 0 &&
                                                      <Button
                                                         type='button'
                                                         className="
                                                         remove-btn
                                                         text-center 
                                                         d-flex 
                                                         align-items-center 
                                                         justify-content-center 
                                                         align-self-start
                                                         mt-2 mt-md-0
                                                         mb-2 mb-md-0"
                                                         onClick={() => remove(index)}>
                                                         <FontAwesomeIcon icon={faTrashCan} />
                                                      </Button>
                                                   }
                                                   {
                                                      index === (students.length - 1) && students.length < 5 ?
                                                         <Button
                                                            type='button'
                                                            className="
                                                            add-btn
                                                            text-center
                                                            fw-bold
                                                            d-flex
                                                            align-items-center 
                                                            justify-content-center 
                                                            align-self-end
                                                            mt-2 mt-md-0"
                                                            onClick={
                                                               () => push({name: '', birthDate: ''})
                                                            }>
                                                            Add
                                                         </Button> :
                                                         null
                                                   }
                                                </Col>
                                             </Row>
                                             {
                                                index < (students.length - 1) &&
                                                <hr className="
                                             mt-3 mt-md-1 
                                             mb-4 mb-md-3 
                                             mx-auto
                                             w-100" />
                                             }
                                          </Fragment>
                                       ))
                                       : null);
                              }
                           }
                        </FieldArray>
                     </div>
                     <Row className="justify-content-center">
                        <Button
                           type="submit"
                           className="submit-btn btn btn-primary mt-3 mb-4 w-50 py-2">
                           Submit
                        </Button>
                     </Row>
                  </Form>
               )
               }
            </Formik>
         </Container>
      </div>
   )
}

export default ParentSignUp;
