import './SignInForm.css';
import {Link} from "react-router-dom";
import {Formik, Form, Field} from 'formik';

function SignInForm()
{
   return (
      <div className="sign-in-form position-relative">
         <div className="container justify-content-center d-flex align-items-center">
            <Formik>
               <Form className="py-4 py-md-5 px-4 px-md-5 border-1 rounded-2">
                  <div className="row align-items-center mb-3">
                     <div className="col mb-3">
                        <label className='form-label'>Email</label>
                        <Field className='form-control' type="email" placeholder="Your Email" />
                     </div>
                  </div>
                  <div className="row">
                     <div className="col mb-3">
                        <label className='form-label'>Password</label>
                        <Field className='form-control' type="password" placeholder="strong password" />
                     </div>
                  </div>
                  <div className="row">
                     <p className="text-black-50 text-center fs-6">already have an account?</p>
                     <div className="col-md-6">
                        <button className="sign-in-btn btn btn-primary w-100 mb-2 py-2">Sign in</button>
                     </div>
                     <div className="col-md-6">
                        <Link className="register-btn w-100 btn btn-secondary py-2"
                           to="register">
                           Register
                        </Link>
                     </div>
                  </div>
               </Form>
            </Formik>
         </div>
      </div>
   )
}

export default SignInForm;
