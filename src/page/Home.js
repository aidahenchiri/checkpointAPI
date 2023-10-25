import React from 'react'
import { useDispatch } from 'react-redux'
import { getUsers } from '../JS/Action/UserAction'
import { Link } from 'react-router-dom'
import './home.css'
const Home = () => {
    const dispatch=useDispatch()
    return (
      <div>


          <div class="login">
    <form method="post">
    
        <Link to={"/users"}><button onClick={()=>dispatch(getUsers())} class="btn btn-primary btn-block btn-large">USERS LISTE</button></Link>
    </form>
</div>
      </div>
  )
}

export default Home