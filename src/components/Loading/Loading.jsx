import {Spinner} from "react-bootstrap";
import {useSelector} from "react-redux";

export default function Loading({children})
{
   const {authLoading} = useSelector(state => state.auth);
   const disable = authLoading ? true : false;
   const loader = authLoading ?
      <Spinner
         className="position-absolute top-50 start-50"
         animation="border" role="status"
         style={{marginTop: "-1rem", marginLeft: "-1rem"}}>
         <span className="visually-hidden">Loading...</span>
      </Spinner> : null

   console.log('Loading Component')
   console.log(authLoading)

   return (
      <>
         {
            children(disable, loader)
         }
      </>
   )
}