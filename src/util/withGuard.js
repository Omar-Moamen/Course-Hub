import {useNavigate} from "react-router-dom";
import useUserData from "../hooks/use-user-data";

export default function withGuard(props)
{
   function Wrapper(Component)
   {
      const {user} = useUserData();
      const navigate = useNavigate();

      // return user ? <Component {...props} /> : navigate('/login');
      if (user)
      {
         if (user?.role === "instructor")
         {
            if (user?.activated === 0)
            {
               return navigate('/activate')
            }
            else if (user?.activated === 1)
            {
               return <Component {...props} />;
            }
         }
         return <Component {...props} />;
      }
      else if (!user)
      {
         return navigate('/login');
      }

   }

   return Wrapper;
}