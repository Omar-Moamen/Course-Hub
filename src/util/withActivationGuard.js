import {useNavigate} from "react-router-dom";
import useUserData from "../hooks/use-user-data";

export default function withActivationGuard(props)
{
   function Wrapper(Component)
   {
      const {user} = useUserData();
      const role = user?.role || '';
      const activated = user?.activated || 0;

      const navigate = useNavigate();

      return role === "instructor" && activated === 0 ? navigate('/activate') : <Component {...props} />;
   }

   return Wrapper;
}