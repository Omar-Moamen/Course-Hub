import {useDispatch, useSelector} from "react-redux";
import {getUser} from "../store/userSlice";
import {useEffect} from "react";

function useUserData()
{

   const dispatch = useDispatch();
   const {user} = useSelector(state => state.user);

   useEffect(() =>
   {
      dispatch(getUser());

   }, [dispatch]);

   return {user};
}

export default useUserData;
