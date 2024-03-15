import {useDispatch, useSelector} from "react-redux";
import {getUser} from "../store/authSlice";
import {useEffect} from "react";

function useUserData()
{
   const {user} = useSelector(state => state.auth);
   const dispatch = useDispatch();

   useEffect(() =>
   {
      console.log('test')

      dispatch(getUser());
   }, [dispatch]);

   return {user};
}

export default useUserData;
