import React from 'react'
import Header from '../../components/Header/Header'
import {Outlet} from 'react-router-dom'
import SettingsBox from '../../components/Settings/SettingsBox'
import {useSelector} from 'react-redux';

function RootLayout()
{
   const {isLoggedIn} = useSelector(state => state.auth);

   return (
      <>
         <Header />
         {
            isLoggedIn &&
            <SettingsBox />
         }
         <Outlet />
      </>
   )
}

export default RootLayout
