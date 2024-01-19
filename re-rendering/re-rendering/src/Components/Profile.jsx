import React from "react";
import avatar from '../assets/goku.png';

const Profile = ({user}) => {
    return (
        <div className="profile">
            <img src= {avatar} alt = " " style = {{ width: '400' , height: '350px'}} />
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
        </div>
    );
};

export default Profile;