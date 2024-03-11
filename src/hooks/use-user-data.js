import {useDispatch, useSelector} from "react-redux";
import {getUser, userIsLoggedIn} from "../store/authSlice";
import {useEffect} from "react";

function useUserData()
{

   const dispatch = useDispatch();
   const {user, isLoggedIn, loading, error} = useSelector(state => state.auth);

   useEffect(() =>
   {
      dispatch(userIsLoggedIn());
      isLoggedIn && dispatch(getUser());
   }, [isLoggedIn, dispatch]);

   return {user, loading, error};
}

export default useUserData;
