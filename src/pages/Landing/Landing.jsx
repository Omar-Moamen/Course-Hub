import {Container} from 'react-bootstrap';
import './Landing.css'

function Landing()
{
   return (
      <div className='landing'>
         <Container className='px-4 h-100'>
            <div className="row h-100 align-items-center justify-content-center text-center">
               <div className="col-lg-8 align-self-end">
                  <h1 className='text-white text-capitalize mb-3'>Your favourite place to learning programming we lead you to Better future</h1>
                  <hr className="divider my-0 mx-auto" />
               </div>
               <div className='col-lg-8 align-self-sm-start align-self-baseline'>
                  <p className='text-white-50 fs-lg-5 mt-3'>Something Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
                     aliquid iure atque magnam delectus ipsa explicabo incidunt recusandae voluptatibus, rerum, hic aliquam</p>
                  <a className='btn btn-primary border-0 text-white rounded-pill text-uppercase fw-semibold mt-3' href="#/">Find out more</a>
               </div>
            </div>
         </Container>
      </div>
   )
}

export default Landing;
