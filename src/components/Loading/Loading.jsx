import {Spinner} from "react-bootstrap";

export default function Loading({renderProp, children, loading})
{
   const elementType = children?.type?.render?.displayName;

   console.log(elementType);

   const renderHandler = () =>
   {
      if (elementType.toLowerCase() === "button")
      {
         return (
            <>
               {
                  loading ? "button loading..." :
                     children
               }
            </>
         )
      }

      // If elementType not Button it will return this =>
      return (
         <>
            {
               loading ?
                  <Spinner animation="border" role="status">
                     <span className="visually-hidden">Loading...</span>
                  </Spinner> :
                  children
            }
         </>
      )
   }

   return renderHandler();
}