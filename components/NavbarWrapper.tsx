import React from 'react'
import  {NavbarDark}  from './Navbar'
import GET from '@/server_actions/GET'
import { getAccessToken } from '@/utils/sessionTokenAccessor'
const NavbarWrapper = async() => {
  const token = await getAccessToken()
    if(!token){
        return (
            <div>Not authorized</div>
        )
  }
  const user = await GET('user/getUser')
  return (
    <>
        <NavbarDark user={user}/>
    </>
  )
}

export default NavbarWrapper