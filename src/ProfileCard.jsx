import React from 'react';
 
const ProfileCard = ({ name, username, email, about,photo, age, address, hobbies,mobilite,disponibilité }) => {
    return (<>
        <div className="profile-card">
            <img src={photo} alt="" />
            <h2>{name}</h2>
            <p>Username: {username}</p>     
            <p>Email: {email}</p>
            <p>About: {about}</p>
        </div>
        <div>
            <p>age: {age}</p>
            <p>Address: {address}</p>
            <ul>
                {hobbies.map((i, el)=>(<li key={i}>{el}</li>))}
            </ul>
        </div>
    </>
    );
};
 
export default ProfileCard;

