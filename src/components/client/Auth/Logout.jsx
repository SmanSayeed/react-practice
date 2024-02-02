import React from 'react'
import authService from '../../../appwrite/auth'
import { logout } from '../../../store/authSlice'
import { useDispatch } from 'react-redux'

export default function Logout() {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout().then(()=>{
            dispatch(logout());
        });
    }
  return (
    <div className='btn btn-danger' onClick={logoutHandler}>Logout</div>
  )
}
