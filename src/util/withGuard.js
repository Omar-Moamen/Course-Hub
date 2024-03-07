import {useSelector} from "react-redux"
import {useNavigate} from "react-router-dom";

export default function withGuard(props)
{
   function Wrapper(Component)
   {
      const {user} = useSelector(state => state.auth);
      const navigate = useNavigate();

      return user ? <Component {...props} /> : navigate('/login');
   }

   return Wrapper;
}