import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import useUserData from "../../hooks/use-user-data";

function ActivatePage()
{
   const {user} = useUserData();
   const {role, activated} = user || {};

   const navigate = useNavigate();

   useEffect(() =>
   {
      if (user)
      {
         if (role !== "instructor" || activated !== 0)
         {
            navigate('/', {replace: true});
         }
      }
      if (!user) 
      {
         navigate('/', {replace: true});
      }
   }, [user, role, activated, navigate]);

   return (
      <div className="position-absolute start-50 translate-middle-x"
         style={{top: "25%"}}
      >
         <h2 className="text-center text-capitalize">Please wait for activation</h2>
         <p className="text-danger text-center">
            You should wait for admin to activate your account
         </p>
      </div>
   )
}

export default ActivatePage;
