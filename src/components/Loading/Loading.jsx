import {useState, useEffect} from "react";
import {Spinner} from "react-bootstrap";
import {useSelector} from "react-redux";

export default function Loading({children})
{
   const {authLoading} = useSelector(state => state.auth);

   const [disable, setDisable] = useState(false);

   const loader = <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
   </Spinner>

   useEffect(() =>
   {
      console.log(authLoading);
      authLoading ? setDisable(true) : setDisable(false);
   }, [authLoading])

   return (
      <>
         {
            children(disable, loader)
         }
      </>
   )
}