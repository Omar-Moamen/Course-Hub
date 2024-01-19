import {Fragment, useState} from 'react';
import {faMinus, faPlus} from '@fortawesome/free-solid-svg-icons';
import './RegisterForm.css';
import {Formik, Form, Field, FieldArray} from "formik";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as Yup from 'yup';


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
   const [clickCount, setClickCount] = useState(1);
   const [disable, setDisable] = useState(false)

   const handleClick = (param) =>
   {
      console.log(clickCount)
      // Increment the click count
      if (clickCount > 4)
      {
         setDisable(true)
      }
      else
      {
         setDisable(false)
      }
      return param;
   }

   console.log(disable)

   const initialValues = {
      parentFirstName: '',
      parentLastName: '',
      parentPhone: '',
      parentEmail: '',
      students: [{name: '', age: '', },
      ],
   }

   const onSubmit = (values) =>
   {
      console.log(values);
   }

   return (
      <div className="register-form position-relative">
         <div className="container justify-content-center d-flex align-items-center">
            <Formik
               initialValues={initialValues}
               onSubmit={onSubmit}
               validationSchema={registerSchema}
            >
               {({errors, touched}) => (
                  <Form className="w-75 px-4 px-md-5 border-1 rounded-2">
                     <div className='parent-section'>
                        <h4 className="mt-4 mb-4">Parent Info:</h4>
                        <div className="row align-items-start">
                           <div className="mb-3 col-md-6">
                              <label
                                 htmlFor='parentFirstName'
                                 className="form-label">First Name</label>
                              <Field
                                 className={`form-control 
                                 ${!!errors.parentFirstName &&
                                       touched.parentFirstName ?
                                       "is-invalid" : null}`}
                                 id="parentFirstName"
                                 name="parentFirstName"
                                 type="text"
                                 placeholder="Enter First Name"
                                 aria-describedby="parentFirstNameValidationFeedback" />
                              <div
                                 id="parentFirstNameValidationFeedback"
                                 className="invalid-feedback">
                                 {errors.parentFirstName}
                              </div>
                           </div>
                           <div className="mb-3 col-md-6">
                              <label htmlFor='parentLastName'
                                 className="form-label">
                                 Last Name
                              </label>
                              <Field
                                 className={`form-control ${!!errors.parentLastName && touched.parentLastName ? "is-invalid" : null}`}
                                 id="parentLastName"
                                 name="parentLastName"
                                 type="text"
                                 placeholder="Enter Last Name"
                                 aria-describedby="parentLastNameValidationFeedback" />
                              <div id="parentLastNameValidationFeedback" className="invalid-feedback">
                                 {errors.parentLastName}
                              </div>
                           </div>
                        </div>
                        <div className='row align-items-start mb-3'>
                           <div className="mb-3 col-md-6">
                              <label
                                 htmlFor='parentPhone'
                                 className="form-label">Phone Number</label>
                              <Field
                                 className={`form-control ${!!errors.parentPhone && touched.parentPhone ? "is-invalid" : null}`}
                                 id="parentPhone"
                                 name="parentPhone"
                                 type="text"
                                 placeholder="01x-xxxx-xxxx"
                                 aria-describedby="parentPhoneValidationFeedback" />
                              <div id="parentPhoneValidationFeedback" className="invalid-feedback">
                                 {errors.parentPhone}
                              </div>
                           </div>
                           <div className="mb-3 col-md-6">
                              <label
                                 htmlFor='parentEmail'
                                 className="form-label">Parent E-mail</label>
                              <Field
                                 className={`form-control ${!!errors.parentEmail && touched.parentEmail ? "is-invalid" : null}`}
                                 id="parentEmail"
                                 name="parentEmail"
                                 type="email"
                                 placeholder="me@example.com"
                                 aria-describedby="parentEmailValidationFeedback" />
                              <div id="parentEmailValidationFeedback" className="invalid-feedback">
                                 {errors.parentEmail}
                              </div>
                           </div>
                        </div>
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
                                          <div className="row align-items-center align-items-md-start">
                                             <div className="mb-3 col-md-7" >
                                                <label
                                                   htmlFor={`student${index}Name`}
                                                   className="form-label">Student {index > 0 ? `(${index + 1})` : null} First Name</label>
                                                <Field
                                                   className="form-control"
                                                   id={`student${index}Name`}
                                                   type="text"
                                                   name={`students[${index}].name`}
                                                   placeholder="Enter Student Name"
                                                   aria-describedby={`student${index}NameValidationFeedback`} />
                                                <div
                                                   id={`student${index}NameValidationFeedback`}
                                                   className="invalid-feedback">
                                                   {errors.parentFirstName}
                                                </div>
                                             </div>
                                             <div className="mb-3 col-md-4" >
                                                <label
                                                   htmlFor={`student${index}Age`}
                                                   className="form-label">Student {index > 0 ? `(${index + 1})` : null} Age</label>
                                                <Field
                                                   className="form-control"
                                                   id={`student${index}Age`}
                                                   type="number"
                                                   name={`students[${index}].age`}
                                                   placeholder="Enter Student Age"
                                                />
                                             </div>
                                             <div className='col-md-1 d-flex justify-content-end'>
                                                {
                                                   index === 0 ?
                                                      <button
                                                         type='button'
                                                         className='add-btn text-center d-flex align-items-center justify-content-center'
                                                         disabled={disable}
                                                         onClick={() =>
                                                         {
                                                            handleClick(push({name: '', age: ''}))
                                                            setClickCount(prevCount => prevCount + 1);
                                                         }}>
                                                         <FontAwesomeIcon icon={faPlus} />
                                                      </button> :
                                                      <button
                                                         type='button'
                                                         className='remove-btn text-center d-flex align-items-center justify-content-center'
                                                         onClick={() =>
                                                         {
                                                            handleClick(remove(index));
                                                            setClickCount(prevCount => prevCount - 1);
                                                         }}>
                                                         <FontAwesomeIcon icon={faMinus} />
                                                      </button>
                                                }
                                             </div>
                                          </div>
                                          {index < (students.length - 1) && <hr className='mt-3 mt-md-1 mb-4 mb-md-3 mx-auto w-100' />}
                                       </Fragment>
                                    ))
                                 )
                              }
                           }
                        </FieldArray>
                     </div>
                     <div className="row justify-content-center">
                        <button
                           type="submit"
                           className="submit-btn btn btn-primary mt-3 mb-4 w-50 py-2">
                           Submit
                        </button>
                     </div>
                  </Form>
               )
               }
            </Formik>
         </div>
      </div>
   )
}

export default RegisterForm;
