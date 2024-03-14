import {useDispatch, useSelector} from "react-redux";
import {getUser, userIsLoggedIn} from "../store/authSlice";
import {useEffect} from "react";

function useUserData()
{
   const {user, authLoading, isLoggedIn, error} = useSelector(state => state.auth);
   const dispatch = useDispatch();


   useEffect(() =>
   {
      dispatch(userIsLoggedIn());

      isLoggedIn && dispatch(getUser());

      console.log('test')
   }, [isLoggedIn, dispatch]);

   return {user, authLoading, error};
}

export default useUserData;
