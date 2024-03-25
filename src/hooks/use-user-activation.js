import {useEffect} from 'react'
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';

function useUserActivation()
{
   const {user} = useSelector(state => state.auth);
   const {role, activated} = user || {};

   const navigate = useNavigate();

   useEffect(() =>
   {
      if (role === "instructor" && activated === 0)
      {
         navigate('/activate', {replace: true});
      }
      else
      {
         navigate('/', {replace: true});
      }

   }, [navigate, activated, role]);

   return {role, activated};
}

export default useUserActivation;
