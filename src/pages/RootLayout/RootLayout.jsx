import Header from '../../components/Header/Header'
import {Outlet} from 'react-router-dom'
import SettingsBox from '../../components/Settings/SettingsBox'
import Footer from '../../components/Footer/Footer'

function RootLayout()
{
   return (
      <>
         <Header />
         <SettingsBox />
         <Outlet />
         <Footer />
      </>
   )
}

export default RootLayout
