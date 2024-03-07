import {useDispatch, useSelector} from "react-redux";
import {getUser} from "../store/authSlice";
import {useEffect} from "react";

function useUserData()
{

   const dispatch = useDispatch();
   const {user} = useSelector(state => state.auth);

   useEffect(() =>
   {
      dispatch(getUser());

   }, [dispatch]);

   return {user};
}

export default useUserData;
