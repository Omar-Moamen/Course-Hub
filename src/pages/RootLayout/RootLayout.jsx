import React from 'react'
import Header from '../../components/Header/Header'
import Landing from '../Landing/Landing'
import LandingOverlay from '../../components/Overlay/LandingOverlay'
import {Outlet} from 'react-router-dom'

function RootLayout()
{
   return (
      <>
         <LandingOverlay>
            <Header />
            <Landing />
         </LandingOverlay>
         <Outlet />
      </>
   )
}

export default RootLayout
