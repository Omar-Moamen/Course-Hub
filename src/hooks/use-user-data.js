import {useDispatch, useSelector} from "react-redux";
import {actGetUser} from "../store/authSlice/act/actGetUser";
import {useEffect} from "react";

function useUserData()
{
   const {user} = useSelector(state => state.auth);
   const dispatch = useDispatch();

   useEffect(() =>
   {
      dispatch(actGetUser());
   }, [dispatch]);

   return {user};
}

export default useUserData;
