import {Button, Col, Container, Form, Row} from "react-bootstrap";
import './RegisterForm.css';

function RegisterForm()
{
   return (
      <div className="register-form pt-5 position-relative">
         <Container className="justify-content-center d-flex align-items-center">
            <Form className="w-75 mt-5 px-4 px-md-5 border-1 rounded-2">
               <Row className=" align-items-center mb-3">
                  <h4 className="mt-4 mb-4">Parent Info:</h4>
                  <Form.Group as={Col} md="6" className="mb-3" controlId="exampleForm.ControlInput1">
                     <Form.Label>Parent First Name</Form.Label>
                     <Form.Control type="text" placeholder="Enter First Name" />
                  </Form.Group>
                  <Form.Group as={Col} md="6" className="mb-3" controlId="exampleForm.ControlInput2">
                     <Form.Label>Parent Last Name</Form.Label>
                     <Form.Control type="text" placeholder="Enter Last Name" />
                  </Form.Group>
                  <Form.Group as={Col} md="6" className="mb-3" controlId="exampleForm.ControlInput3">
                     <Form.Label>Phone Number</Form.Label>
                     <Form.Control type="text" placeholder="01x-xxxx-xxxx" />
                  </Form.Group>
                  <Form.Group as={Col} md="6" className="mb-3" controlId="exampleForm.ControlInput4">
                     <Form.Label>Parent E-mail</Form.Label>
                     <Form.Control type="email" placeholder="me@example.com" />
                  </Form.Group>
               </Row>
               <Row className="align-items-center mb-3">
                  <h4 className="mb-4">Student Info:</h4>
                  <Form.Group as={Col} md="6" className="mb-3" controlId="exampleForm.ControlInput1">
                     <Form.Label>Student First Name</Form.Label>
                     <Form.Control type="text" placeholder="Enter Student Name" />
                  </Form.Group>
                  <Form.Group as={Col} md="6" className="mb-3" controlId="exampleForm.ControlInput1">
                     <Form.Label>Student Age</Form.Label>
                     <Form.Control type="number" placeholder="Enter Student Age" />
                  </Form.Group>
               </Row>
               <Row className="justify-content-center">
                  <Button className="mb-4 w-50 py-2">Submit</Button>
               </Row>
            </Form>
         </Container>
      </div>
   )
}

export default RegisterForm;
