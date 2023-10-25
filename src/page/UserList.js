import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserCard from './UserCard'
import { getUsers } from '../JS/Action/UserAction'

const UserList = () => {
    const dispatch=useDispatch()
    const users=useSelector(state=>state.UserReducer.users)
    useEffect(()=>
    {
        dispatch(getUsers)
    },[dispatch])
  return (
    <div>{users?.map(user => <UserCard user={user}  key={user.id}/>)}
    </div>
  )
}

export default UserList