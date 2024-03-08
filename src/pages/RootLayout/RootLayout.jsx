import Header from '../../components/Header/Header'
import {Outlet} from 'react-router-dom'
import SettingsBox from '../../components/Settings/SettingsBox'

function RootLayout()
{
   return (
      <>
         <Header />
         <SettingsBox />
         <Outlet />
      </>
   )
}

export default RootLayout
