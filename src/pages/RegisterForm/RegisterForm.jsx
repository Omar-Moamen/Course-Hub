import {Fragment, useState} from 'react';
import {Button, Col, Form, Row} from 'react-bootstrap';
import './RegisterForm.css';
import {Formik, Field, FieldArray, ErrorMessage} from "formik";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as Yup from 'yup';
import {faEye, faEyeSlash, faTrashCan} from '@fortawesome/free-regular-svg-icons';


const registerSchema = Yup.object().shape({
   parentFirstName: Yup
      .string()
      .min(2, "First name should be at least 2 characters")
      .trim("First name shouldn't have spaces")
      .required("First name is required"),
   parentLastName: Yup
      .string()
      .min(2)
      .trim("First name shouldn't have spaces")
      .required("Last name is required"),
   parentPhone: Yup
      .number()
      .required("Phone number is required"),
   parentEmail: Yup
      .string()
      .email("Make sure to enter valid email")
      .required("Email is required"),
   parentCity: Yup
      .string()
      .min(2)
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
            age: Yup
               .number()
               .max(18, "18 is the maximum permitted age")
               .required("Age is a required")
         })).min(1).max(4)
})


// Start Component
function RegisterForm()
{
   const [disable, setDisable] = useState(false)
   const [showPassword, setShowPassword] = useState(false);

   const initialValues = {
      parentFirstName: '',
      parentLastName: '',
      parentPhone: '',
      parentEmail: '',
      parentCity: '',
      parentPassword: '',
      students: [{name: '', age: '', },
      ],
   }

   const onSubmit = (values) =>
   {
      console.log(values);
   }

   return (
      <div className="register-form pt-5 position-relative">
         <div className="container pt-5 justify-content-center d-flex align-items-center">
            <Formik
               initialValues={initialValues}
               onSubmit={onSubmit}
               validationSchema={registerSchema}
            >
               {({handleSubmit, handleChange, values, errors, touched}) => (
                  <Form
                     className="w-75 px-4 border-1 rounded-2"
                     onSubmit={handleSubmit}>
                     <div className='parent-section'>
                        <h4 className="mt-4 mb-4">Parent Info:</h4>
                        <Row className="align-items-start">
                           <Form.Group
                              as={Col}
                              md="6"
                              className="mb-3"
                              controlId="parentFirstName">
                              <Form.Label>First Name</Form.Label>
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
                              as={Col}
                              md="6"
                              className="mb-3"
                              controlId="parentLastName">
                              <Form.Label>Last Name</Form.Label>
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
                        </Row>
                        <Row className='align-items-start'>
                           <Form.Group
                              as={Col}
                              md="6"
                              className="mb-3"
                              controlId='parentPhone'>
                              <Form.Label>Phone Number</Form.Label>
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
                           <Form.Group
                              as={Col}
                              md="6"
                              className="mb-3"
                              controlId='parentEmail'>
                              <Form.Label>Parent E-mail</Form.Label>
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
                        <Row className='align-items-start mb-3'>
                           <Form.Group
                              as={Col}
                              className="mb-3"
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
                        </Row>
                        <Row className='align-items-start mb-3'>
                           <Form.Group
                              as={Col}
                              className="mb-3 position-relative"
                              controlId='parentPassword'
                           >
                              <Form.Label>Create Password</Form.Label>
                              <Form.Control
                                 name="parentPassword"
                                 type={showPassword ? "text" : "password"}
                                 placeholder="Enter A Strong Password"
                                 value={values.parentPassword}
                                 onChange={handleChange}
                                 isInvalid={!!errors.parentPassword} />
                              <span
                                 className='password-toggler position-absolute'
                                 onClick={() => setShowPassword(!showPassword)}>
                                 <FontAwesomeIcon
                                    icon={showPassword ? faEyeSlash : faEye} />
                              </span>
                              <Form.Control.Feedback type='invalid'>
                                 {errors.parentPassword}
                              </Form.Control.Feedback>
                           </Form.Group>
                        </Row>
                     </div>
                     <div className='student-section'>
                        <h4 className="mb-4">Student Info:</h4>
                        <FieldArray name='students'>
                           {
                              // fieldArrayProps is a built in props in formik FieldArray
                              // I used it to handle a dynamic fields of students
                              ({push, remove, form}) =>
                              {
                                 const {students} = form.values;
                                 return (
                                    students.map((_, index) => (
                                       <Fragment key={index}>
                                          <Row className="align-items-center align-items-md-start">
                                             <Form.Group
                                                as={Col}
                                                md="6"
                                                className="mb-3">
                                                <Form.Label htmlFor={`student${index}Name`}>
                                                   Student {index > 0 ? `(${index + 1})` : null} First Name
                                                </Form.Label>
                                                <Field
                                                   className={`form-control`}
                                                   id={`student${index}Name`}
                                                   type="text"
                                                   name={`students[${index}].name`}
                                                   placeholder="Student Name"
                                                />
                                                <ErrorMessage
                                                   component="div"
                                                   className='error-feedback text-danger'
                                                   name={`students[${index}].name`}
                                                   id={`student${index}Name`}
                                                   style={{fontSize: "14px", marginTop: "4px"}}
                                                />
                                             </Form.Group>
                                             <Form.Group
                                                as={Col}
                                                md="4"
                                                className="mb-3"
                                                controlId={`student${index}Age`}>
                                                <Form.Label>
                                                   Student {index > 0 ? `(${index + 1})` : null} Age
                                                </Form.Label>
                                                <Field
                                                   className={`form-control`}
                                                   id={`student${index}Age`}
                                                   type="number"
                                                   name={`students[${index}].age`}
                                                   placeholder="Student Age" />
                                                <ErrorMessage
                                                   component="div"
                                                   className='error-feedback text-danger'
                                                   name={`students[${index}].age`}
                                                   id={`student${index}Age`}
                                                   style={{fontSize: "14px", marginTop: "4px"}}
                                                />
                                             </Form.Group>
                                             <Col md="2" className='d-flex justify-content-end'>
                                                {
                                                   index === 0 && students.length < 5 ?
                                                      <Button
                                                         type='button'
                                                         className='add-btn text-center fw-bold d-flex align-items-center justify-content-center'
                                                         disabled={disable}
                                                         onClick={() => push({name: '', age: ''})}>
                                                         Add
                                                      </Button> :
                                                      setDisable(false)
                                                }
                                                {
                                                   index > 0 &&
                                                   <Button
                                                      type='button'
                                                      className='remove-btn text-center d-flex align-items-center justify-content-center'
                                                      onClick={() => remove(index)}>
                                                      <FontAwesomeIcon icon={faTrashCan} />
                                                   </Button>
                                                }
                                             </Col>
                                          </Row>
                                          {
                                             index < (students.length - 1) &&
                                             <hr className='mt-3 mt-md-1 mb-4 mb-md-3 mx-auto w-100' />
                                          }
                                       </Fragment>
                                    ))
                                 )
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
         </div>
      </div>
   )
}

export default RegisterForm;
