import React from 'react'
import './UserCard.css';

const UserCard = ({user}) => {

  


  return (
    <div>
        <div class="container">
    
      <div class="card">
        <div class="card-shape">
          <div class="hexagon1"></div>
          <div class="hexagon2"></div>
          <div class="hexagon3"></div>
        </div>
        <div class="card-person">
        <h2>Your name: {user.name}</h2>
        <h2>User name :{user.username}</h2>
        <h2>Email :{user.email}</h2>
         </div>
        <div class="card-address">
        <p>Address :</p>

          <p>    &nbsp;&nbsp;&nbsp;&nbsp; street : {user.address.street}</p>
           <p> &nbsp;&nbsp;&nbsp;&nbsp; suite : {user.address.suite}</p>
          <p> &nbsp;&nbsp;&nbsp;&nbsp; city : {user.address.city}</p>
          <p> &nbsp;&nbsp;&nbsp;&nbsp;zipcode : {user.address.zipcode}</p>
          <p> &nbsp;&nbsp;&nbsp;&nbsp;geo : lat {user.address.geo.lat}</p>
          <p> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;lng : {user.address.geo.lng}</p>

        </div>
      </div>
    </div>
    </div>
  )
}

export default UserCard