import Header from '../../components/Header/Header'
import {Outlet} from 'react-router-dom'
import SettingsBox from '../../components/Settings/SettingsBox'
import useUserData from '../../hooks/use-user-data';

function RootLayout()
{
   const {user} = useUserData();

   return (
      <>
         <Header userData={user} />
         {user && <SettingsBox />}
         <Outlet />
      </>
   )
}

export default RootLayout
