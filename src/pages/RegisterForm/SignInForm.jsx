import {Button, Col, Container, Form, Row} from "react-bootstrap";
import './SignInForm.css';
import {Link} from "react-router-dom";

function SignInForm()
{
   return (
      <div className="sign-in-form pt-5 position-relative">
         <Container className="justify-content-center d-flex align-items-center">
            <Form className="mt-5 py-4 py-md-5 px-4 px-md-5 border-1 rounded-2">
               <Row className=" align-items-center mb-3">
                  <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1">
                     <Form.Label>Email</Form.Label>
                     <Form.Control type="email" placeholder="Your Email" />
                  </Form.Group>
               </Row>
               <Row>
                  <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput2">
                     <Form.Label>Password</Form.Label>
                     <Form.Control type="password" placeholder="strong password" />
                  </Form.Group>
               </Row>
               <Row className="">
                  <p className="text-black-50 text-center fs-6">already have an account?</p>
                  <Col md="6">
                     <Button className="sign-in-btn w-100 mb-2 py-2">Sign in</Button>
                  </Col>
                  <Col md="6">
                     <Link className="register-btn w-100 btn btn-secondary py-2"
                        to="register">
                        Register
                     </Link>
                  </Col>
               </Row>
            </Form>
         </Container>
      </div>
   )
}

export default SignInForm;
