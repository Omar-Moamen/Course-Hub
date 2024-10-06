import {useDispatch, useSelector} from "react-redux";
import {getUser} from "../store/authSlice/actions/getUser";
import {useEffect} from "react";

function useUserData()
{
   const {user} = useSelector(state => state.auth);
   const dispatch = useDispatch();

   useEffect(() =>
   {
      dispatch(getUser());
   }, [dispatch]);

   return {user};
}

export default useUserData;
