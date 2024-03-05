import Header from '../../components/Header/Header'
import {Outlet} from 'react-router-dom'
import SettingsBox from '../../components/Settings/SettingsBox'
import {useSelector} from 'react-redux';
import useUserData from '../../hooks/use-user-data';

function RootLayout()
{
   const {isLoggedIn} = useSelector(state => state.auth);
   const {user} = useUserData();

   return (
      <>
         <Header userData={user} />
         <SettingsBox isLoggedIn={isLoggedIn} />
         <Outlet />
      </>
   )
}

export default RootLayout
