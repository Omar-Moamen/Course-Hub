import {useSelector} from "react-redux"
import {useNavigate} from "react-router-dom";

export default function withGuard(props)
{
   function Wrapper(Component)
   {
      const {isLoggedIn} = useSelector(state => state.auth);
      const navigate = useNavigate();

      return isLoggedIn ? <Component {...props} /> : navigate('/');
   }
   return Wrapper
}