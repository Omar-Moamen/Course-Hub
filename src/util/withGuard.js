import {useNavigate} from "react-router-dom";
import useUserData from "../hooks/use-user-data";

export default function withGuard(props)
{
   function Wrapper(Component)
   {
      const {user} = useUserData()
      const navigate = useNavigate();

      return user ? <Component {...props} /> : navigate('/login');
   }

   return Wrapper;
}