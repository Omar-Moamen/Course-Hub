import './SignInForm.css';
import {Link} from "react-router-dom";
import {Formik} from 'formik';
import {Container, Form, Row, Col, Button} from 'react-bootstrap';
import * as Yup from 'yup';

const signInSchema = Yup.object().shape({
   signInEmail: Yup
      .string()
      .email("Make sure to enter a valid email")
      .trim("Email address shouldn't have spaces")
      .required("Please enter your email"),
   signInPassword: Yup
      .string()
      .min(8, "Your password must be at least 8 character")
      .required("Please enter you password"),
})

function SignInForm()
{
   const initialValues = {
      signInEmail: '',
      signInPassword: '',
   }

   const onSubmit = (values) =>
   {
      console.log(values);
   }

   return (
      <div className="sign-in-form position-relative">
         <Container className="justify-content-center d-flex align-items-center">
            <Formik
               initialValues={initialValues}
               onSubmit={onSubmit}
               validationSchema={signInSchema}
            >
               {({handleChange, handleSubmit, values, errors, touched}) =>
               (
                  <Form
                     className="py-4 py-md-5 px-4 px-md-5 border-1 rounded-2"
                     onSubmit={handleSubmit}>
                     <Row className="align-items-center mb-3">
                        <Form.Group
                           as={Col}
                           className="mb-3"
                           controlId='signInEmail'>
                           <Form.Label>Email</Form.Label>
                           <Form.Control
                              type="email"
                              placeholder="Your Email"
                              value={values.signInEmail}
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
                           className="mb-3"
                           controlId='signInPassword'>
                           <Form.Label>Password</Form.Label>
                           <Form.Control
                              name=''
                              type="password"
                              placeholder="Your Password"
                              value={values.signInPassword}
                              onChange={handleChange}
                              isInvalid={!!errors.signInPassword} />
                           <Form.Control.Feedback type='invalid'>
                              {errors.signInPassword}
                           </Form.Control.Feedback>
                        </Form.Group>
                     </Row>
                     <Row>
                        <p
                           className="text-black-50 text-center fs-6">
                           already have an account?
                        </p>
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
      </div>
   )
}

export default SignInForm;
