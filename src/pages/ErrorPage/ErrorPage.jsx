import {useNavigate, useRouteError} from 'react-router-dom';
import './ErrorPage.css';
import {Button} from 'react-bootstrap';

function ErrorPage()
{
   const error = useRouteError();
   const navigate = useNavigate();

   return (
      <div
         id="error-page"
         className='pt-5 text-center bg-light'>
         <h1 className='fw-light'>Oops!</h1>
         <p className='mx-auto'>Sorry, an unexpected error has occurred.</p>
         <p className='mx-auto'>
            <i>{error.statusText || error.message}</i>
         </p>
         <Button
            type="button"
            className='
            text-uppercase
            text-white
            border-0
            rounded-0'
            onClick={() => navigate('/', {replace: true})}
         >
            Go to home page
         </Button>
      </div>
   )
}

export default ErrorPage
