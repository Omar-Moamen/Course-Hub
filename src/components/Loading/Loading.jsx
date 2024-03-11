import {useState, useEffect} from "react";
import {Spinner} from "react-bootstrap";
import useUserData from "../../hooks/use-user-data";

export default function Loading({children})
{
   const {loading} = useUserData();

   console.log(loading);

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
            children(disable, loader)
         }
      </>
   )
}