import React, {useEffect} from 'react'
import Header from '../../components/Header/Header'
import {Outlet} from 'react-router-dom'
import SettingsBox from '../../components/Settings/SettingsBox'
import {useDispatch, useSelector} from 'react-redux';
import {getUser} from '../../store/userSlice';

function Index()
{
   return (
      <div>
         Index
      </div>
   )
}

export default Index
