import {useState, useEffect} from "react";
import {Spinner} from "react-bootstrap";

export default function Loading({render, loading})
{
   const [disable, setDisable] = useState(false);

   const loader = <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
   </Spinner>

   useEffect(() =>
   {
      loading ? setDisable(true) : setDisable(false);
   }, [loading])

   return (
      <>
         {
            render(disable, loader)
         }
      </>
   )
}